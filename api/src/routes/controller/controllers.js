const axios = require("axios");
const { Recipe, Diets } = require("../../db.js");

// Traigo de la API toda la info!!!
const searchAPI = async () => {
  try {
    // const apiUrl = await axios.get(
    //   `https://api.spoonacular.com/recipes/complexSearch?apiKey=${YOUR_API_KEY}&addRecipeInformation=true&number=100`
    // );
    const apiUrl = await axios.get(
      `https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`
    );
    const apiInfo = await apiUrl.data.results?.map((ele) => {
      return {
        id: ele.id,
        name: ele.title,
        summary: ele.summary,
        healthScore: ele.healthScore,
        image: ele.image,
        dishTypes: ele.dishTypes,
        diets: ele.diets?.map((element) => element),
        steps: ele.analyzedInstructions[0]?.steps
          .map((ele) => `${ele.number} ${ele.step}`)
          .join(""),
      };
    });
    return apiInfo;
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

//DB DATA

//Traigo de la Base de Datos toda la info que necesito.
const searchDb = async () => {
  try {
    const buscarDB = await Recipe.findAll({
      include: {
        model: Diets,
        attributes: ["name"],
        //throught si esta relacionado en la relacion de los dos modelos muchos  a muchos
        through: {
          attributes: [],
        },
      },
    });
    let obj = await buscarDB?.map((element) => {
      return {
        id: element.id,
        name: element.name,
        summary: element.summary,
        healthScore: element.healthScore,
        image: element.image,
        steps: element.steps,
        diets: element.diets?.map((diet) => diet.name),
      };
    });
    return obj;
  } catch (error) {
    console.error(error);
  }
};

//junto las dos funciones contatenado los resultados!!!

const getAll = async () => {
  try {
    const objApi = await searchAPI();
    const objBase = await searchDb();
    const allApiDb = await objApi.concat(objBase);
    // console.log(allApiDb)
    return allApiDb;
  } catch (error) {
    return error;
  }
};

/////// acepta un objeto de receta como argumento y crea una nueva entrada en la base de datos con esa información. También agrega información sobre dietas relacionadas a la receta.

const postRecipe = async (objRecipe) => {
  try {
    const { name, summary, healthScore, steps, image, diets } =
      objRecipe;
    const recipe = {
      name,
      summary,
      healthScore,
      steps,
      image,
    };

    const dietInfo = await Diets.findAll({
      where: {
        name: diets,
      },
    });
    const createRecipe = await Recipe.create(recipe);

    createRecipe.addDiets(dietInfo);

    return Recipe.findAll();
  } catch (error) {
    console.log(error);
  }
};

//// acepta un parámetro opcional de "name"  uso getAll traigo todas las recetas y busco si conside ese name con alguno

const rece = async (name) => {
  try {
    if (name) {
      const buscareceta = await getAll();
      const resultado = await buscareceta.filter(
        (ele) => ele.name.toLowerCase().includes(name.toLowerCase()) === true
      );
      if (resultado.length) return resultado;
    } else {
      const todas = await getAll();

      return todas;
    }

    throw "No tenemos datos sobre esta receta";
  } catch (error) {
    console.log(error);
  }
};

//buscar receta por ID
const getByID = async (idReceta) => {
  try {
    const buscareceta = await getAll();
    const receta = buscareceta.find((ele) => ele.id == idReceta);
    if (receta) {
      return receta;
    } else {
      throw "Ups, no tenemos una receta con ese id";
    }
  } catch (error) {
    console.log(error);
  }
};

///////////

module.exports = { rece, getAll, getByID, postRecipe };
