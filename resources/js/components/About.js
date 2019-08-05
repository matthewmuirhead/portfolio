import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import { Link } from 'react-router-dom'

// Style for elements in component
const styles = theme => ({
    heading: {
        fontFamily: 'Roboto'
    }
});

class About extends Component {
    // Sets state variables
    constructor() {
        super();
        this.state= {

        };
    }

    // The part shown on the page
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Typography component="h2" variant="h1" gutterBottom className={classes.heading}>
                    About Me
                </Typography>

                <Typography component="body" variant="body" gutterBottom className={classes.heading}>
                    I am a Software Engineering graduate currently living in Manchester.
                </Typography>
            </div>
        );
    }
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
};

// Export React Component
export default withStyles(styles)(About);
