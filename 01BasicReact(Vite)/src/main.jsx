import React from 'react'
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'

/*
const anotherElement=(
  <a href="https://google.com" target="_blank">Visit Google</a>
)
*/

const user="anurag"
const reactElement=React.createElement(
  'a',
  {href:"https://google.com",target:"_blank"},
  'Visit Google',
  user
)

createRoot(document.getElementById('root')).render(
  /*
  <StrictMode>
    <App /> // can call MyApp function defined in this file only in same way or like function
  </StrictMode>
  */
  /*
  anotherElement
  */
  reactElement // automatically rendered
)
