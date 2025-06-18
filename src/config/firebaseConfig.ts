// src/config/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Importe para usar o Firestore

// Seu objeto de configuração do Firebase copiado do Console
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  // measurementId: "YOUR_MEASUREMENT_ID" // se você não desativou analytics
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);

// Inicialize o Firestore
export const db = getFirestore(app); // <-- EXPORTADO AQUI!

// Você não precisa exportar 'app' diretamente para este projeto,
// mas é útil se for usar outros serviços do Firebase (Auth, Storage, etc.)
// export default app;