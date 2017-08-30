import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions/index';

class PostsShow extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    onDeleteClick() {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push("/");
        });
    }

    render() {
        const { post } = this.props;

        if(!post) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <div>
                    <Link to="/">Back To Index</Link>
                    <button className="btn btn-danger float-right" onClick={ this.onDeleteClick.bind(this) }>Delete This Post</button>
                </div><br/>
                <h3>{ post.title }</h3><br/>
                <h6><strong>Categories:</strong> { post.categories }</h6><br/>
                <p>{ post.content }</p>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);