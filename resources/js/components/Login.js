import React, { Component } from 'react';
import axios from 'axios';
import {Redirect, Link, Route} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

// Style for elements in component
const styles = theme => ({
    heading: {
      fontFamily: 'Roboto'
    }
});

class Login extends Component {
    constructor(){
        super();
        this.state= {
            email: '',
            password: '',
            redirect: false,
            error: null
        };
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login(e) {
        e.preventDefault();
        if(this.state.email && this.state.password){
            axios.post('/api/login', {
                email: this.state.email,
                password: this.state.password,
            })
                .then(
                response => sessionStorage.setItem('data',response.data.data.api_token),
                this.setState({redirect: true}))
                .catch(error => this.setState({error}))
        }
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />;
        }
            return (
                <div className="panel panel-default">
                    <div className="panel-heading">Login
                    </div>
                    <div className="panel-body">
                        <form className="form-horizontal">
                            <div className="form-group">
                                <label htmlFor="email" className="col-md-4 control-label">E-Mail Address</label>
                                <div className="col-md-6">
                                    <input className="form-control" type="text" name="email" placeholder="Email"
                                           autoFocus onChange={this.onChange}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="col-md-4 control-label">Password</label>
                                <div className="col-md-6">
                                    <input id="password" type="password" name="password" className="form-control"
                                           placeholder="Password" onChange={this.onChange}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-8 col-md-offset-4">
                                <span className="help-block">
                                    <strong>
                                        {this.state.error ? <p>{this.state.error.response.data.message}</p> : null}
                                    </strong>
                                </span>
                                    <input className="btn btn-primary" type="submit" className="button success"
                                           value="Login" onClick={this.login}/>
                                    <span className="btn btn-link">
                                    <div>
                                        <Link to="/forgot"> Forgot Password</Link>
                                    </div>
                                        <div>
                                        <Link to="/admin/login">Admin Login</Link>
                                    </div>
                                </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
