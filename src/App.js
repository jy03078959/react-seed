import React,{Component} from 'react';
import CommentBox from "./component/CommentBox";
import LikeButton from "./component/LikeButton";
import "./app.css"
/*static defaultProps = {
  autoPlay: false,
  maxLoops: 10,
}*/
var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];
class App extends Component {
  static defaultProps = {
    autoPlay: false,
    maxLoops: 11,
  };
  render() {
    return (
    <CommentBox data={data}></CommentBox>
    );
  }
}
export default App;