import { useUser } from '@auth0/nextjs-auth0/client'

import Router from 'next/router'



export default function Home() {
  const {isLoading,user,error }= useUser()
  return isLoading||error?<>{error}</>:(
    <>
    123<button onClick={()=>Router.push('/api/auth/login')}>login{user?.name}{user?.nickname}{user?.email}{user?.picture}</button>
    123<button onClick={()=>Router.push('/api/auth/logout')}>logout</button>
    </>
  )
}
