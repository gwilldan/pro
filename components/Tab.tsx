import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";


import {useState} from 'react'
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
        
          
        </Tab.Panel>
        <Tab.Panel>
      
          
          
       </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

export default MyTabs;
