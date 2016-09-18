import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount(){
      this.props.fetchPost(this.props.params.id);
  }

  onDelete(){
      console.log('bla');
      console.dir(this.props);
      this.props.deletePost(this.props.params.id).then(() => {
        console.dir("context: ",this.context);
        this.context.router.push('/');
      });
  }

  render(){
    const { post } = this.props;
    if (!post){
      return <div>Loading...</div>
    }
    console.log('render posts show: ',this.props.post);
    return (
      <div>
        <Link to="/" className="btn btn-info">Back</Link>
        <button type="button" className="btn btn-danger pull-xs-right"
          onClick={this.onDelete.bind(this)}>
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
      );
  }
}

function mapStateToProps(state){
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
