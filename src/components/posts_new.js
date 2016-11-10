import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
	render() {
		// const handleSubmit = this.props.handleSubmit;
		// const title = this.props.fields.title; ...
		const { fields: {title, categories, content}, handleSubmit } = this.props;
		console.log(title);
		return (
			<form onSubmit={handleSubmit(this.props.createPost)} >
				<h3>Create A New Post </h3>
				<div className='form-group'>
					<label>Title</label>
					<input type='text' className='form-control' {...title}/>
				</div>
				<div className='form-group'>
					<label>Categories</label>
					<input type='text' className='form-control' {...categories}/>
				</div>
				<div className='form-group'>
					<label>Content</label>
					<textarea className='form-control' {...content}/>
				</div>
				<button type='submit' className='btn btn-primary'>Submit</button>
			</form>
		)
	}
}

//connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm 1st is form config, 2nd mapStateToProps, 3rd mapDispatchToProps

export default reduxForm({
	form: 'PostsNewForm',
	fields: ['title', 'categories', 'content']
}, null, { createPost } )(PostsNew);
// user types something in.. record it on app level state
// state=== {
// 	form: {
// 		PostsNewForm : {
// 			title: '...',
// 			categories: '...',
// 			content: '...'
// 		}
// 	}
// }