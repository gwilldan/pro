import React from 'react'
import FormWrap from "@/components/FormWrap"
import LoginForm from './LoginForm'
const page = () => {
  return (
    <div>
      <div className='w-full'>
        <FormWrap>
            <LoginForm/>
        </FormWrap>
    </div>
    </div>
  )
}

export default page