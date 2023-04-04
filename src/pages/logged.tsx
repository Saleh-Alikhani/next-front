import { useUser } from '@auth0/nextjs-auth0/client'
import React from 'react'

const Logged:React.FC = () => {
  const {isLoading,user} = useUser()

  return isLoading?<>wait..</>:(
    <div>logged,test{user?.nickname}</div>
  )
}

export default Logged;
