import axios from "axios";

export const services = {
    getArtists,

}

async function getArtists() {
    return await axios({
        method: 'GET',
        url: 'http://davidpots.com/jakeworry/017%20JSON%20Grouping,%20part%203/data.json',
    });
}