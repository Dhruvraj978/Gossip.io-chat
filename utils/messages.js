const moment = require('moment'); //this is use to fetch time details
function formatMessage(username, text) {
    return {
        username,
        text,
        time: moment().format('h:mm a') //hour:minute:AM or PM
    }
}

module.exports = formatMessage;