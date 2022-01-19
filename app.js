'use strict';

const GIF_KEY = '7Rs2WJ05aYlhD2wuOpssZn28UPBWavwA';
const GIF_URL = "https://api.giphy.com/v1/gifs/search";
const GIF_LIMIT = '1';

/** */
async function getGif(e) {
    e.preventDefault();
    let userValue = $('#user_input').val();
    let response = await axios.get(GIF_URL, { 
        params: { q: userValue, limit: GIF_LIMIT, api_key: GIF_KEY } 
    });
    response.data.data[0].images.original.url;
}

$('#btn_form').on('click', getGif);