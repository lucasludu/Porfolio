import React from 'react'
import ReactDOM from 'react-dom/client'
import { MotionConfig } from 'framer-motion'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* Desactiva animaciones de transform si el usuario pide menos movimiento */}
        <MotionConfig reducedMotion="user">
            <App />
        </MotionConfig>
    </React.StrictMode>,
)
