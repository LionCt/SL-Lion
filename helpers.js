/*


*/

function successfullMessage(msg) {
    return "β *Xtroid*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "π *Xtroid*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "βΊοΈ *Xtroid*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
