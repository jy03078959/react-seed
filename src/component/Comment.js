/**
 * Created by Administrator on 2016/2/19.
 */
import React, { PropTypes, Component } from 'react';
import marked from 'marked';
class Comment extends Component {
    constructor(props) {
        super(props)
        //state 初始化直接在构造函数完成
        this.state = {data: []}
    }

    rawMarkup = ()=> {
        var rawMarkup = marked(this.props.children.toString());
        return rawMarkup;
    };

    render() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {marked(this.props.children.toString())}
            </div>
        );
    }

}

export default Comment;

