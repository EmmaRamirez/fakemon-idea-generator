export default class Fakemon {
  type1: string;
  type2: string;
  singleType: boolean
  species: string;
  height: number;
  weight: number;
  pokedex: string;

  constructor(type1:string, type2:string, singleType:boolean, species:string, height:number, weight:number, pokedex:string) {
    this.type1 = type1;
    this.type2 = type2;
    this.singleType = singleType || false;
    this.species = species;
    this.height = height;
    this.weight = weight;
    this.pokedex = pokedex;
  }
}
