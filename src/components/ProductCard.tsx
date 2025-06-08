import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { Product } from '../types';
import { useApp } from '../context/AppContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { state, dispatch } = useApp();
  
  const cartItem = state.cart.find(item => item.id === product.id);
  const quantity = cartItem?.quantity || 0;

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const handleUpdateQuantity = (newQuantity: number) => {
    if (newQuantity === 0) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: product.id });
    } else {
      dispatch({ type: 'UPDATE_CART_QUANTITY', payload: { id: product.id, quantity: newQuantity } });
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <div className="aspect-square relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
        />
      </div>
      
      <div className="p-4">
        <div className="mb-2">
          <h3 className="font-semibold text-brown-900 text-lg">{product.name}</h3>
          <p className="text-brown-600 text-sm">{product.unit}</p>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-brown-900">₹{product.price}</span>
          
          {quantity === 0 ? (
            <button
              onClick={handleAddToCart}
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center space-x-1 font-medium"
            >
              <Plus className="h-4 w-4" />
              <span>Add</span>
            </button>
          ) : (
            <div className="flex items-center space-x-2 bg-primary-600 rounded-lg">
              <button
                onClick={() => handleUpdateQuantity(quantity - 1)}
                className="p-2 text-white hover:bg-primary-700 rounded-l-lg transition-colors"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="px-3 py-2 text-white font-medium">{quantity}</span>
              <button
                onClick={() => handleUpdateQuantity(quantity + 1)}
                className="p-2 text-white hover:bg-primary-700 rounded-r-lg transition-colors"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}