import React from 'react'
import reactDOM from 'react-dom'
import Title from './Title'
import MainP from './MainP'
import Nav from './Nav'
// props 

const App = () => {
  let language = "React"
  return (
      <div>
          <Nav />
          <Title language = {language} />
          <MainP language = {language} />
        </div>
  )
}

export default App
