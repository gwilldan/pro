"use client";
import React from "react";
import { verify_token } from "@/context/auth/verifyToken";
import { useAuth } from "@/context/auth/AuthInfo";
import { useMutation } from "react-query";
import { useEffect } from "react";
import { Button } from "./buttons/Button";
import Modal from "./Modal";
function AuthNavbar() {
  const { state, dispatch } = useAuth();

  const mutation = useMutation(() => verify_token(dispatch), {
    onError: (error) => {
      console.log(error);
    },
  });

  useEffect(() => {
    mutation.mutate();
  }, [dispatch]);

  return (
    <div>
      {state && state.email ? (
        <div className="flex items-center gap-3">
        <h1>{state.email}</h1>
        
        <Button
                onClick={() => dispatch({ type: "LOGOUT" })}
                type="button"
                variant="outline-primary"
              >
                LogOut
              </Button>
        </div>
      ) : (
        <div className="flex md:gap-4 gap-6 items-center">
          <Button
            type="button"
            variant="outline-primary"
            className="md:flex hidden"
          >
            Get Started
          </Button>

          <Modal />
        </div>
      )}
    </div>
  );
}

export default AuthNavbar;
