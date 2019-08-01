import React, { Component } from 'react';
import axios from 'axios';
import {Link, Route} from 'react-router-dom';

export default class AdminPrinting extends Component {
    constructor(){
        super();
        this.state= {
            name: '',
            base_cost: '',
            multiplier: '',
            image_URL: '',
            description: '',
            artist: '',
            printings: [],
            id: '',
            errors: '',
        };
        this.createProduct = this.createProduct.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentWillMount() {
        const api_token = sessionStorage.getItem("data");
        const AuthStr = 'Bearer '.concat(api_token);
        axios.get('/api/paintings', { headers: { Authorization: AuthStr } }).then(response => {
            this.setState({
                printings: response.data
            });
        }).catch(errors => {
            console.log(errors);
        })
    }

    createProduct(e) {
        e.preventDefault();
        if(this.state.name && this.state.base_cost && this.state.description && this.state.artist){
            const api_token = sessionStorage.getItem("data");
            const AuthStr = 'Bearer '.concat(api_token);
            axios.post('/api/paintings/', {
                name: this.state.name,
                base_cost: this.state.base_cost,
                multiplier: this.state.base_cost,
                image_url: this.state.image_URL,
                description: this.state.description,
                artist: this.state.artist,
            }, { headers: { Authorization: AuthStr } })
                .then(function (response) {
                    this.setState({error: null});
                })
                .catch(error => this.setState({error}))
        }
    }

    deleteProduct(e, id) {
        e.preventDefault();
        const api_token = sessionStorage.getItem("data");
        const AuthStr = 'Bearer '.concat(api_token);
        axios.delete('/api/paintings/'.concat(id), { headers: { Authorization: AuthStr } })
            .then(function (response) {
                this.setState({error: null});
            })
            .catch(error => this.setState({error}))
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    render() {
            return (
                <div className="panel panel-default">
                    <div className="panel-heading">Register Product
                    </div>
                    <div className="panel-body">
                        <form className="form-horizontal" method="POST" action="/api/products">
                            <div className="form-group">
                                <label htmlFor="name" className="col-md-4 control-label">Name</label>
                                <div className="col-md-6">
                                    <input id="name" className="form-control" type="text" name="name" placeholder="Name"
                                           autoFocus onChange={this.onChange}/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="price" className="col-md-4 control-label">Price</label>
                                <div className="col-md-6">
                                    <input id="base_cost" className="form-control" type="text" name="base_cost" placeholder="£0.00"
                                           autoFocus onChange={this.onChange}/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="price" className="col-md-4 control-label">Price</label>
                                <div className="col-md-6">
                                    <input id="price" className="form-control" type="text" name="multiplier" placeholder="1.5"
                                           autoFocus onChange={this.onChange}/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="price" className="col-md-4 control-label">Price</label>
                                <div className="col-md-6">
                                    <input id="artist" className="form-control" type="text" name="artist" placeholder="ME"
                                           autoFocus onChange={this.onChange}/>
                                </div>
                            </div>


                            <div className="form-group">
                                <label htmlFor="description" className="col-md-4 control-label">Description</label>
                                <div className="col-md-6">
                                    <input id="description" className="form-control" type="text" name="description" placeholder="Product Description"
                                           autoFocus onChange={this.onChange}/>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-md-8 col-md-offset-4">
                                    <input className="btn btn-primary" type="submit" className="button success"
                                           value="Create Product" onClick={this.createProduct}/>
                                </div>
                            </div>
                        </form>
                    </div>
                    {this.state.printings.map(printings =>
                        <div key={printings.id} className="col-md-8 col-md-offset-2">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    Item: {printings.name}
                                    Price: {printings.price}
                                    Desc: {printings.description}
                                    </div>
                                <input className="btn btn-primary" type="submit" className="button success"
                                       value="Delete Product" onClick={((e) => this.deleteProduct(e, printings.id))}/>
                        </div>
                        </div>
                    )}
                </div>
            );
        }
}

