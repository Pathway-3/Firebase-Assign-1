"use client";

import React from "react";
import { auth, provider } from "./firebaseConfig";
import { signInWithPopup } from "firebase/auth";

export default function GoogleSignIn() {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup (auth, provider);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => handleGoogleSignIn()}
      >
        Sign in with Google
      </button>
    </div>
  );
}
