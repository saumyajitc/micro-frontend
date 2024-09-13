import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (el) => {
    ReactDOM.render (
        <App />,
        el
    )
}

// if we are in dev mode
if(process.env.NODE_ENV ==='development') {
    const devRoot = document.querySelector('#_marketing-dev-root');

    if(devRoot) {
        mount(devRoot);
    }
}

// If we are running through container, we should export the mount function
export { mount }