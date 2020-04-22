import React from 'react';

import { userService } from '../../_services';

class LogoutPage extends React.Component {
    constructor(props) {
        super(props);

        userService.logout();

        this.props.history.push("/login");

        this.state = { };
    }

    render() {
        return null;
    }
}

export { LogoutPage }; 