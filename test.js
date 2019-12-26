function linkRemove(text) {
    var initialText  = text
    var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    text.replace(urlRegex)
    return text.replace(urlRegex, function(url) {
         url = url.replace('.', ' .')
         url = url.replace('https://', 'https ://')
         url = url.replace('http://', 'http ://')
         return url
    });
}
const text = 'https://stackoverflow.com/questions/1500260/detect-urls-in-text-with-javascript la tri dep trai, https://www.w3schools.com/jsref/jsref_replace.asp'

console.log(linkify(text))