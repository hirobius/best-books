import React from "react";
import { withAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';

class LoginButton extends React.Component{
    render() {
        // `this.props.auth0` has all the same properties as the `useAuth0` hook
        const {  loginWithRedirect } = this.props.auth0;
        return <Button variant="primary" size="sm" onClick={() => loginWithRedirect()}>Log In</Button>
    }
}
export default withAuth0(LoginButton);