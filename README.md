# Snap'em – Grocery Delivery UI

Snap'em is a modern grocery delivery web application designed to provide users with a seamless online grocery shopping experience. The application features an intuitive user interface, product browsing, shopping cart management, user authentication pages and responsive layouts to demonstrate modern frontend development and UI/UX principles.

This project was developed using **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

# Project Features

- Browse grocery products through a clean and responsive interface.
- View featured grocery items on the homepage.
- Search products quickly.
- Add products to the shopping cart.
- Manage shopping cart items.
- User authentication interface (Sign In & Sign Up).
- User profile page.
- Payment workflow interface.
- Order confirmation pages.
- Responsive design across multiple devices.

# Technologies Used

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS

## Routing

- React Router DOM

## State Management

- React Context API

## Icons

- Lucide React

## Development Tools

- ESLint

# System Architecture

```mermaid
flowchart TD

A[User]
B[React Components]
C[React Router]
D[Context API]
E[Product Data]
F[Shopping Cart]
G[User Interface]

A --> G
G --> B
B --> C
B --> D
D --> E
D --> F
F --> G
```

# System Workflow

1. User launches the Snap'em application.
2. Homepage displays featured grocery products.
3. User browses available grocery items.
4. Products are added to the shopping cart.
5. Cart updates dynamically using the Context API.
6. User proceeds through the checkout flow.
7. Payment interface is displayed.
8. Order confirmation page completes the shopping experience.

# Project Structure

```text
snapem_uiux
│
├── src/
│   ├── components/
│   ├── context/
│   ├── data/
│   ├── pages/
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
│
├── public/
├── screenshots/
│
├── package.json
├── vite.config.ts
└── README.md
```

# Application Pages

- Splash Screen
- Home
- Product Listing
- Search
- Shopping Cart
- Payment
- Order Confirmation
- User Profile
- Sign In
- Sign Up

# Local Setup

## Clone the Repository

```bash
git clone https://github.com/Sinchana46/snapem_uiux.git
```

## Navigate to the Project Directory

```bash
cd snapem_uiux
```

## Install Dependencies

```bash
npm install
```

## Start the Development Server

```bash
npm run dev
```

The application will be available at the local address displayed in the terminal (typically `http://localhost:5173`).

# Screenshots

## Home Page

![Home](screenshots/21_Home_Page-1.jpeg)

## Product Listing

![Products](screenshots/24_Cart_Features.jpeg)

## Shopping Cart

![Cart](screenshots/25_Cart_Page.jpeg)

## Search

![Search](screenshots/30_Search_Feature.jpeg)

## User Profile

![Profile](screenshots/31_User_Profile.jpeg)

## Sign In

![Sign In](screenshots/20_Sign_In.jpeg)

## Sign Up

![Sign Up](screenshots/8_SIgn_up.jpeg)

## Payment

![Payment](screenshots/13_UPI_Payment.jpeg)

## Order Confirmation

![Confirmation](screenshots/29_UPI_Confirmation.jpeg)

## Additional Screens

| Splash Screen | Home Screen |
|---------------|-------------|
| ![](screenshots/7_Splash_Screen.jpeg) | ![](screenshots/10_Homescreen.jpeg) |

| Cart | Search |
|------|--------|
| ![](screenshots/11_Cart.jpeg) | ![](screenshots/18_Search_2.jpeg) |

| UPI Confirmation | COD Confirmation |
|------------------|------------------|
| ![](screenshots/15_UPI_Confirmation.jpeg) | ![](screenshots/28_COD_Confirmation.jpeg) |

# Project Highlights

- Modern React application
- TypeScript implementation
- Responsive UI
- Component-based architecture
- React Router navigation
- Context API state management
- Reusable React components
- Tailwind CSS styling

# Future Enhancements

- Backend integration
- Product database
- User authentication
- Online payment gateway
- Wishlist functionality
- Order history
- Product categories
- Real-time inventory
- Admin dashboard
