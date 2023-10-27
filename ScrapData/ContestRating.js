const cheerio = require("cheerio");

const contestRating = async (html) => {
    const $ = cheerio.load(html); // Load the HTML with Cheerio
    const element = $(".text-label-1.text-2xl");

    const contestdata = [];
    element.each((index, el) => {
        contestdata.push($(el).text());
    });
    return contestdata;
}

module.exports = contestRating; // Use module.exports for CommonJS modules
