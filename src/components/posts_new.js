import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field) {
        return(
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    type="text"
                    className="form-conrol"
                    { ...field.input }
                />
            </div>
        );
    }

    render() {
        return(
            <form>
                <Field
                    name="title"
                    label="Title"
                    component={this.renderField}
                />
                <Field
                    name="tags"
                    label="Tags"
                    component={this.renderField}
                />
                <Field
                    name="content"
                    label="Post Content"
                    component={this.renderField}
                />
            </form>
        );
    }
}

export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);