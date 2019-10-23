import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';

export default class stripes extends Component {
    showStripes = () => {

    }
    render() {
        return (
            <div className="featured_stripes">
                {this.showStripes()}
            </div>
        )
    }
}
