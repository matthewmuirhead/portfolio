import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

function OutlinedButtons(props) {
    const { classes } = props;
    return (
        <div>
            <Button variant="outlined" className={classes.button}>
                Default
            </Button>
        </div>
    );
}

export default withStyles(styles)(OutlinedButtons);