# Book Store (MERN Stack)

## 📌 Project Overview

The **Book Store** is a full-stack web application built using the **MERN** stack (**MongoDB, Express.js, React, and Node.js**). It allows users to browse, search, add, update, and delete books. Users can also register and log in to manage their book collection.

## 🚀 Features

- User authentication (Register/Login with Firebase Authentication)
- Browse available books
- Search for books by title, author, or genre
- Add new books to the store (Admin feature)
- Edit book details (Admin feature)
- Delete books from the store (Admin feature)
- Responsive UI with React & Tailwind CSS
- RESTful API with Express & MongoDB

## 🛠️ Tech Stack

- **Frontend:** React, React Router, Redux (for state management), Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose for schema management)
- **Authentication:** Firebase Authentication
- **API Testing:** Postman

## 📦 Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/rohitsingh037/book-store.git
cd book-store
```

### 2️⃣ Backend Setup

```sh
cd backend
npm install
npm start / npx nodemon
```

### 3️⃣ Frontend Setup

```sh
cd frontend
npm install
npm run dev
```

## 🛠️ Environment Variables
Create a .env file in the backend directory and add the following:

```sh
DB_URL=your_database_url
JWT_SECRET_KEY=your_jwt_secret_key
```

Create a .env file in the frontend directory and add the following:

```sh
VITE_APIKEY=your_firebase_api_key
VITE_AUTHDOMAIN=your_firebase_auth_domain
VITE_PROJECTID=your_firebase_project_id
VITE_STORAGEBUCKET=your_firebase_storage_bucket
VITE_MESSAGINGSENDERID=your_firebase_messaging_sender_id
VITE_APPID=your_firebase_app_id
VITE_MEASUREMENTID=your_firebase_measurement_id
```

## 🏗️ Future Enhancements

- Implement a shopping cart
- Add payment gateway (Stripe/PayPal)
- User profile management
- Review and rating system for books
