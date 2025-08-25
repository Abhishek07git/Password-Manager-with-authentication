
## 🔐 Password Manager with Authentication
A secure and user-friendly Password Manager built with MERN stack (MongoDB, Express.js, React.js, Node.js).
This app allows users to register, log in, and securely store, edit, delete, and manage their passwords, ensuring data privacy with encryption and JWT authentication.

## 🚀 Features
✅ User Authentication – Secure signup & login with hashed passwords

✅ JWT-based Authorization – Access protected routes with tokens stored in HTTP-only cookies

✅ Password Encryption – User passwords are encrypted before saving to the database

✅ Personalized Dashboard – Each user can view only their own stored credentials

✅ Password CRUD Operations – Add, edit, delete, and search saved credentials

✅ Responsive UI – Built with React.js for a smooth user experience
## 🛠️ Tech Stack
**Frontend** (React.js)

React Router – navigation

Axios – API requests

Tailwind CSS (styling)

**Backend** (Express.js & Node.js)

Express.js – server setup & routes

JWT – authentication & authorization

bcrypt – password hashing

cookie-parser – secure cookie handling

**Database**

MongoDB with Mongoose
## 📂 Project Structure
```
/project-root/
│
├── client/                     # React frontend
│   └── src/
│       ├── components/         # Navbar, Manager, Footer, etc.
│       ├── pages/              # Login.jsx, Signup.jsx, Dashboard.jsx
│       └── App.jsx
│
├── server/                     # Backend (Authentication + Password Manager)
│   ├── models/User.js
│   ├── routes/user.js
│   └── index.js
│
└── README.md                   # Project documentation

```


## ⚙️ Installation & Setup
**1. Backend Setup (Server on Port 3000)**
```
cd ../server
npm install
npm start

```
**2. Setup Frontend (React - Port 5173)**
```
cd ../client
npm install
npm run dev

```
**3. Open in Browser**
```
http://localhost:5173/   # React frontend
http://localhost:3000/   # server backend
```
## 📸 Screenshots
[Working Screenshots](https://drive.google.com/file/d/1VEfROIF4_dtZmatFl-oTiPfLd5Xm5S0l/view?usp=sharing)



## 🔒 Security
Master password stored as hashed (bcrypt) + salted

JWT tokens stored in HTTP-only cookies

Passwords encrypted before saving in MongoDB

Each user sees only their own data