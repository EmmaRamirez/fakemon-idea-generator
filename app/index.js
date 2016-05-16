(function () {
    var fakemon = {};
    var typeChoices = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy'];
    var speciesAdjective = ['fatigued', 'awkward', 'aerial', 'furtive'];
    var speciesNoun = ['leopard', 'leotard', 'watermelon', 'cat-thing', 'Pokedex'];
    var pokedexSentences = ['It lives in secrecy, far away from humans.'];
    function choose(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    function bindElement(query, event, f) {
        document.querySelector(query).addEventListener(event, f());
    }
    bindElement('.generate-fakemon', 'click', function () {
        console.log('Hello');
    });
})();
//# sourceMappingURL=index.js.map