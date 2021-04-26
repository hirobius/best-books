import React from "react";
import { withAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';

class LogoutButton extends React.Component{
    render() {
        // `this.props.auth0` has all the same properties as the `useAuth0` hook
        const {  isAuthenticated, logout,  } = this.props.auth0;
        return isAuthenticated && (
            <Button variant="primary" size="sm" onClick={() => logout({ returnTo: window.location.origin })}>Log out</Button>
        );
    }
}
export default withAuth0(LogoutButton);