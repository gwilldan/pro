"use client";

import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userInfo;

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (res?.error) return setError(res.error);
    router.replace("/profile");
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-96 p-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          {error ? (
            <div>hhhh
            </div>
          ):null}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 block w-full border rounded-md bg-gray-100"
              placeholder="Enter your email"
              value={email}
              onChange={({ target }) =>
                setUserInfo({ ...userInfo, email: target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 block w-full border rounded-md bg-gray-100"
              placeholder="Enter your password"
              value={password}
              onChange={({ target }) =>
                setUserInfo({ ...userInfo, password: target.value })
              }
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          I am new.{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a>{" "}
          only.
        </p>
        <button onClick={() => signIn("github")}>logout</button>
      </div>
    </div>
  );
};

export default Login;
