const { Router } = require("express");

const { createDiet } = require("../controller/controllerDiet");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const allDiets = await createDiet();
    res.status(200).send(allDiets);
  } catch (error) {
    res.status(404).send(error);
  }
});
module.exports = router;
