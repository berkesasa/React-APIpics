import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID K-b_UkLl4RyNm0J9UQGIaWryc40WroXgFWIhacY1Sn0'
        },
        params: {
            query: term,
        },
    });
 
    return response.data.results;
}

export default searchImages;