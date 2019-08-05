import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

// Style for elements in component
const styles = theme => ({
    heading: {
        fontFamily: 'Roboto'
    },
    info_area: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(255, 255, 255, 0.2)',
        width: '40%',
        padding: '1em',
    },
    button_area: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'hsla(0, 0%, 0%, 0)',
        boxShadow: 'none',
    },
    buttons: {
        background: 'white',
        marginLeft: '1em',
        marginRight: '1em'
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    }
});

class Home extends Component {
    // Sets state variables
    constructor() {
        super();
        this.state= {

        };
    }

    // The part shown on the page
    render() {
        const { classes } = this.props;
        console.log(this.props);
        return (
            <div className={classes.container}>
                <Paper className={classes.info_area}>
                    <Typography component="h2" variant="h1" gutterBottom className={classes.heading}>
                        Matt Muirhead
                    </Typography>
                    <Paper className={classes.button_area}>
                        <Button label="about" component={Link} to="/about" className={classes.buttons}>
                            ABOUT
                        </Button>
                        <Button label="blogs" component={Link} to="/blog" className={classes.buttons}>
                            BLOGS
                        </Button>
                        <Button label="about" component={Link} to="/login" className={classes.buttons}>
                            LOG IN
                        </Button>
                    </Paper>

                </Paper>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

// Export React Component
export default withStyles(styles)(Home);
