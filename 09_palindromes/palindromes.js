const palindromes = function (string) {
    let leng = string.length;
    let news = '';
    let testnews = '';
    let counter = 0;
    while (leng > 0) {
        if ((/[a-zA-z]/).test(string[counter])) {
            news += string[counter];
        }
    counter += 1;
    leng -= 1;
    }
    news = news.toLowerCase();
    let newsl = news.length;
    while (newsl > 0) {
        testnews += news[newsl - 1];
        newsl --;
    }
    if(testnews === news) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
