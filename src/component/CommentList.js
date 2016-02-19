/**
 * Created by Administrator on 2016/2/19.
 */
import React, { PropTypes, Component } from 'react';
import Comment from "./Comment";
class CommentList extends Component {
    constructor(props){
        super(props)
        this.state = {data:[]}
    }
    render() {
        var commentNodes = this.props.data.map(function(comment) {
            return (
                <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }

}

export default CommentList;

