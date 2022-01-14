import type {FirebaseApp} from "firebase/app";
import type {Auth as FirebaseAuth} from "firebase/auth";
 
import {getApps, initializeApp} from "firebase/app";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

export const firebaseConfig = {
    apiKey: "AIzaSyCn4XhFJPYOzkWwd13c8y7npy9MfcodvNs",
    authDomain: "next-cookie-89902.firebaseapp.com",
    projectId: "next-cookie-89902",
    storageBucket: "next-cookie-89902.appspot.com",
    messagingSenderId: "811205017053",
    appId: "1:811205017053:web:224d3c10c1acb7a5c30a34"
};

export const getFirebaseApp = (): FirebaseApp | undefined => {
    if (typeof window === "undefined") return;
  
    return getApps()[0] || initializeApp(firebaseConfig);
};

export const getFirebaseAuth = (): FirebaseAuth => {
    return getAuth(getFirebaseApp());
};

export const login = async (email: string, password: string) => {
    const auth = getFirebaseAuth();

    const result = await signInWithEmailAndPassword(auth, email, password);

    const id = await result.user.getIdToken();

    await fetch("/api/session", {method: "POST", body: JSON.stringify({id})});
};

export const logout = async () => {
    await fetch("/api/sessionLogout", {method: "POST"});
};