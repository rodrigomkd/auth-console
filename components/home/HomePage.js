import React from 'react';
import axios from 'axios';

import { userService } from '../../_services';

const API = "REPLACE_ME"; 

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: null,
            refresh: false
        };
    }

    async refresh() {
        axios.get(API + 'message?username=' + userService.getUsername(), { })
            .then(res => {
                const message = res.data.result;
                this.setState({ message });
				console.log(res);
            })
    }

    componentDidUpdate() {
        if (this.state.refresh) {
            this.refresh();
            this.setState({"refresh" : false});
        }
    }

    componentDidMount() {
        this.refresh();
    }

    render() {
        return (
        <div>
                <div class="jumbotron">
                    <div class="row">
                        <div class="col">
                            <h1>{this.state.message}!!!</h1>
                        </div>                      
                    </div>
          <p></p>
        </div>

        <div class="container-fluid">
  
		</div>
    </div>
        );
    }
}

export { HomePage };