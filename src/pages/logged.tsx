import { useUser } from '@auth0/nextjs-auth0/client'
import React from 'react'

const Logged:React.FC = () => {
  const {isLoading,user} = useUser()
  

  return isLoading?<>wait..</>:(
    <>{console.log(user)}<div>logged,test{user?.name}</div></>
  )
}

export default Logged;
