import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { app } from "../Firebase/firebase";

const auth = getAuth(app);

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getUser = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((value) => console.log(value, "signin success")
    .catch((err) => console.log(err, "user not found")
    )
    )
    setEmail("");
    setPassword("");
  };

  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow">
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Email
      </label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        type="email"
        placeholder="Enter your email"
        required
        autoComplete="off"
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"
      />

      <label
        htmlFor="password"
        className="block text-sm font-medium text-gray-700 mt-4 mb-1"
      >
        Password
      </label>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="password"
        type="password"
        required
        placeholder="Enter your password"
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"
      />

      <button
        onClick={getUser}
        type="button"
        className="mt-6 w-full inline-flex justify-center items-center px-4 py-2 bg-amber-400 text-white font-medium rounded-md shadow hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-300 transition"
      >
        SignIn
      </button>
    </div>
  );
}

export default SignIn;
