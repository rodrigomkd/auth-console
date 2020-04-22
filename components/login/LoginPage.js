import React from 'react';
import axios from 'axios';

import { userService } from '../../_services';

const API = "REPLACE_ME";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        userService.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false,
            loading: false,
            error: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate() {
        userService.logout();
    }

    handleChange(e) {
		this.setState({ loading: false });
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;

        // stop here if form is invalid
        if (!(username && password)) {
            return;
        }

        this.setState({ loading: true });
        //validate user and password
        axios.post(API + 'login', {"username":username, "password":password}).then(res => {
		  this.setState({ loading: false });		  
		  
		  userService.login(username, password);
		  this.props.history.push('/');
        
		}, (error) => { 
			this.setState({ error: "Username and/or password is incorrect." });
		});
    }

    render() {
        const { username, password, submitted, loading, error } = this.state;
        return (
            <div className="container">   
                <br />
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="card">
                        <div class="card-header"><h3>Login</h3></div>
                        <div class="card-body">
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username">Username:</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                                    <label htmlFor="password">Password:</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                                        <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" disabled={loading}>Login</button>
                        {loading}
                    </div>
                    {error &&
                        <div className={'alert alert-danger'}>{error}</div>
                    }
                </form>
                    </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </div>        
        );
    }
}

export { LoginPage }; 