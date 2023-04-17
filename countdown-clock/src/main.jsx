import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import StateProvider from './contexts/StateProvider'
import { initialState, reducer } from './reducers/reducer'

ReactDOM.createRoot(document.getElementById('root')).render(

    <StateProvider reducer={reducer} initialState={initialState}>
        <App />
    </StateProvider>

)
