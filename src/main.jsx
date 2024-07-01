import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Grid from './App.jsx'
import Box from './App.jsx'
import './index.css'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Grid />
    <Box />
  </React.StrictMode>,
)
