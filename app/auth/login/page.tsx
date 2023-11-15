"use client";
import { useRef, useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { useRouter } from 'next/router';
import './login.scss';


import Link from "next/link"
import logo from '../../assets/logo.svg';
import React from 'react';

import axios from 'axios';

interface LoginProps {}

const LOGIN_URL = 'https://xpiremider.onrender.com/api/auth/login';

const Login: React.FC<LoginProps> = () => {
  const { setAuth } = useAuth();
  const router = useRouter();

  const from = router.query.from || '/';

  const errRef = useRef<HTMLParagraphElement>(null);

  const [email, setEmail] = useState<string>('');
  const [pwd, setPwd] = useState<string>('');
  const [errMsg, setErrMsg] = useState<string>('');

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [email, pwd]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password: pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      const accessToken = response?.data?.token;

      setAuth({ email, pwd, accessToken });
      setEmail('');
      setPwd('');

      router.push(from as string);
    } catch (err: any) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }

      if (errRef.current) {
        errRef.current.focus();
      }
    }
  };

  return (
    <div className="w-full h-screen flex item-start">
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute top-[25%] left-[10%] flex flex-col">
          <h1 className="text-6xl text-white font-bold mb-8">Welcome to expiReminder</h1>
          <p className="text-xl text-[#f5f5f5] font-normal">
            Your trusted partner in managing product expirations effortlessly
          </p>
          <p className="text-xl text-[#f5f5f5] font-normal">
            We understand that keeping track of product lifespans can be challenging, but with expiReminder, you're in
            control. Say goodbye to wasted groceries and expired goods. It's time to start your journey towards a smarter,
            more organized life.
          </p>
        </div>
       
      </div>

      {/* Login Form */}
      <form className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-10 justify-between items-center" onSubmit={handleSubmit}>
        <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
          {errMsg}
        </p>
        <div className="flex mb-4 items-center justify-center">
          <img src={logo} alt="logo" className="h-20 w-20" />
          <h1 className="text-3xl text-[#131a4e] font-bold">expiReminder</h1>
        </div>

        <div className="w-full flex flex-col max-w-[500px]">
          <div className="flex flex-col w-full mb-2">
            <h3 className="text-4xl font-semibold mb-2">Login</h3>
            <p className="text-sm mb-2">Welcome back! Please enter your details</p>
          </div>

          <label htmlFor="email">Username:</label>
          <input
            type="text"
            id="email"
            ref={emailRef}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />

          <div className="w-full flex items-center justify-between">
            <div className="w-full flex items-center">
              <input type="checkbox" name="" className="w-4 h-4 mr-2" />
              <p className="text-sm">Remember me</p>
            </div>

            <p className="text-sm font-bold whitespace-nowrap cursor-pointer underline hover:text-[#FF7F00] underline-offset-2">
              Forgot Password
            </p>
          </div>

          <div className="w-full flex flex-col my-4">
            <button className="w-full my-2 bg-[#131a4e] rounded-md p-4 text-center font-semibold hover:bg-[#FF7F00] text-white">
              Log in
            </button>
          </div>

          <div className="w-full flex justify-center items-center relative py-2">
            <div className="w-full h-[1px] bg-black"></div>
            <p className="text-xl absolute text-black/80 bg-[#f5f5f5]">or</p>
          </div>

          <div className="w-full my-2 bg-[white] flex items-center justify-center rounded-md p-4 hover:text-[#FF7F00] text-center font-semibold border border-[darkBlue]/10 text-[darkBlue] cursor-pointer">
            {/* <img src={googleImg} alt="google-icon" className="mr-2 h-6"/>*/}
            Sign In with google
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-[darkBlue]">
            Don't have an account?{' '}
            <Link to="/signup">
              <span className="underline font-semibold hover:text-[#FF7F00] cursor-pointer underline-offset-2">Sign up for free</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
