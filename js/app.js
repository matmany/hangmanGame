//import {getCollection} from './names.js';


function main() {
    const collection = getCollection();
    const form = $('form');
    const keyboard = $('#keyboard');
    let game = { 'life': 6, 'word': ' ', 'option': '', 'tip': '', 'size': 0 };

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
        const currentLetter = $(this).html();
        const letterStatus = checkLetter(game, currentLetter);

        //Letra incorreta
        if (letterStatus === false) {
            game.life--;
            console.log("Errado");
        } else {
            console.log("Acerto");
        }

        //Fim de joga
        if (game.life === 0 || game.size === 0) {
            $('#menu').css('display', 'none');
            $('#game').empty();
            $('#game').append('<h2>Answer</h2><p id="resposta">' + game.word + '</p>');
            $('#gameover').css('display', 'block');
        }

        console.log("Vida:" + game.life + "Resposta: " + game.word);
        $(this).removeClass('key').addClass("none");
        $(this).css('background', 'grey');
    });

    $(document).on("click", '#gameover', function () {
        location.reload();
    });

    $(document).on("click", '#play', function () {
        let tipString = '<p>';
        game.option = "play";
        $('#menu').css('display', 'none');
        $('#game').css('display', 'block');
        wordHtmlString = createWord(collection, game);
        tipString += game.tip + "</p>";
        $('#visual').empty();
        $('#visual').append(wordHtmlString);
        $('#tip').empty();
        $('#tip').append(tipString);
    });

    $(document).on("click", '#create', function () {
        game.option = "create";
        location.reload();
    });
};

