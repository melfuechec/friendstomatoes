const baseURL = 'https://image.tmdb.org/t/p/w500';

const getMovieImg=(setimgURL, filePath) => {
    fetch(baseURL+filePath)
    .then((data) =>  setimgURL(data.url))
}

export default getMovieImg