import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { testts } from './test.ts'
import { a } from './testjs.js'

interface User {
  name: string;
}

function test(u: User) {
  //  console.log(u.name2)
  u.name = 'asdf'
  console.log(`testts:`, testts({name: 'vasya'}), 'a:', a)
}

//var a = 10;
//console.log(`111`)

test({name: 'asdf'})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
