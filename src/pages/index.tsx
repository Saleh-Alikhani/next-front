
import Router from 'next/router'
import { useUser } from '@auth0/nextjs-auth0/client'


export default function Home() {
  const {isLoading,user} = useUser()
  return (
    <>
    123<button onClick={()=>Router.push('/api/auth/login')}>login</button>{user?.name}
    123<button onClick={()=>Router.push('/api/auth/logout')}>logout</button>{user?.nickname}
    </>
  )
}
