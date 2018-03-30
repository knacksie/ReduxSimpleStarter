// import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {
    renderField(props) {
        return (
            <div className='form-group'>
                <label className=''>{props.label}</label>
                <input type='text' className='form-control' {...props.input} />
                <span>{props.meta.error}</span>
            </div>
        );
    }

    onSubmit(values) {
        console.log("Submit: " + values.title);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit((values) => this.onSubmit(values))}>
                <h2>Send Post</h2>
                <Field label='Title' name='title' component={this.renderField} />
                <Field label='Categories' name='categories' component={this.renderField} />
                <Field label='Post content' name='content' component={this.renderField} />
                <input type='submit' />
            </form>
        );
    }
}

function validate(values) {
    let errors = {};

    if (!values.title) {
        errors.title = "Title required!";
    }
    return errors;
}

export default reduxForm({
    validate: validate,
    form: 'formPostsNew'
})(PostsNew);