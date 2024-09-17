import React from "react";
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

import SignUp from './components/Signup';
import SignIn from "./components/Signin";

const generateModuleClassName = createGenerateClassName({
    productionPrefix: 'auth'
})

export default ({ history, onSignIn }) => {
    return (
        <StylesProvider generateClassName={generateModuleClassName}>
            <Router history={history}>
                <Switch>
                    <Route path="/auth/signin">
                        <SignIn onSignIn={onSignIn} />
                    </Route>
                    <Route path="/auth/signup">
                        <SignUp onSignIn={onSignIn} />
                    </Route>
                </Switch>
            </Router>
        </StylesProvider>
    )
}