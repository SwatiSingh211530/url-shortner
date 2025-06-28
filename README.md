# URL Shortener

A simple URL shortening web application with user authentication, allowing users to shorten URLs and track clicks.

---

## Features

- User signup and login with email and contact details
- Password hashing for security
- URL shortening and click tracking
- User session management with login/logout
- Responsive UI with Bootstrap and background video
- Option to delete shortened URLs

---

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- EJS templating engine
- Bootstrap 5
- bcryptjs for password hashing
- express-session for session management

---

## Installation and Setup

1. Clone the repository:

```bash
git clone https://github.com/SwatiSingh211530/url-shortner.git


cd url-shortner
npm install
## .env

MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret_key
PORT=5000

url-shortner/
│
├── models/
│   ├── User.js
│   └── shorturl.js
│
├── views/
│   ├── index.ejs
│   ├── login.ejs
│   └── signup.ejs
│
├── public/
│   └── (static assets like CSS, JS, images)
│
├── server.js
├── package.json
├── .env
└── README.md

## Screenshots

### 🔹 Homepage View

<img src="https://github.com/SwatiSingh211530/url-shortner/raw/main/screen_short/homepage.png" alt="Homepage">

---

### 🔹 Login Page

<img src="https://github.com/SwatiSingh211530/url-shortner/raw/main/screen_short/loginpage.png"alt="Login Page">



