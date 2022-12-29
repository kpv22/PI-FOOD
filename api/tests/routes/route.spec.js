const chai = require("chai");
const { expect } = chai;
const session = require("supertest-session");
const app = require("../../src/App.js");

let agent = null;

//chai.use(require("chai-uuid"));

describe("Recipe routes", () => {
  beforeEach(() => {
    agent = session(app);
  });

  describe("/recipes/:id", () => {
    it("deberia devolver un 200 y id, titulo", async () => {
      try {
        const res = await agent
          .get("/recipes/716426")
          .expect("Content-Type", /json/)
          .expect(200);
        expect(res.body).to.have.property("id");
        expect(res.body).to.have.property("name");
      } catch (error) {
        done(error);
      }
    });
  });
  describe("/recipes/:id", () => {
    it("deberia devolver un 200 y la descripcion en la respuesta", async () => {
      await agent
        .get("/recipes/716426")
        .expect("Content-Type", /json/)
        .expect(200)
        .then((res) => {
          expect(res.body).to.have.property("summary");
        });
    });
  });
});
