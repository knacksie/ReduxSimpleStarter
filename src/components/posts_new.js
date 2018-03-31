// import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { createPost } from '../actions'

class PostsNew extends Component {
    renderField(props) {
        const { touched, invalid, error } = props.meta;

        return (
            <div className={`form-group ${(touched && invalid ? 'has-danger' : '' )}`}>
                <label className=''>{props.label}</label>
                <input type='text' className='form-control' {...props.input} />
                <div className='text-help'>{(touched && invalid ? error : '')}</div>
            </div>
        );
    }

    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
   
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit((values) => this.onSubmit(values))}>
                <h2>Send Post</h2>
                <Field label='Title' name='title' component={this.renderField} />
                <Field label='Categories' name='categories' component={this.renderField} />
                <Field label='Post content' name='content' component={this.renderField} />
                <input type='submit' className='btn btn-primary' />
                <Link className='btn btn-secondary' to='/'>Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    let errors = {};

    if (!values.title) {
        errors.title = "Title required!";
    }

    if (values.title && values.title.length < 3) {
        errors.title = "Title has to be at least 3 characters long.";
    }
    
    if (!values.categories) {
        errors.categories = "Category required!";
    }
    
    if (!values.content) {
        errors.content = "Content required!";
    }
    return errors;
}

export default reduxForm({
    validate: validate,
    form: 'formPostsNew'
})(
    connect(null, { createPost })(PostsNew)
);