function createWord(words, game) {

    const clue = '<div class="clue">';
    const letterStart = '<a class="letter"', letterEnd = '</a>';
    const line = '<label>___</label>';
    const divEnds = '</div>';
    let wordElement = '<div id="word">';
    let position = Math.floor(Math.random() * (words.length));
    let word;
    if (game.option === 'play') {
        //console.log("Palavra:" + words[position]);
        word = words[position].name.toLowerCase();
        game.tip = words[position].type;
        game.size = words[position].name.length;
        console.log("Length" + game.size);
    }
    else {
        word = words[position].value.toLowerCase();
    }

    game.word = word;

    for (let i = 0; i < word.length; i++) {
        if (word[i] === " ") {
            wordElement += '<a class="space"></a>';
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

function checkLetter(game, letter) {
    let found = false;
    for (let index = 0; index < game.word.length; index++) {
        if (letter === game.word[index]) {
            $('#' + index).css('visibility', 'visible');
            found = true;
            game.size--;
        }
    }
    return found;
}

function getCollection() {
    const collection = [
        { "name": "Avengers", "type": "movie" },
        { "name": "Avatar", "type": "movie" },
        { "name": "Titanic", "type": "movie" },
        { "name": "Star Wars", "type": "movie" },
        { "name": "Jurassic World", "type": "movie" },
        { "name": "The Lion King", "type": "movie" },
        { "name": "Frozen II", "type": "movie" },
        { "name": "Black Panther", "type": "movie" },
        { "name": "Harry Potter and the Deathly Hallows", "type": "movie" },
        { "name": "Frozen", "type": "movie" },
        { "name": "Beauty and the Beast", "type": "movie" },
        { "name": "Incredibles", "type": "movie" },
        { "name": "Iron Man", "type": "movie" },
        { "name": "Minions", "type": "movie" },
        { "name": "Captain America", "type": "movie" },
        { "name": "Aquaman", "type": "movie" },
        { "name": "Spider Man", "type": "movie" },
        { "name": "Captain Marvel", "type": "movie" },
        { "name": "Transformers", "type": "movie" },
        { "name": "The Lord of the Rings", "type": "movie" },
        { "name": "Skyfall", "type": "movie" },
        { "name": "The Dark Knight Rises", "type": "movie" },
        { "name": "Joker", "type": "movie" },
        { "name": "Toy Story", "type": "movie" },
        { "name": "Pirates of the Caribbean", "type": "movie" },
        { "name": "Rogue One", "type": "movie" },
        { "name": "Aladdin", "type": "movie" },
        { "name": "Despicable Me", "type": "movie" },
        { "name": "Jurassic Park", "type": "movie" },
        { "name": "Finding Dory", "type": "movie" },
        { "name": "Alice in Wonderland", "type": "movie" },
        { "name": "Zootopia", "type": "movie" },
        { "name": "The Hobbit", "type": "movie" },
        { "name": "The Dark Knight", "type": "movie" },
        { "name": "Harry Potter and the Philosopher's Stone", "type": "movie" },
        { "name": "The Jungle Book", "type": "movie" },
        { "name": "Jumanji", "type": "movie" },
        { "name": "Finding Nemo", "type": "movie" },
        { "name": "Harry Potter and the Order of the Phoenix", "type": "movie" },
        { "name": "Harry Potter and the Half Blood Prince", "type": "movie" },
        { "name": "Shrek", "type": "movie" },
        { "name": "Bohemian Rhapsody", "type": "movie" },
        { "name": "Harry Potter and the Goblet of Fire", "type": "movie" },
        { "name": "Ice Age", "type": "movie" },
        { "name": "Spectre", "type": "movie" },
        { "name": "Harry Potter and the Chamber of Secrets", "type": "movie" },
        { "name": "The Secret Life of Pets", "type": "movie" },
        { "name": "Batman v Superman", "type": "movie" },
        { "name": "Wolf Warrior", "type": "movie" },
        { "name": "The Hunger Games", "type": "movie" },
        { "name": "Inside Out", "type": "movie" },
        { "name": "Venom", "type": "movie" },
        { "name": "Thor", "type": "movie" },
        { "name": "The Twilight Saga", "type": "movie" },
        { "name": "Inception", "type": "movie" },
        { "name": "Wonder Woman", "type": "movie" },
        { "name": "Independence Day", "type": "movie" },
        { "name": "Fantastic Beasts and Where to Find Them", "type": "movie" },
        { "name": "Coco", "type": "movie" },
        { "name": "Shrek the Third", "type": "movie" },
        { "name": "Harry Potter and the Prisoner of Azkaban", "type": "movie" },
        { "name": "E.T. the Extra Terrestrial", "type": "movie" },
        { "name": "Mission", "type": "movie" },
        { "name": "Fast & Furious", "type": "movie" },
        { "name": "2012", "type": "movie" },
        { "name": "Indiana Jones and the Kingdom of the Crystal Skull", "type": "movie" },
        { "name": "Deadpool", "type": "movie" },
        { "name": "Guardians of the Galaxy", "type": "movie" },
        { "name": "Cachorro", "type": "animal" },
        { "name": "Leao", "type": "animal" },
        { "name": "Tigre", "type": "animal" },
        { "name": "Gato", "type": "animal" },
        { "name": "Foca", "type": "animal" },
        { "name": "Elefante", "type": "animal" },
        { "name": "Girafa", "type": "animal" },
        { "name": "Zebra", "type": "animal" },
        { "name": "Tartaruga", "type": "animal" },
        { "name": "Onca", "type": "animal" },
        { "name": "Vaca", "type": "animal" },
        { "name": "Boi", "type": "animal" },
        { "name": "Carneiro", "type": "animal" },
        { "name": "Bode", "type": "animal" },
        { "name": "Iena", "type": "animal" },
        { "name": "Urso", "type": "animal" },
        { "name": "Cobra", "type": "animal" },
        { "name": "Macaco", "type": "animal" },
        { "name": "Galinha", "type": "animal" },
        { "name": "Galo", "type": "animal" },
        { "name": "Esquilo", "type": "animal" },
        { "name": "Hipopotamo", "type": "animal" },
        { "name": "Coelho", "type": "animal" },
        { "name": "Baleia", "type": "animal" },
        { "name": "Gamba", "type": "animal" },
        { "name": "Cervo", "type": "animal" },
        { "name": "Alce", "type": "animal" },
        { "name": "Panda", "type": "animal" },
        { "name": "Passaro", "type": "animal" },
        { "name": "Aguia", "type": "animal" },
        { "name": "Avestruz", "type": "animal" },
        { "name": "Bufalo", "type": "animal" },
        { "name": "Cabra", "type": "animal" },
        { "name": "Camelo", "type": "animal" },
        { "name": "Capivara", "type": "animal" },
        { "name": "Cavalo", "type": "animal" },
        { "name": "Pato", "type": "animal" },
        { "name": "Coala", "type": "animal" },
        { "name": "Corvo", "type": "animal" },
        { "name": "Crocodilo", "type": "animal" },
        { "name": "Gaviao", "type": "animal" },
        { "name": "Gorila", "type": "animal" },
        { "name": "Jacare", "type": "animal" },
        { "name": "Leopardo", "type": "animal" },
        { "name": "Lobo", "type": "animal" },
        { "name": "Lula", "type": "animal" },
        { "name": "Papagaio", "type": "animal" },
        { "name": "Polvo", "type": "animal" },
        { "name": "Pombo", "type": "animal" },
        { "name": "Porco", "type": "animal" },
        { "name": "Puma", "type": "animal" },
        { "name": "Raposa", "type": "animal" },
        { "name": "Rinoceronte", "type": "animal" },
        { "name": "Sapo", "type": "animal" },
        { "name": "Tatu", "type": "animal" },
        { "name": "Touro", "type": "animal" },
        { "name": "Tucano", "type": "animal" },
        { "name": "Urubu", "type": "animal" },
        { "name": "Arara", "type": "animal" },
        { "name": "Faca", "type": "object" },
        { "name": "Garfo", "type": "object" },
        { "name": "Colher", "type": "object" },
        { "name": "Computador", "type": "object" },
        { "name": "Mesa", "type": "object" },
        { "name": "Cadeira", "type": "object" },
        { "name": "Ventilador", "type": "object" },
        { "name": "Abajur", "type": "object" },
        { "name": "Escova", "type": "object" },
        { "name": "Televisao", "type": "object" },
        { "name": "Tv", "type": "object" },
        { "name": "Sofa", "type": "object" },
        { "name": "Celular", "type": "object" },
        { "name": "Fogao", "type": "object" },
        { "name": "Geladeira", "type": "object" },
        { "name": "Cama", "type": "object" },
        { "name": "Armario", "type": "object" },
        { "name": "Porta", "type": "object" },
        { "name": "Bola", "type": "object" },
        { "name": "Escada", "type": "object" },
        { "name": "Lapis", "type": "object" },
        { "name": "Caneta", "type": "object" },
        { "name": "Borracha", "type": "object" },
        { "name": "Mochila", "type": "object" },
        { "name": "Mala", "type": "object" },
        { "name": "Chuveiro", "type": "object" },
        { "name": "Copo", "type": "object" },
        { "name": "Panela", "type": "object" },
        { "name": "Roupa", "type": "object" },
        { "name": "Cabide", "type": "object" },
        { "name": "Martelo", "type": "object" },
        { "name": "Chave", "type": "object" },
        { "name": "São Paulo", "type": "city" },
        { "name": "Rio de Janeiro", "type": "city" },
        { "name": "Salvador", "type": "city" },
        { "name": "Brasília", "type": "city" },
        { "name": "Fortaleza", "type": "city" },
        { "name": "Belo Horizonte", "type": "city" },
        { "name": "Manaus", "type": "city" },
        { "name": "Curitiba", "type": "city" },
        { "name": "Recife", "type": "city" },
        { "name": "Porto Alegre", "type": "city" },
        { "name": "Belém", "type": "city" },
        { "name": "Goiânia", "type": "city" },
        { "name": "Guarulhos", "type": "city" },
        { "name": "Campinas", "type": "city" },
        { "name": "São Luís", "type": "city" },
        { "name": "São Gonçalo", "type": "city" },
        { "name": "Maceió", "type": "city" },
        { "name": "Duque de Caxias", "type": "city" },
        { "name": "Natal", "type": "city" },
        { "name": "Campo Grande", "type": "city" },
        { "name": "Teresina", "type": "city" },
        { "name": "São Bernardo do Campo", "type": "city" },
        { "name": "Nova Iguaçu", "type": "city" },
        { "name": "João Pessoa", "type": "city" },
        { "name": "Santo André", "type": "city" },
        { "name": "Osasco", "type": "city" },
        { "name": "São José dos Campos", "type": "city" },
        { "name": "Jaboatão dos Guararapes", "type": "city" },
        { "name": "Ribeirão Preto", "type": "city" },
        { "name": "Uberlândia", "type": "city" },
        { "name": "Contagem", "type": "city" },
        { "name": "Sorocaba", "type": "city" },
        { "name": "Aracaju", "type": "city" },
        { "name": "Feira de Santana", "type": "city" },
        { "name": "Cuiabá", "type": "city" },
        { "name": "Joinville", "type": "city" },
        { "name": "Juiz de Fora", "type": "city" },
        { "name": "Londrina", "type": "city" },
        { "name": "Aparecida de Goiânia", "type": "city" },
        { "name": "Ananindeua", "type": "city" },
        { "name": "Niterói", "type": "city" },
        { "name": "Porto Velho", "type": "city" },
        { "name": "Campos dos Goytacazes", "type": "city" },
        { "name": "Belford Roxo", "type": "city" },
        { "name": "Serra", "type": "city" },
        { "name": "Caxias do Sul", "type": "city" },
        { "name": "Vila Velha", "type": "city" },
        { "name": "Florianópolis", "type": "city" },
        { "name": "São João de Meriti", "type": "city" },
        { "name": "Mauá", "type": "city" },
        { "name": "Macapá", "type": "city" },
        { "name": "São José do Rio Preto", "type": "city" },
        { "name": "Santos", "type": "city" },
        { "name": "Mogi das Cruzes", "type": "city" },
        { "name": "Betim", "type": "city" },
        { "name": "Diadema", "type": "city" },
        { "name": "Campina Grande", "type": "city" },
        { "name": "Jundiaí", "type": "city" },
        { "name": "Maringá", "type": "city" },
        { "name": "Montes Claros", "type": "city" },
        { "name": "Carapicuíba", "type": "city" },
        { "name": "Olinda", "type": "city" },
        { "name": "Piracicaba", "type": "city" },
        { "name": "Cariacica", "type": "city" },
        { "name": "Bauru", "type": "city" },
        { "name": "Rio Branco", "type": "city" },
        { "name": "Anápolis", "type": "city" },
        { "name": "São Vicente", "type": "city" },
        { "name": "Vitória", "type": "city" },
        { "name": "Caucaia", "type": "city" },
        { "name": "Itaquaquecetuba", "type": "city" },
        { "name": "Caruaru", "type": "city" },
        { "name": "Pelotas", "type": "city" },
        { "name": "Vitória da Conquista", "type": "city" },
        { "name": "Canoas", "type": "city" },
        { "name": "Franca", "type": "city" },
        { "name": "Ponta Grossa", "type": "city" },
        { "name": "Blumenau", "type": "city" },
        { "name": "Petrolina", "type": "city" },
        { "name": "Paulista", "type": "city" },
        { "name": "Ribeirão das Neves", "type": "city" },
        { "name": "Uberaba", "type": "city" },
        { "name": "Boa Vista", "type": "city" },
        { "name": "Cascavel", "type": "city" },
        { "name": "Guarujá", "type": "city" },
        { "name": "Taubaté", "type": "city" },
        { "name": "Petrópolis", "type": "city" },
        { "name": "Limeira", "type": "city" },
        { "name": "Praia Grande", "type": "city" },
        { "name": "São José dos Pinhais", "type": "city" },
        { "name": "Santarém", "type": "city" },
        { "name": "Mossoró", "type": "city" },
        { "name": "Suzano", "type": "city" },
        { "name": "Camaçari", "type": "city" },
        { "name": "Governador Valadares", "type": "city" },
        { "name": "Santa Maria", "type": "city" },
        { "name": "Gravataí", "type": "city" },
        { "name": "Taboão da Serra", "type": "city" },
        { "name": "Várzea Grande", "type": "city" },
        { "name": "Palmas", "type": "city" }];
    return collection;
}

$(main);