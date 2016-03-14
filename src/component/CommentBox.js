/**
 * Created by Administrator on 2016/2/19.
 */
import React, { PropTypes, Component } from 'react';
import CommentList from "./CommentList"
import CommentForm from "./CommentForm"

class CommentBox extends Component {
    static propTypes = {
        data:PropTypes.array,
    };
    constructor(props){
        super(props)
        //state 初始化直接在构造函数完成
        this.state = {data:this.props.data}
    }
    handleCommentSubmit=(comment)=>{
        var comments = this.state.data;
        var newComments = comments.concat([comment]);
        this.setState({data: newComments});
        // TODO: submit to the server and refresh the list
    };
    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
            </div>
        );
    }

}

export default CommentBox;

