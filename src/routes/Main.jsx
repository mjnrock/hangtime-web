import React, { Component } from 'react';

export class Main extends Component {
    render(){
        return(
            <div>
                <div className="container">
                    { this.props.children }
                </div>
            </div>
        );
    }
}