import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";

import RegisterForm from "@/app/(guest_route)/auth/register/RegisterForm";
import LoginForm from "@/app/(guest_route)/auth/login/LoginForm";
function MyTabs() {
  return (
    <Tab.Group>
      <Tab.List className="flex justify-between items-center mb-[33px] w-[100%]">
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={
                selected
                  ? "border-b-[2px] border-black py-3 px-6 w-[100%]"
                  : "px-6 py-3  text-base w-[100%]"
              }
            >
              Sign Up
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={
                selected
                  ? "border-b-[2px] border-black py-3  px-6 w-[100%]"
                  : "px-6 py-3  text-base w-[100%]"
              }
            >
              Login
            </button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <RegisterForm />
        </Tab.Panel>
        <Tab.Panel>
          <LoginForm />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

export default MyTabs;
