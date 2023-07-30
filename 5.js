function findTopRatedMovies(movies) {
    if (movies.length === 0) {
      return [];
    }
  
    let highestRating = -Infinity;
    let topRatedMovies = [];
  