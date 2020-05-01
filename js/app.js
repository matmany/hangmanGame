function main() {
    const form = $('form');
    form.submit((e) => {
        let data = form.serializeArray();
        e.preventDefault();
        createWord(data)
    })
};

function createWord(words) {
    const wordStart='<div id="word">';
    const clue = '<div class="clue">';
    const letterStart = '<a class="letter">', letterEnd = '</a>';
    const line = '<label>_</label>';
    const divEnds = '</div>';
    let position = Math.floor(Math.random() * (words.length));
    let word = words[position].value
    console.log(word);
    console.log(word.length);

    for (letter of word) {

    }

};

$(main);