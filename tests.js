const chai = window.chai;
const expect = chai.expect;

describe("Colecciones en JS: Array", () => {
    it("Pueden crearse usando [ ]", () => {

        // crea un array "a" usando los corchetes []

        expect(Array.isArray(a)).to.be.true;
    })
    it("Pueden crearse usando new Array", () => {

        // crea un array "a" usando el constructor "new"

        expect(Array.isArray(a)).to.be.true;
    })
    it("Pueden estar vacíos o contener elementos", () => {

        // crea un array que esté vacío y otro que no esté vacío

        expect(emptyArray).to.be.empty;
        expect(nonEmptyArray).not.to.be.empty;
    })
    it("Tienen una longitud correspondiente que podemos conocer con la propiedad 'length'", () => {

        let list = [10, "foo", true, "pepe"];

        // completa la definición que falta usando la propiedad length

        expect(l).to.equal(4);
    })
    it("Nos permiten acceder a cada elemento del array", () => {

        let fruits = ["Piña", "Manzana", "Fresa", "Melón"]

        // sustituye "???" en cada caso para acceder al elemento correspondiente de la lista

        expect("???").to.equal("Piña");
        expect("???").to.equal("Melón");
    })
    it("Nos permiten modificar cada elemento", () => {

        let fruits = ["Piña", "Manzana", "Fresa", "Melón"]

        // Añade el código que permite modificar el elemento correspondiente

        expect(fruits).to.have.same.members(["Piña", "Pera", "Fresa", "Melón"])
    })

    it("Podemos añadir elementos", () => {
        let fruits = ["Piña", "Manzana", "Fresa", "Melón"]

        // Añade el código que permite modificar la lista

        expect(fruits).to.have.same.members(["Piña", "Manzana", "Fresa", "Melón", "Pera"])
    })

})