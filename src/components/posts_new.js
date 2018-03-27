// import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { fetchPosts } from '../actions'

class PostsNew extends Component {
//     componentDidMount() {
//         this.props.fetchPosts();
//     }

//     renderPosts() {
//         return _.map(this.props.posts, post => {
//             return (
//                 <li className='list-group-item' key={post.id}>
//                     {post.title}
//                 </li>
//             );
//         });
//     }

    render() {
        return (
            <div>
                <h2>Send Post</h2>

            </div>
        );
    }
}

// function mapStateToProps(state) {
//     return { posts: state.posts };
// }

// export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
export default PostsNew;