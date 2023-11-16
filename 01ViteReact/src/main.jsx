import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Vitepract from './Vitepract.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Vitepract />
      <App />
    </>
  </React.StrictMode>,
)
