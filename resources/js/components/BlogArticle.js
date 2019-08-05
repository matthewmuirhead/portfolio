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
import TextField from '@material-ui/core/TextField';
import Image from 'material-ui-image';
import Button from '@material-ui/core/Button';
import Checkout from './Checkout';
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
    },
    header_img: {
        imageStyle: {
            height:'20% !important',
        }
    }
});

class BlogArticle extends Component {
    constructor(props)
    {
        super(props);
        this.state= {
            post: [],
            image_urls: []
        }
    }

    componentWillMount()
    {
        console.log(this.props.match.params.id);
        axios.get('/api/blog/' + this.props.match.params.id).then(response =>
        {
            var data = response.data;
            var image_urls = [];

            for (var j=0; j<data['images']; j++)
            {
                if (j == 0)
                {
                    data['header_img'] = '/images/blog_images/'.concat(data['id'].toString().concat('/'.concat(j.toString().concat('.jpg'))));
                } else
                {
                    image_urls[j-1] = {"url": '/images/blog_images/'.concat(data['id'].toString().concat('/'.concat(j.toString().concat('.jpg'))))};
                }
            }

            this.setState(
            {
                post: data,
                image_urls: image_urls
            });
        }).catch(errors =>
        {
            console.log(errors);
        });
    }

    render()
    {
        const { classes } = this.props;
        console.log(this.state);
        return (
            <div className="container">
                <Image src={this.state.post.header_img} className={classes.header_img}/>
                <Typography component="h2" variant="h1" gutterBottom>
                    {this.state.post.title}
                </Typography>
                {this.state.image_urls.map(url =>
                    <Image src={url.url} className={classes.header_img}/>
                )}
            </div>
        );
    }
}

BlogArticle.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BlogArticle);
