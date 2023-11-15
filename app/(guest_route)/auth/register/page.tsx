import React from 'react'
import FormWrap from "@/components/FormWrap"
import RegisterForm from './RegisterForm'
const page = () => {
  return (
    <div>
      <div className='w-full'>
        <FormWrap>
            <RegisterForm/>
        </FormWrap>
    </div>
    </div>
  )
}

export default page