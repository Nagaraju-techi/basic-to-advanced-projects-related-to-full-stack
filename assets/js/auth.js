// assets/js/auth.js
import { auth } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Signup
export function registerUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Account created successfully!");
      window.location.href = "index.html";
    })
    .catch(err => alert(err.message));
}

// Login
export function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "index.html";
    })
    .catch(err => alert(err.message));
}

// Logout
export function logoutUser() {
  return signOut(auth).then(() => {
    window.location.href = "login.html";
  });
}

// Auth state checking (Protect pages)
export function checkAuthState() {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = "login.html";
    }
  });
}
