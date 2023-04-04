

import Router from 'next/router'



export default function Home() {

  return (
    <>
    123<button onClick={()=>Router.push('/api/auth/login')}>login</button>
    123<button onClick={()=>Router.push('/logged')}>logged</button>
    </>
  )
}
