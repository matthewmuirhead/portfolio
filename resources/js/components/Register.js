import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

function Register(props) {
    const { classes } = props;
    return (
        <div>
            <Typography component="h2" variant="h1" gutterBottom>
                h1. heading
            </Typography>



            <Button variant="outlined" className={classes.button}>
                Default
            </Button>
        </div>
    );
}

Register.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);