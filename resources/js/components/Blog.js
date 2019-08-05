import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Image from 'material-ui-image';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
    heading: {
        fontFamily: 'Roboto',
    },
    grid: {
        padding: theme.spacing.unit * 2,
        fontFamily: 'Roboto',
    },
    textField: {

    },
    image: {
        imageStyle: {
            width:'100% !important',
        }
    }
});

class Blog extends Component {
    constructor()
    {
        super();
        this.state= {
            blogs: [],
        }
    }

    componentWillMount()
    {

        axios.get('/api/blog').then(response =>
        {
            var data;
            data = response.data;

            for (var i=0; i<data.length; i++)
            {
                data[i]['image_urls'] = [];
                for (var j=0; j<data[i]['images']; j++)
                {
                    data[i]['image_urls'][j] = '/images/blog_images/'.concat(data[i]['id'].toString().concat('/'.concat(j.toString().concat('.jpg'))));
                    if (j == 0)
                    {
                        data[i]['header_img'] = './images/blog_images/'.concat(data[i]['id'].toString().concat('/'.concat(j.toString().concat('.jpg'))));
                    }
                }
            }

            this.setState(
            {
                blogs: data
            });
        }).catch(errors =>
        {
            console.log(errors);
        });

        console.log(this.state);
    }

    render()
    {
        console.log(this.state);
        const { classes } = this.props;
        // console.log(this.state.blogs);
        return (
            <div className="container">
                <Grid  container
                       spacing={24}
                       direction="column"
                       style={{ minHeight: '100vh' }}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Typography component="h2" variant="h1" gutterBottom className={classes.heading}>
                                Blog Posts
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid container direction="row" justify="center">
                    {this.state.blogs.map(blog =>
                        <Grid className={classes.grid} item xs={3}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        style = {{ height: 0}}
                                        className={classes.media}
                                        image={blog.header_img}
                                        title={blog.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {blog.title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {blog.desc}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                    </Button>
                                    <Button size="small" color="primary" component={Link} to={"/blog/" + blog.id}>
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )}
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Blog.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blog);
