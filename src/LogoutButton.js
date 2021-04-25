import React from "react";
import { withAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';

class LogoutButton extends React.Component{
    render() {
        // `this.props.auth0` has all the same properties as the `useAuth0` hook
        const {  isAuthenticated, logout,  } = this.props.auth0;
        return isAuthenticated && (
            // <button onClick={() => logout({ returnTo: window.location.origin })} >Log out</button>
            // <div class="btn-nav"><a class="btn btn-primary btn-small navbar-btn" onClick={() => logout({ returnTo: window.location.origin })}>Log out</a></div>
            <Button variant="primary" size="sm" onClick={() => logout({ returnTo: window.location.origin })}>Log out</Button>
        );
    }
}
export default withAuth0(LogoutButton);