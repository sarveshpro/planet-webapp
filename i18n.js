// @ts-check 
const NextI18Next = require('next-i18next').default;

module.exports = new NextI18Next({
    defaultLanguage: 'en',
    otherLanguages: [],
    // Add languages as needed, in String Array
    // i.e. otherLanguages: ['de']
    react: {
        wait: true
    },
});