function main() {
    const form = $('form');
    const keyboard = $('#keyboard');
    let game = { 'life': 6, 'word': ' ' };

    keyboard.empty();
    keyboard.append(createKeyboard());

    form.submit((e) => {
        let data = form.serializeArray();

        e.preventDefault();
        wordHtmlString = createWord(data, game);
        $('#visual').empty();
        $('#visual').append(wordHtmlString);
    });

    $(document).on("click", '.key', function () {
        let found = false;
        const currentLetter = $(this).html();

        for (let index = 0; index < game.word.length; index++) {
            if (currentLetter === game.word[index]) {
                $('#' + index).css('visibility', 'visible');
                found = true;
            }
        }

        if (found === false)
            game.life--;

        if (game.life === 0) {
            console.log("Game Over");
        }
        $(this).removeClass('key').addClass("none");
        $(this).css('background', 'grey');
    });
};

function createWord(words, game) {

    let wordElement = '<div id="word">';
    const clue = '<div class="clue">';
    const letterStart = '<a class="letter"', letterEnd = '</a>';
    const line = '<label>_</label>';
    const divEnds = '</div>';
    let position = Math.floor(Math.random() * (words.length));
    let word = words[position].value.toLowerCase();
    game.word = word;

    for (let i = 0; i < word.length; i++) {
        if (word[i] === " ") {
            wordElement += "<a>  </a>";
        }
        else {
            wordElement += clue;
            wordElement += letterStart + 'id="' + i + '">';
            wordElement += word[i];
            wordElement += letterEnd;
            wordElement += line;
            wordElement += divEnds;
        }

    }
    return wordElement;

};

function createKeyboard() {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const start = '<a class="key">', end = "</a>";
    let htmlString = '';
    for (let index = 0; index < letters.length; index++) {
        htmlString += start + letters[index] + end;
    }

    return htmlString;
}

function checkLetter(letter) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
    }

}

$(main);