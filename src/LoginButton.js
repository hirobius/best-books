import React from "react";
import { withAuth0 } from '@auth0/auth0-react';

class LoginButton extends React.Component{
    render() {
        // `this.props.auth0` has all the same properties as the `useAuth0` hook
        const {  isAuthenticated, loginWithRedirect } = this.props.auth0;
        return <button onClick={() => loginWithRedirect()}>Log In</button>;;
    }
}
export default withAuth0(LoginButton);