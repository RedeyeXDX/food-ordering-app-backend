# 🍽️ Food Ordering App - Backend

This is the backend service for a food ordering concept app. It allows users to place orders, authenticate, and track their order progression using **Firebase Realtime Database**, **MySQL**, and **Express.js**.

---

## 📦 Features

- 🛒 Place orders from the UI and store them in the database
- 🔐 **JWT Authentication** to protect private routes
- 📝 **User registration and login**
- 📈 View order progression per user
- ⏳ Auto logout after token expiration (JWT expiry handling)

---

## 🛠️ Built With

- **JavaScript**
- **Express.js**
- **JWT (JSON Web Token)**
- **Sequelize (ORM)**
- **MySQL**
- **Firebase Storage**
- **ReactJS** (for frontend — see [Frontend Repo](https://github.com/RedeyeXDX/food-ordering-app-frontend))

---

## 🔧 API & Services Used

- **Firebase Realtime Database**
- **Firebase Storage**

---

## 📁 Project Structure

project-root/
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
└── server.js

yaml
Copy
Edit

## 🚀 Getting Started

### 🔨 Prerequisites

- Node.js v18+
- MySQL installed and running
- Firebase project setup (for Realtime DB and Storage)

### 🧪 Setup

```bash
git clone https://github.com/RedeyeXDX/food-ordering-app-backend.git
cd food-ordering-app-backend
npm install


---

### ENV

PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=food_ordering
JWT_SECRET=your_jwt_secret
FIREBASE_API_KEY=...
FIREBASE_PROJECT_ID=...
FIREBASE_STORAGE_BUCKET=...
```
