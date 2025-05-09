# Firebase Auth React App

This is a simple authentication app built with **React**, **Vite**, and **Firebase Authentication**. It supports:

- Email/password signup and login
- Google sign-in
- Password reset via email
- Auth state persistence across refreshes

## 🔧 Features

- React (with Vite)
- Firebase Authentication
- React Router v6
- Tailwind CSS styling
- Authentication state persistence

## 📁 Folder Structure

```
firebase-auth-react-app/
├── public/
├── src/
│   ├── components/         # Shared UI components
│   ├── pages/              # Auth-related and dashboard pages
│   ├── firebase.js         # Firebase config
│   ├── App.jsx             # Routes setup
│   └── main.jsx            # Entry point
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/firebase-auth-react-app.git
cd firebase-auth-react-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Add Firebase configuration
Create a file at `src/firebase.js` and paste your Firebase config:

```js
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
```

Enable Email/Password and Google auth in your Firebase console.

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📄 Pages

- `/login`: User login
- `/signup`: User registration
- `/reset-password`: Send password reset email
- `/dashboard`: Protected dashboard (only visible when logged in)

## 🛡 Auth Flow

Firebase's `onAuthStateChanged` is used in `App.jsx` to persist and track authentication state. Navigation is protected accordingly.

## 💻 Deploying to Vercel

1. Push your project to GitHub
2. Go to [https://vercel.com](https://vercel.com) and connect your GitHub repo
3. Set environment variables if needed (e.g. Firebase config)
4. Deploy!

## 📃 License

This project is licensed under the MIT License.

---

Feel free to fork and customize it for your own use!
