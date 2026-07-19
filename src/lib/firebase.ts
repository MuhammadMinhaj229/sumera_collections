import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeFirestore } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

// Utility to safely extract values while ignoring 'undefined', 'null' strings or empty quotes
const sanitizeConfigValue = (envVal: string | undefined, fallback: string): string => {
  if (!envVal) return fallback;
  const cleaned = envVal.trim().replace(/^['"]|['"]$/g, '');
  if (!cleaned || cleaned === 'undefined' || cleaned === 'null') {
    return fallback;
  }
  return cleaned;
};

// Prioritize environment variables for production deployments (e.g., Vercel) while maintaining a local fallback
const finalConfig = {
  apiKey: sanitizeConfigValue(import.meta.env.VITE_FIREBASE_API_KEY, firebaseConfig.apiKey),
  authDomain: sanitizeConfigValue(import.meta.env.VITE_FIREBASE_AUTH_DOMAIN, firebaseConfig.authDomain),
  projectId: sanitizeConfigValue(import.meta.env.VITE_FIREBASE_PROJECT_ID, firebaseConfig.projectId),
  storageBucket: sanitizeConfigValue(import.meta.env.VITE_FIREBASE_STORAGE_BUCKET, firebaseConfig.storageBucket),
  messagingSenderId: sanitizeConfigValue(import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID, firebaseConfig.messagingSenderId),
  appId: sanitizeConfigValue(import.meta.env.VITE_FIREBASE_APP_ID, firebaseConfig.appId),
  firestoreDatabaseId: sanitizeConfigValue(import.meta.env.VITE_FIREBASE_DATABASE_ID, firebaseConfig.firestoreDatabaseId),
};

const app = initializeApp(finalConfig);

// Use initializeFirestore with forceLongPolling: true to bypass WebSocket/gRPC blocks in firewalls and adblockers
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
}, finalConfig.firestoreDatabaseId || undefined);

export const auth = getAuth();
