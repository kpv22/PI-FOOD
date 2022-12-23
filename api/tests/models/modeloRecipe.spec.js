const { Recipe, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Modelo recipe test", () => {
  it("Arroja un error si healthScore no es numero", (done) => {
    Recipe.create({ healthScore: "asd" })
      .then(() => done(new Error("healthScore no es un numero")))
      .catch(() => done());
  });

  it("Arroja un error si el summary está vacío", (done) => {
    Recipe.create({ summary: "" })
      .then(() => done(new Error("DEBES INGRESAR UNA DESCRIPCION")))
      .catch(() => done());
  });
  it("Arroja un error si la receta no tiene nombre", (done) => {
    Recipe.create({ name: "" })
      .then(() => done(new Error("La receta debe llevar un nombre")))
      .catch(() => done());
  });
});
