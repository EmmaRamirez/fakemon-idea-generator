"use strict";
var fakemon_1 = require("./fakemon");
(function () {
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
    function createFakemon() {
        var fakemonType1, fakemonType2;
        fakemonType1, fakemonType2 = choose(typeChoices), choose(typeChoices);
        return new fakemon_1.default(fakemonType1, fakemonType2);
    }
    bindElement('.generate-fakemon', 'click', function () {
        console.log(createFakemon());
    });
    function init() {
    }
    init();
})();
//# sourceMappingURL=index.js.map