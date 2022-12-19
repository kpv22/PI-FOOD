const { Diets } = require("../../db");

const createDiet = async () => {
  const dietTypes = [
    "gluten free",
    "ketogenic",
    "lacto ovo vegetarian",
    "vegan",
    "pescatarian",
    "paleolithic",
    "primal",
    "fodmap friendly",
    "whole 30",
    "dairy free",
  ];
  dietTypes.forEach((d) => {
    Diets.findOrCreate({
      where: {
        name: d,
      },
    });
  });
  return Diets.findAll();
};
module.exports = { createDiet };
