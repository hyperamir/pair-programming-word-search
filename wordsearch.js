const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }

    const newArray = [];
    let tempArr = [];
    for (let row = 0; row < letters[0].length; row++) {
        for (let col = 0; col < letters.length; col++) {
            tempArr.push(letters[col][row]);
        }
        newArray.push(tempArr);
        tempArr = [];
    }
    const verticalJoin = newArray.map(le => le.join(''));
    for (l of verticalJoin) {
        if (l.includes(word)) return true;
    }
    return false;
}

module.exports = wordSearch