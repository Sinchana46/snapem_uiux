# Snap'em – Grocery Delivery UI

Snap'em is a modern grocery delivery web application designed to provide users with a seamless online grocery shopping experience. The application features an intuitive user interface, product browsing, shopping cart management, user authentication pages and responsive layouts to demonstrate modern frontend development and UI/UX principles.

This project was developed using **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

# Project Features

- Modern onboarding experience with Splash Screen.
- User authentication through Sign Up and Sign In pages.
- Browse grocery products from the home page.
- Search products efficiently.
- View product details and add items to the shopping cart.
- Manage shopping cart before checkout.
- Simulate multiple payment methods.
- View order confirmation after successful checkout.
- Access and manage user profile.
- Responsive interface built using reusable React components.

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

The following screenshots illustrate the complete user journey through the Snap'em Grocery Delivery application.

---

### User Authentication

| Splash Screen | Sign Up |
|---------------|---------|
| <img src="screenshots/7_Splash_Screen.jpeg" width="450"> | <img src="screenshots/8_SIgn_up.jpeg" width="450"> |

| Sign In | Home |
|----------|------|
| <img src="screenshots/20_Sign_In.jpeg" width="450"> | <img src="screenshots/21_Home_Page-1.jpeg" width="450"> |

---

### Product Discovery

| Search | Product Listing |
|--------|-----------------|
| <img src="screenshots/30_Search_Feature.jpeg" width="450"> | <img src="screenshots/24_Cart_Features.jpeg" width="450"> |

---

### Shopping Experience

| Shopping Cart | Payment |
|---------------|---------|
| <img src="screenshots/25_Cart_Page.jpeg" width="450"> | <img src="screenshots/26_Payment_Feature.jpeg" width="450"> |

| Order Confirmation | User Profile |
|-------------------|--------------|
| <img src="screenshots/29_UPI_Confirmation.jpeg" width="450"> | <img src="screenshots/31_User_Profile.jpeg" width="450"> |

---

<details>

<summary><strong>View Additional Screens</strong></summary>

<br>

### Additional Home Screens

| Home Screen 2 | Home Screen 3 |
|---------------|---------------|
| <img src="screenshots/22_Home_Page-2.jpeg" width="450"> | <img src="screenshots/23_Home_Page-3.jpeg" width="450"> |

### Additional Shopping Screens

| Home Screen | Cart |
|-------------|------|
| <img src="screenshots/10_Homescreen.jpeg" width="450"> | <img src="screenshots/11_Cart.jpeg" width="450"> |

| Sign In | Payment Features |
|----------------|------------------|
| <img src="screenshots/9_Sign_In.jpeg" width="450"> | <img src="screenshots/13_UPI_Payment.jpeg" width="450"> |

| UPI Payment | Sign Up |
|-------------|---------|
| <img src="screenshots/27_UPI_Feature.jpeg" width="450"> | <img src="screenshots/19_Sign_Up.jpeg" width="450"> | 

| UPI Confirmation | COD Confirmation |
|------------------|------------------|
| <img src="screenshots/15_UPI_Confirmation.jpeg" width="450"> | <img src="screenshots/14_COD_Payment.jpeg" width="450"> |

| User Profile | Cart Page |
|--------------|-----------|
| <img src="screenshots/16_User_profile.jpeg" width="450"> | <img src="screenshots/12_Cart_Page.jpeg" width="450"> |

</details>

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
