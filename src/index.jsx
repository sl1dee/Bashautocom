// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import {BrowserRouter} from "react-router-dom";
// import {createBrowserHistory} from 'history';
//
// import {applyMiddleware, createStore} from "redux";
// import {Provider} from 'react-redux';
// import {thunk} from "redux-thunk";
// import reducer from "./store/reducers/reducers";
// import App from "./App";
//
// const history = createBrowserHistory();
// const store = createStore(reducer,applyMiddleware(thunk));
//
// store.subscribe(() => {
//     console.log('Изменение', store.getState());
// });
//
//
// ReactDOM.createRoot(document.getElementById('root')).render(
//     <Provider store={store}>
//         <BrowserRouter history={history}>
//             <App/>
//         </BrowserRouter >
//     </Provider>
// )
import { Theme } from '@consta/uikit/Theme'
import ReactDOM from 'react-dom/client'

import '../assets/css/styles.scss'
import Root from './root'
import { presetGiGas } from './uikit/presets/presetGiGas.js'

ReactDOM.createRoot(document.getElementById('root')).render(
	<Theme preset={presetGiGas}>
		<Root />
	</Theme>
)
