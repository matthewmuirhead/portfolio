import React, { Component } from 'react';
import { Grid, Paper, Hidden, AppBar, Toolbar, Typography } from '@material-ui/core/'
import { Link } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import Image from 'material-ui-image';

const styles = {
    avatar: {
        margin: 10,
        width: 80,
        height: 40,
    },
    bigAvatar: {
        margin: 10,
        width: 100,
        height: 100,
    },
    image: {
        imageStyle: {
            height:20,
        }
    }
};



class NavBar extends Component
{
    constructor()
    {
        super();
        this.state= {
            adminAuthenticated: false,
            userAuthenticated: false,
        };
    }

    componentDidMount()
    {
        const api_token = sessionStorage.getItem("data");
        if (api_token != null){
            if (api_token.startsWith("admin:")){
                this.setState({adminAuthenticated: true})
            }
            if (api_token){
                this.setState({userAuthenticated: true})
            }
        }

    }

    render()
    {
        const { classes } = this.props;
        return (
            <div>
                <Hidden smDown>
                    <AppBar position="static" color="default">
                        <Tabs variant="fullWidth" >
                            <Tab label="Home" component={Link} to="/" sm={6} index={0}/>
                            <Tab label="Blog" component={Link} to="/blog" sm={6} index={1}/>
                            <Tab label="About" component={Link} to="/about" sm={6} index={2}/>
                            <Tab label="Login" component={Link} to="/login" sm={6} index={3}/>
                        </Tabs>
                    </AppBar>
                </Hidden>
                <Hidden smUp>
                    <AppBar position="static" color="default">
                        <Tabs variant="fullWidth" >
                            <Tab label="Login" component={Link} to="/login" sm={0} index={0}/>
                        </Tabs>
                    </AppBar>
                </Hidden>
            </div>
        );
    }

}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
