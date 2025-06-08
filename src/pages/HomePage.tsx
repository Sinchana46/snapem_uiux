import React from 'react';
import { Clock, Truck, Shield, Star } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Fresh Groceries
              <br />
              <span className="text-primary-200">Delivered Fast</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Get your essentials delivered in 15 minutes
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="flex items-center space-x-2">
                <Clock className="h-6 w-6" />
                <span>15 min delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="h-6 w-6" />
                <span>Free delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6" />
                <span>100% fresh</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brown-900 mb-4">
            Essential Groceries
          </h2>
          <p className="text-brown-600 text-lg">
            Fresh products delivered to your doorstep
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-brown-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brown-900 mb-4">
              Why Choose Snap'em?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-brown-900 mb-2">
                Lightning Fast
              </h3>
              <p className="text-brown-600">
                Get your groceries delivered in just 15 minutes
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-brown-900 mb-2">
                Premium Quality
              </h3>
              <p className="text-brown-600">
                Only the freshest and highest quality products
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-brown-900 mb-2">
                100% Safe
              </h3>
              <p className="text-brown-600">
                Contactless delivery with safety guaranteed
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}