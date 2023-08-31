import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";
import Signin from "./Signin";
import Login from "./Login";

function MyTabs() {
  return (
    <Tab.Group>
      <Tab.List className="flex justify-between items-center mb-[33px] w-[100%]">
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={selected ? "border-b-[2px] border-black px-6" : "px-6 text-base"}
            >
              Sign Up
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={selected ? "border-b-[2px] border-black px-6" : "px-6 text-base"}
            >
              Login
            </button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
        <Signin />
        </Tab.Panel>
        <Tab.Panel>    <Login /></Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

export default MyTabs;
