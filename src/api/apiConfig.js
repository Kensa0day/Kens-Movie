const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '90f33df756d22a5949fd1a2f14c1f56a',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;