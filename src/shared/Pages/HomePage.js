import React from 'react'

function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={()=>console.log('bla bla')}>CLICK ME</button>
    </div>
  )
}

export default {
  component: HomePage
}