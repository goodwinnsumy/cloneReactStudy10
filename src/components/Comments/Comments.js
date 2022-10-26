import React, {Component} from 'react';
import {connect} from "react-redux";
import {LoadingActionComments} from "./asyncActionComments";
import {RiseLoader} from "react-spinners";
import "./Comments.scss"

class Comments extends Component {

  componentDidMount() {
    this.props.dispatch(LoadingActionComments())
  }

  render() {
    const {comments, dispatch} = this.props
    const commentsMap = comments.comment.map((comment, i) => {
      return <div className={"comments"} key={comment.id}>{comment.name}
        {/*<p> {comment.name}  </p>*/}
        {/*<p> {comment.email} </p>*/}
        {/*<p> {comment.body}  </p>*/}
      </div>
    })

    const styleSpiner ={
      display: "block",
      margin: "0 auto"
    };

    return (
      <div>
        {comments.loading ? <RiseLoader color="#7936d6" size={300} cssOverride={styleSpiner} /> : commentsMap}
      </div>
    );
  }
}

function mapStateToPropsComments(store) {
  return {
    comment: store.comment
  }
}

export default connect(mapStateToPropsComments)(Comments);