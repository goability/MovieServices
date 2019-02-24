# Movie Services

* List all movies: /Movies
* Filter movies: /Movies?rating={G;PG;PG-13;R}&category={Horror,Comedy,Drama}&title={partialTitleSearchName}
* Get movie details: Movies/{movieId}
* Get list of actors in a movie: Movies/{movieId}/Actors

# dependencies

This application uses the slim Framework, which is expected to be installed in ./vendor
Also, the ./logs folder must be writable
