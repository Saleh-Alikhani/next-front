
import { useUser } from '@auth0/nextjs-auth0/client';
import React from 'react'

const Logged:React.FC = () => {
  const {isLoading,user,error} = useUser()
  

  return isLoading||error?<>wait.{error?.message}.</>:(
    <>{console.log(user,'here')}{user?.nickname}{user?.email}<div>logged,test{user?.name}</div></>
  )
}

export default Logged;
