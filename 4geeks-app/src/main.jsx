import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//import CartContextProvider from './proyectos/ecommerce/context/CartContext.jsx'
import { CartContextReducerProvider } from './proyectos/ecommerce/context/CartContextReducer.jsx'

createRoot(document.getElementById('root')).render(<CartContextReducerProvider><App /></CartContextReducerProvider>)
