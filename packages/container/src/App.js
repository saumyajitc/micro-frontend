import React from 'react';
import MarketingApp from './components/MarketingApp';

export default () => {
    console.log("test load")
    return (
        <div>
            <h1>Hi there!</h1>
            <hr />
            <MarketingApp />
        </div>
    );
}