"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Button } from "./buttons/Button";

export default function Modal(): JSX.Element {
  let [isOpen, setIsOpen] = useState<boolean>(false);

  function closeModal(): void {
    setIsOpen(false);
  }

  function openModal(): void {
    setIsOpen(true);
  }

  return (
    <>
      <Button onClick={openModal} type="button" variant="primary">
        Submit Design
      </Button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden  bg-white p-12 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  ></Dialog.Title>
                  <div className="mt-2">
                    <div className="flex justify-between items-center mb-[33px]">
                      <h4 className="px-6 ">Sign Up</h4>
                      <h4 className="px-6">Login</h4>
                    </div>
                    <form>
                      <div className="mb-6">
                        <label className="mb-2">
                          Name<sup>*</sup>
                        </label>
                        <input
                          className="h-[48px] outline-none w-[100%]  border-[1px] border-[#000000] rounded-lg"
                          type="text"
                        />
                      </div>
                      <div className="mb-6">
                        <label className="mb-2">
                          Email<sup>*</sup>
                        </label>
                        <input
                          className="h-[48px] outline-none w-[100%]  border-[1px] border-[#000000] rounded-lg"
                          type="text"
                        />
                      </div>
                      <div className="mb-6">
                        <label className="mb-2">
                          Password<sup>*</sup>
                        </label>
                        <input
                          className="h-[48px] outline-none w-[100%]  border-[1px] border-[#000000] rounded-lg"
                          type="text"
                        />
                      </div>
                      <div className="">
                        <button className="w-[100%] h-[48px] bg-[#181818] text-white rounded mb-4">Sign Up</button>
                        <button className="w-[100%] h-[48px] border-[1px] border-[#181818] text-[#181818] rounded mb-4">Sign Up with Google</button>
                 
                      </div>
                      <h5 className="mt-8 text-center">Already have an account? <a>Login</a></h5>
                    </form>
                  </div>

                  <div className="mt-4"></div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
