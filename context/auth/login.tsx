//import { error } from "console";
import { Dispatch } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";


interface User  {
    email: string;
    password: string;
    firstname: string;
    lastname: string;
}

interface RegisterResponse {
    data: {
        email: string;
    };
    token: string;
    uid: string;
    message: string;
    error?: {
        message: string;
    };
}


export const loginUser = async (user: User | FieldValues, dispatch: Dispatch<any>) => {
    try {
        const res = await fetch("https://projexa.onrender.com/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        const data: RegisterResponse = await res.json();
        console.log(data);
        if (res.ok) {
            dispatch({ type: "LOGIN", payload:{ email:data.data.email, token: data.token, uid: data.data.uid} });
            toast.success(" Login in successully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
              console.log(data);
        
      
        }
        else{
            console.error(data);
        }
        
    } catch (error) {
        console.log(error);
        toast.error(`${(error as Error).message}`, {
    
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
}

  
  
