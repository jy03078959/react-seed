/**
 * Created by Administrator on 2016/2/19.
 */
import React, { PropTypes, Component } from 'react';
class CommentForm extends Component {
    constructor(props) {
        super(props)
        //state 初始化直接在构造函数完成
        this.state = {author: '', text: ''};
    }

    handleAuthorChange = e=> {
        this.setState({author: e.target.value});
    }
    handleTextChange = e=> {
        this.setState({text: e.target.value});
    }
    handleSubmit = e=> {
        e.preventDefault();
        var author = this.state.author.trim();
        var text = this.state.text.trim();
        if (!text || !author) {
            return;
        }
        // TODO: send request to the server
        this.setState({author: '', text: ''});
    }

    render() {
        return (
            <form className="commentForm">
                <input
                    type="text"
                    placeholder="Your name"
                    value={this.state.author}
                    onChange={this.handleAuthorChange}
                />
                <input
                    type="text"
                    placeholder="Say something..."
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <input type="submit" value="Post"/>
            </form>
        );
    }

}

export default CommentForm;

