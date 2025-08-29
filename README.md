# 🌱 Earthen Canvas - Product Management App

A simple **Next.js 15** application with authentication using **NextAuth.js**.  
Users can browse public pages and products, while authenticated users can access a protected dashboard to add new products.

🔗 **Live Site:** [https://earthen-canvas-ec.vercel.app/](https://earthen-canvas-ec.vercel.app/)

---

## 📸 Preview

![Earthen Canvas Preview](https://i.ibb.co.com/KxSK20w9/Earthen-Canvas.jpg)

---

## 📑 Table of Contents

- [Project Overview](#project-overview)
- [Core Features](#core-features)
- [Optional Enhancements](#optional-enhancements)
- [Technologies Used](#technologies-used)
- [Setup & Installation](#setup--installation)
- [Routes Summary](#routes-summary)
- [License](#license)

---

## 📌 Project Overview

**Earthen Canvas** is a minimal product showcase and management application.  
It demonstrates the use of **Next.js App Router**, **NextAuth.js**, and serverless API routes for product management.

---

## 🚀 Core Features

1. **Landing Page (`/`)**
   - Includes **Navbar, Hero, Product Highlights, Footer**
   - Navigation links to **Login** and **Products**
   - Publicly accessible

2. **Login Page (`/login`)**
   - Implemented with **NextAuth.js**
   - Supports **Google OAuth login** (or credentials login)
   - Redirects to **`/products`** after successful login

3. **Product List Page (`/products`)**
   - Public page
   - Fetches and displays list of products
   - Each product includes:
     - Name  
     - Description  
     - Price  
     - “View Details” button

4. **Product Details Page (`/products/[id]`)**
   - Public page
   - Shows full details of a single product

5. **Protected Page: Add Product (`/dashboard/add-product`)**
   - Accessible only for **logged-in users**
   - Form to add new products and save to database
   - Redirects unauthenticated users to the **login page**

---

## 🎨 Optional Enhancements

- ⏳ Loading spinner while submitting forms  
- 🔔 Toast messages for success/failure notifications  
- 🌗 Light/Dark theme toggle  

---

## 🛠️ Technologies Used

- **Next.js 15 (App Router)**  
- **NextAuth.js** for authentication  
- **MongoDB / Mock API** for product data  
- **Tailwind CSS** for styling  
- **React Hooks** for state management  

---

## ⚙️ Setup & Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/earthen-canvas.git
cd earthen-canvas 
<br/>

Install dependencies

npm install
# or
yarn install

<br/>
Set up environment variables

Create a .env.local file in the project root and add:

NEXTAUTH_URL=https://earthen-canvas-ec.vercel.app/
NEXTAUTH_SECRET=your_random_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
MONGODB_URI=your_mongodb_connection_string

<br/>
Run the development server
```bash
npm run dev
# or
yarn dev
<br/>

Visit 👉 http://localhost:3000
<br/>
🗂️ Routes Summary
Route	Access	Description
/	Public	Landing page with Hero, Product Highlights, Navbar, Footer
/login	Public	Login page using NextAuth.js
/products	Public	Product list page
/products/[id]	Public	Product details page
/dashboard/add-product	Protected	Add new product (requires login)
📜 License
<br/>
This project is licensed under the MIT License.
You are free to use, modify, and distribute this project with proper attribution.

💡 Built with ❤️ using Next.js 15, NextAuth.js, Tailwind CSS, and MongoDB.
<br/>









