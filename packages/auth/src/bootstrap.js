import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

const mount = (el, { onSignIn, onNavigate, defaultHistory, initialPath }) => {
    const memoryHistory = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });

    onNavigate && memoryHistory.listen(onNavigate);

    ReactDOM.render (
        <App history={memoryHistory} onSignIn={onSignIn}/>,
        el
    )

    return {
        onParentNavigate({pathname: nextPathname}) {
            const { pathname } = memoryHistory.location;

            if(pathname !== nextPathname) {
                memoryHistory.push(nextPathname);
            }
        }
    }
}

// if we are in dev mode
if(process.env.NODE_ENV ==='development') {
    const devRoot = document.querySelector('#_auth-dev-root');

    if(devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory() });
    }
}

// If we are running through container, we should export the mount function
export { mount }