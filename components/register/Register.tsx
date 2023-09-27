import React from 'react'
import FormWrap from "@/components/FormWrap"
import RegisterForm from './RegisterForm'

const Register = () => {
  return (
    <div className='w-full'>
        <FormWrap>
            <RegisterForm/>
        </FormWrap>
    </div>
  )
}

export default Register