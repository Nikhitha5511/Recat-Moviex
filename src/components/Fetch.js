import axios from 'axios';


export  const FetchApi = async (url, params) => {
    try {
        const response = await axios.get(url, {
            params,
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDAwOTgzYjYwYWNkMTFhOGYzYjFhOWViODkwNzk4NSIsInN1YiI6IjY1YmI4OTdhYzE0NGRkMDE3Y2ZlZWY5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-qpWXflSnT8kH90pkPnPPbgNFFXbtZIWnashzW58Eqg"
            },
        });
        return response.data;
    }
    catch (err) {
        console.error("Error fetching data:", err);
        throw err; 
    }
};


 