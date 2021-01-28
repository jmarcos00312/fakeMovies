import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService"

class Movies extends Component {
    state = { 
        movies: getMovies()
     }
     handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id)
        this.setState({movies})
     };

    render() { 
const { length:count } = this.state.movies;

        if(count === 0 ) return <h1>There are no movies left</h1>

        return (
            <React.Fragment>
                <h2>There are {count} movies remaining on your list</h2>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map(movie => (
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-md">DELETE</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
        </React.Fragment>
        )
    }
}
 
export default Movies;