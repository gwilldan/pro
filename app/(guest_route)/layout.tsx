import React,{ReactNode} from "react"
import { getServerSession } from "next-auth"
import { options } from "../api/auth/[...nextauth]/option";
import  {redirect} from "next/navigation" 
interface Props{
    children:ReactNode;
}
export default async function PrivateLayout ({children}:Props){
    const session = await getServerSession(options) 
    if(!session) redirect("/submission")
    return<>{children}</>
}