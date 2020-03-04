import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/layout/App';
import {Provider} from 'react-redux'
import './index.css'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from './app/store/configureStore';
import ScroolToTop from './app/common/util/ScrollToTop'
const renEl = document.getElementById('root')


const store = configureStore()
console.log(store.getState())
let render = () =>{
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
            <ScroolToTop>
               <App />
            </ScroolToTop>
            </BrowserRouter>
        </Provider>,
        renEl
        );
    }

if(module.hot){
    module.hot.accept('./app/layout/App',() =>{
        setTimeout(render);
    })
}
render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
