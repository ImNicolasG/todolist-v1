// Creating a module of our own to call in our server to access the date

// Exports the function getDate()
// getDate is an 'anonymous function'
module.exports.getDate = function() {

    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    return today.toLocaleDateString("en-US", options);

};

// Exports the function getDay()
// getDay is an 'anonymous function'
module.exports.getDay = function() {
    const today = new Date();

    const options = {
        weekday: "long"
    };

    return today.toLocaleDateString("en-US", options);
};


// module.exports.*** can just be written as exports.***
// It is kept this way in the code for practice purposes