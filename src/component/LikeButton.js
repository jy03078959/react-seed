/**
 * Created by Administrator on 2016/2/19.
 */
import React, { PropTypes, Component } from 'react';
class LikeButton extends Component {
    constructor(props){
        super(props)
        this.state = {liked:false}
    }
    handleClick = event => {
        this.setState({liked:!this.state.liked})
    };
    render() {
        var text=this.state.liked?"like":"dont like"
        return (
            <p onClick={this.handleClick}>
                you ... {text} this Click to toogle
            </p>
        );
    }

}

export default LikeButton;

