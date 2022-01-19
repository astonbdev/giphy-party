'use strict';

const GIF_KEY = '7Rs2WJ05aYlhD2wuOpssZn28UPBWavwA';
const GIF_URL = "https://api.giphy.com/v1/gifs/search";
const GIF_LIMIT = 1;
//const FETCHED_URL;

/** Uses axios to fetch a gif from GIPHY using GIHPY api. 
 * Makes use of const variables GIF_KEY, GIF_URL, GIF_LIMIT, to format the url GET request
 * Calls addGifToDom() to apply fetched URL to new HTML
*/
async function getGif(e) {
    e.preventDefault();
    let userValue = $('#user_input').val();
    let response = await axios.get(GIF_URL, { 
        params: { q: userValue, limit: GIF_LIMIT, api_key: GIF_KEY } 
    });

    let gifUrl = response.data.data[0].images.original.url;

    addGifToDom(gifUrl);
    //doThing1(response.data)
    //doThing2(response.data)
    //FETCHED_URL = response.data....
}

/** takes in a url, received from getGif() adds this to src attribute of new img tag we append to dom */
function addGifToDom(gifUrl){
    //console.log(gifUrl);
    let $gifContainer = $("#gif_container");
    let $newGif = $("<img>").attr("src", gifUrl)
    let $button = $("<button>")
                .attr("id", "delete_gif")
                .text("DELETE")
                .on("click", () => {
                    $($button).remove();
                    $($newGif).remove();
                });

    $gifContainer.append($newGif);
    $gifContainer.append($button);
}

$('#btn_form').on('click', getGif);