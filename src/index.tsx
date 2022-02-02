import React from 'react'
import ReactDOM from 'react-dom'

import { Button, CloseButton } from './components'

const Details = {
  name: 'Jeferson',
}

export { Details, Button, CloseButton }

function App() {
  return (
    <div
      style={{
        backgroundColor: '#282c34',
        color: 'white',
        height: '100vh',
        width: '100vw',
      }}
      className="App"
    >
      <h1>@clara/ui</h1>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
