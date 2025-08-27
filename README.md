# Earthen Canvas - Product Management App

A simple Next.js 15 application with authentication using **NextAuth.js**.  
Users can view public pages and products, while authenticated users can access a protected dashboard to add new products.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Core Features](#core-features)
- [Optional Enhancements](#optional-enhancements)
- [Technologies Used](#technologies-used)
- [Setup & Installation](#setup--installation)
- [Routes Summary](#routes-summary)
- [Live Site](https://earthen-canvas-ec.vercel.app/)
- [License](#license)

---

## Project Overview

Earthen Canvas is a minimal product showcase and management app.  
It demonstrates the use of **Next.js App Router**, **NextAuth.js**, and serverless API routes for managing products.

---

## Core Features

1. **Landing Page (`/`)**
   - Includes Navbar, Hero section, Product Highlights, Footer
   - Navigation links to login and products page
   - Publicly accessible

2. **Login Page (`/login`)**
   - Implemented using NextAuth.js
   - Supports Google OAuth login (or credentials login)
   - Redirects to `/products` after successful login

3. **Product List Page (`/products`)**
   - Publicly accessible
   - Fetches and displays list of products
   - Each product includes name, description, price, and a “View Details” button

4. **Product Details Page (`/products/[id]`)**
   - Publicly accessible
   - Displays full details of a single product

5. **Protected Page: Add Product (`/dashboard/add-product`)**
   - Accessible only for logged-in users
   - Form to add new products and save to database
   - Redirects unauthenticated users to login page

---

## Optional Enhancements

- Loading spinner while submitting forms
- Toast messages for success/failure notifications
- Light/Dark theme toggle

---

## Technologies Used

- **Next.js 15** (App Router)  
- **NextAuth.js** for authentication  
- **MongoDB / Mock API** for product data  
- **Tailwind CSS** for styling  
- **React Hooks** for state management  

---

## Setup & Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/earthen-canvas.git
cd earthen-canvas


npm install
# or
yarn install



NEXTAUTH_URL=https://earthen-canvas-six.vercel.app
NEXTAUTH_SECRET=your_random_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
MONGODB_URI=your_mongodb_connection_string


npm run dev
# or
yarn dev


Visit http://localhost:3000

| Route                    | Access    | Description                                                |
| ------------------------ | --------- | ---------------------------------------------------------- |
| `/`                      | Public    | Landing page with Hero, Product Highlights, Navbar, Footer |
| `/login`                 | Public    | Login page using NextAuth.js                               |
| `/products`              | Public    | Product list page                                          |
| `/products/[id]`         | Public    | Product details page                                       |
| `/dashboard/add-product` | Protected | Add new product (requires login)                           |


Live Site

[Vercel](https://earthen-canvas-ec.vercel.app/)
