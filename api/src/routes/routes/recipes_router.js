const router = require("express").Router();
const { Recipe, Diets } = require("../../db.js");
const { rece, getByID, postRecipe } = require("../controller/controllers");

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const devolver = await rece(name);
      res.status(200).json(devolver);
    } else {
      const todas = await rece();
      res.status(200).json(todas);
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const objRecipe = req.body;
    if (!objRecipe) res.status(404).send("Missing info");
    const newRecipe = await postRecipe(objRecipe);

    res.status(201).send(newRecipe);
  } catch (error) {
    res.status(404).send(error);
  }
});

// router.post("/", async (req, res) => {
//   const { name, summary, healthScore, image, steps, diets } = req.body;
//   try {
//     if (!name)
//       return res
//         .status(400)
//         .send({ error: "Debe ingresar el name para la receta" });
//     if (!summary)
//       return res
//         .status(400)
//         .send({ error: "Debe ingresar un summary del receta" });
//     let createdRecipe = await Recipe.create({
//       name,
//       summary,
//       healthScore,
//       image,
//       steps,
//     });

//     return res.status(200).send("Succesfull");
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

router.get("/:idReceta", async (req, res) => {
  const { idReceta } = req.params;
  try {
    const IdRec = await getByID(idReceta);
    res.status(200).json(IdRec);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Recipe.destroy({
      where: {
        id: id,
      },
    });
    return res.status(200).send("Delete Succesfull");
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
