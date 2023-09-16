#!/usr/bin/env node
const quotes = require("./quotes")

function getQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

module.exports = getQuote;

if (!module.parent) {
    console.log(getQuote());
}