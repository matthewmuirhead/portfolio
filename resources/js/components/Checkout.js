import React, { Component } from 'react';
import axios from 'axios';

export default class Checkout extends Component {

    constructor() {
        super();
        this.state = {
            merchantReference: "Picture 1",
            currencyCode: "GBP",
            paymentAmount: "10000",
            sessionValidity: "2020-10-11T11:00:00Z",
            shipBeforeDate: "2020-10-20",
            shopperLocale: "en_GB",
            shopperEmail: "test@test.com",
            shopperReference: "6245",
            skinCode: "bqw5dbIo",
            hmacKey: "F9ED777A9949C87CF60DA3473EBF9094A281F22A609881B6389C39EC16EB4462",
            merchantAccount: "Unigrp1Ecom",
            merchantSig: null,
        };
        this.onChange = this.onChange.bind(this);
        this.test = this.test.bind(this);
        console.log(this.state);
    }

    test(e) {
        e.preventDefault();
        axios.post("/api/checkpayment", {
            merchantReference: this.state.merchantReference,
            currencyCode: this.state.currencyCode,
            paymentAmount: this.state.paymentAmount,
            sessionValidity: this.state.sessionValidity,
            shipBeforeDate: this.state.shipBeforeDate,
            shopperLocale: this.state.shopperLocale,
            shopperEmail: this.state.shopperEmail,
            shopperReference: this.state.shopperReference,
            skinCode: this.state.skinCode,
            hmacKey: this.state.hmacKey,
            merchantAccount: this.state.merchantAccount,
        }, {})
            .then(response => this.setState({merchantSig: response.data}))
            .catch(err => console.log(err));
        document.getElementById("send_payment").submit();
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }


    render() {
        return (
            <div>
                {this.state.merchantSig ? null :
                    <form name='form' method='post'>
                        <p>
                            Merchant Reference <input type="text" name="merchantReference" value="Testing" onChange={this.onChange}/>
                            Currency Code <input type="text" name="currencyCode" value="GBP" onChange={this.onChange}/>
                            Payment Amount <input type="text" name="paymentAmount" value="10000" onChange={this.onChange}/>
                            Session Validity <input type="text" name="sessionValidity" value="2020-10-11T11:00:00Z" onChange={this.onChange}/>
                            Ship Before Date <input type="text" name="shipBeforeDate" value="2020-10-20" onChange={this.onChange}/>
                            Shopper Locale <input type="text" name="shopperLocale" value="en_GB" onChange={this.onChange}/>
                            Shopper Email <input type="text" name="shopperEmail" value="test@test.com" onChange={this.onChange}/>
                            Shopper Reference <input type="text" name="shopperReference" value="6245" onChange={this.onChange}/>
                            Skin Code <input type="text" name="skinCode" value="bqw5dbIo" onChange={this.onChange}/>
                            HMAC <input type="text" name="hmacKey" value="F9ED777A9949C87CF60DA3473EBF9094A281F22A609881B6389C39EC16EB4462" onChange={this.onChange}/>
                            Merchant Sub Account <input type="text" name="merchantAccount" value="Unigrp1Ecom" onChange={this.onChange}/>
                            <input type="submit" value="Buy Now" onClick={this.test}/>
                        </p>
                    </form>
                }
                {this.state.merchantSig ?
                    <form id="send_payment" name="adyenForm" action="https://test.adyen.com/hpp/pay.shtml" method="post">
                    <input type="hidden" name="currencyCode" value={this.state.currencyCode} />
                    <input type="hidden" name="merchantAccount" value={this.state.merchantAccount} />
                    <input type="hidden" name="merchantReference" value={this.state.merchantReference} />
                    <input type="hidden" name="paymentAmount" value={this.state.paymentAmount} />
                    <input type="hidden" name="sessionValidity" value={this.state.sessionValidity} />
                    <input type="hidden" name="shipBeforeDate" value={this.state.shipBeforeDate} />
                    <input type="hidden" name="shopperEmail" value={this.state.shopperEmail} />
                    <input type="hidden" name="shopperLocale" value={this.state.shopperLocale} />
                    <input type="hidden" name="shopperReference" value={this.state.shopperReference} />
                    <input type="hidden" name="skinCode" value={this.state.skinCode} />
                    <input type="hidden" name="merchantSig" value={this.state.merchantSig} />
                    <input type="submit" value="Buy Now"/>
                </form>
                    : null}
            </div>
        )
    }
}