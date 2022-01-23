let movieLists = [];
export const updateList = (movieObj) => {
    movieLists.push(movieObj);
}

export const getMovieList = () => {
    return movieLists;
}