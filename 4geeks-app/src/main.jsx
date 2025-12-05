import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//import CartContextProvider from './temas/componentes/context/CartContext.jsx'
import { CartContextReducerProvider } from './temas/componentes/context/CartContextReducer.jsx'

createRoot(document.getElementById('root')).render(<CartContextReducerProvider><App /></CartContextReducerProvider>)
