/**
 * Created by Administrator on 2016/2/19.
 */
import './CommentBox.css';
import React, { PropTypes, Component } from 'react';
import CommentList from "./CommentList"
import CommentForm from "./CommentForm"

class CommentBox extends Component {
    constructor(props){
        super(props)
        //state 初始化直接在构造函数完成
        this.state = {data:[]}
    }
    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.props.data} />
                <CommentForm />
            </div>
        );
    }

}

export default CommentBox;

