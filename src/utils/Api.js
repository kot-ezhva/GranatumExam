const apiUrl = 'https://api.themoviedb.org/3/';

const getHeaders = () => {
    // Hardcode access token for example
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmFlNDdhYjJiYzJiZjMyNTI4MjI4NTlhMTI0ZjkxMiIsInN1YiI6IjYwMjUwZTZjNmFmOGY4MDA0MDJkMWUzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IhQdMpLWivSvAJhJL6zRtWaGB5PEl2Q4gEH8soo6nsI';

    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Bearer ${token}`
    };
};

export const getFilms = async ({ page }) => {
    const endpoint = apiUrl + `movie/popular?language=ru&page=${page}`;

    let response = await fetch(endpoint, {
        method: 'GET',
        headers: getHeaders(),
    });

    if (!response.ok) {
        throw await response.json();
    }

    return response.text().then(text => {
        return text ? JSON.parse(text) : {};
    });
};
