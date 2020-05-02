function main() {
    const form = $('form');
    const keyboard = $('#keyboard');
    let answer = { 'word': ' ' };
    keyboard.empty();
    keyboard.append(createKeyboard());

    form.submit((e) => {
        let data = form.serializeArray();
        e.preventDefault();
        wordHtmlString = createWord(data, answer);
        $('#visual').empty();
        $('#visual').append(wordHtmlString);
    })

        $(document).on("click", '.key', function() {
        console.log("A palavra: " + answer.word);
        const currentLetter = $(this).html();
        for (let index = 0; index < answer.word.length; index++) {
            if (currentLetter === answer.word[index]) {
                $('#' + index).css('visibility', 'visible');
            }
        }
        $(this).removeClass('key').addClass("none");
        $(this).css('background', 'grey');
    })
};

function createWord(words, answer) {

    //const wordStart='<div id="word">';
    let wordElement = '<div id="word">';
    const clue = '<div class="clue">';
    const letterStart = '<a class="letter"', letterEnd = '</a>';
    const line = '<label>_</label>';
    const divEnds = '</div>';
    let position = Math.floor(Math.random() * (words.length));
    let word = words[position].value.toLowerCase();
    answer.word = word
    //onsole.log(word);
    //console.log(word.length);
    //console.log("Letras:");

    for (let i = 0; i < word.length; i++) {
        //console.log(word[i]);
        wordElement += clue;
        wordElement += letterStart + 'id="' + i + '">';
        wordElement += word[i];
        wordElement += letterEnd;
        wordElement += line;
        wordElement += divEnds;
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