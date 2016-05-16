"use strict";
var Fakemon = (function () {
    function Fakemon(type1, type2, singleType, species, height, weight, pokedex) {
        this.type1 = type1;
        this.type2 = type2;
        this.singleType = singleType || false;
        this.species = species;
        this.height = height;
        this.weight = weight;
        this.pokedex = pokedex;
    }
    return Fakemon;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Fakemon;
//# sourceMappingURL=fakemon.js.map