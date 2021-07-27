import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Auth0Provider } from '@auth0/auth0-react'
import { fetchColors } from './actions/colorsActions'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))

store.dispatch(fetchColors())

ReactDOM.render(
    <Auth0Provider
        domain="near-net.us.auth0.com"
        // domain="auth.near-net.com"
        clientId="QoNmTgdo3zWNPxxFoeGc6p3Cu9aZhks4"
        // redirectUri={window.location.origin}
        redirectUri={'http://localhost:3000'}
    >
        <Provider store={store}>
            <App />
        </Provider>
    </Auth0Provider>,

    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
