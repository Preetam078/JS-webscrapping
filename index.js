const axios = require("axios");
const url = "https://leetcode.com/preetammondal78/";
const contestRating = require("./ScrapData/ContestRating"); // Use require to import CommonJS modules

async function fetchHTML(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error("Error fetching HTML:", error);
        return null;
    }
}

const scrapData = async (html) => {
    const rating = await contestRating(html); // Use 'await' since contestRating is an asynchronous function
    console.log("dknksnskln")
    console.log(rating);
}

fetchHTML(url)
    .then(async (html) => {
        if (html) {
            scrapData(html);
        }
    });
