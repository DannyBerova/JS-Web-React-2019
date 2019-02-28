import React, { Component } from 'react';
import './House.css';

class House extends Component {
    render() {
        return (
            <div className="House" onMouseEnter={() => this.props.houseHoverEvent(this.props.id)}>
                <img src={this.props.imageUrl} alt={this.props.type} ></img>
            </div>
        )
    }
}
export default House;