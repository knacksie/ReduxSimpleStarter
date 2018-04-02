import _ from 'lodash'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <Link to={`/posts/${post.id}`} key={post.id}>
                    <li className='list-group-item' >
                        {post.title}
                    </li>
                </Link>
            );
        });
    }

    render() {
        return (
            <div>
                <div className='text-xs-right'>
                    <Link className='btn btn-primary' to='/posts/new'>
                        Add a post
                      </Link>
                </div>

                <h2>Posts</h2>
                <ul className='list-group'>
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);