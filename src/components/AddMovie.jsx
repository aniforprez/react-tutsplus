import React, { Component } from 'react';

class AddMovie extends Component {
	addNewMovie = (e) => {
		e.preventDefault();
		let movie = {
			title: this.title.value,
			year: this.year.value,
			poster: this.poster.value,
			description: this.description.value
		};
		this.props.addMovie(movie);
	}
	render() {
		return (
			<form className="movie-form" onSubmit={ (e) => this.addNewMovie(e) }>
				<p>Add Movie</p>
				<input type="text" placeholder="Title" ref={ (input) => this.title = input } />
				<input type="text" placeholder="Year" ref={ (input) => this.year = input } />
				<input type="text" placeholder="Poster" ref={ (input) => this.poster = input } />
				<textarea placeholder="Description" ref={ (input) => this.description = input }></textarea>
				<button type="submit">Add Movie</button>
			</form>
		);
	}
}

export default AddMovie;
