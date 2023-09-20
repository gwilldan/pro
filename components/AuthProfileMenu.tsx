"use client";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const AuthProfileMenu = () => {
  const { data, status } = useSession();
  const isAuth = status === "authenticated";

  if (isAuth)
    return (
      <div>
        
        {data?.user?.name}
        <button onClick={() => signOut()}>logout</button>
      </div>
    );
  return (
    <div>
      <Link href="/auth/sign-in">Login</Link>
    </div>
  );
};

export default AuthProfileMenu;
