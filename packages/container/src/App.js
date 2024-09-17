import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

const generateModuleClassName = createGenerateClassName({
    productionPrefix: 'cont'
})

export default () => {
    
    return (
        <StylesProvider generateClassName={generateModuleClassName}>
            <BrowserRouter>
                <Header />
                <MarketingApp />
            </BrowserRouter>
        </StylesProvider>
    );
}