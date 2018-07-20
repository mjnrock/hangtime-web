import React, { Component } from 'react';
import { MessageGetFeed } from "./../message/Feed/Get";
import MessageManager from './../message/MessageManager';

export default class Main extends Component {
	componentDidMount() {
		(new MessageGetFeed(1)).Send();
		console.log(MessageManager.GetInstance().Dispatch());
	}

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