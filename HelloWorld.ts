// define the class with constructor
class Author {
    constructor (public Name: string) { }
}
// create the instance of the class
let author = new Author("Wesley Mattos");
// print the information in the console
console.log("\nOlá Mundo,");
console.log("Bem vindo ao mundo de");
console.log(`\t~ ${author.Name}`);
