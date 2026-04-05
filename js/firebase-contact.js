// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// بياناتك (انت جاهز بيها 👍)
const firebaseConfig = {
  apiKey: "AIzaSyBPevkB1VsaWXOnDG5Rspq_20Wl3ChgvuE",
  authDomain: "aeystudio-7706e.firebaseapp.com",
  projectId: "aeystudio-7706e",
  storageBucket: "aeystudio-7706e.firebasestorage.app",
  messagingSenderId: "193850641100",
  appId: "1:193850641100:web:abae839112b20893c19069"
};

// تشغيل Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// الفورم
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value;

  try {
    // حفظ في Firestore
    await addDoc(collection(db, "contactMessages"), {
      name,
      email,
      service,
      message,
      createdAt: serverTimestamp()
    });

    // إرسال إيميل (عن طريق extension)
    await addDoc(collection(db, "mail"), {
      to: ["aeystudio@outlook.com"],
      message: {
        subject: "New Message from Website",
        text: `
Name: ${name}
Email: ${email}
Service: ${service}

Message:
${message}
        `
      }
    });

    form.reset();
    status.textContent = "تم إرسال رسالتك بنجاح ✅";

  } catch (err) {
    console.error(err);
    status.textContent = "حصل خطأ ❌ حاول تاني";
  }
});
