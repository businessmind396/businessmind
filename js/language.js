// language.js

// Get the user's browser language
const userLanguage = navigator.language || navigator.userLanguage;

// Set the document language to the user's browser language
document.documentElement.lang = userLanguage;
