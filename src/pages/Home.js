import React, { Component } from "react";

import GigaTon from '../assets/GigaTon.png'

import '../styles/Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            counter: null 
        }
    }

    componentDidMount() {
    }

    render() { 
        return ( 
        <>
            <div className="page">
                <img className="ton-body-img" 
                    src={GigaTon}
                />
            </div>

        </>
        );
    }
}
 
export default Home;