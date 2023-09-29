"use client";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { Button } from "./buttons/Button";

const generateProfilePhoto = (name:string) => {
  const initials = name
    .split(" ")
    .map((word: string) => word[0].toUpperCase())
    .join("");

  const backgroundColor =
    "red" + Math.floor(Math.random() * 16777215).toString(16);

  return (
    <div className="profile-photo" style={{ backgroundColor }}>
      {initials}
    </div>
  );
};

const AuthProfileMenu = () => {
  const { data, status } = useSession();
  const isAuth = status === "authenticated";

  if (isAuth) {
    const name = data?.user?.name || "Fallback Name"; // Provide a fallback name
    const profilePhoto = generateProfilePhoto(name);

    return (
      <div className="flex gap-2">
        <div className="flex justify-center items-center w-[50px] h-[50px] text-white rounded-full cursor-pointer bg-[#181818]"> <h4 className="font-bold text-[20px] ">{profilePhoto}</h4></div>

        <button onClick={() => signOut()}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <Button type="button" variant="primary">
        <Link href="/submission">Submit Design</Link>
      </Button>
    </div>
  );
};


export default AuthProfileMenu;
