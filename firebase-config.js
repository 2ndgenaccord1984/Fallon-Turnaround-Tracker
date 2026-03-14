import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDQAtEZ34g_a8l0criXxuPpq81-iw5_uhY",
  authDomain: "turnaround-tracker-28e95.firebaseapp.com",
  databaseURL: "https://turnaround-tracker-28e95-default-rtdb.firebaseio.com",
  projectId: "turnaround-tracker-28e95",
  storageBucket: "turnaround-tracker-28e95.firebasestorage.app",
  messagingSenderId: "612118976397",
  appId: "1:612118976397:web:f83395c227bd47ca0b8fc4"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };