// const validate = (input) => {
//   var nombre = /^[a-zA-Z ]{1,30}$/;
//   var steps = /^[a-zA-Z0-9 ]{1,500}$/;

import { filterByDiets } from "../../redux/actions";

//   var num10a100 = /^([1][0-9]|100)$/;
//   var regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

//   let errorInput = {};

//   if (!input.name) errorInput.name = "Se requiere un nombre para la receta";
//   if (!nombre.test(input.name))
//     errorInput.name = "El nombre de tu receta debe ser con letras de A la Z";

//   if (!input.healthScore)
//     errorInput.healthScore = "Por favor introduce un puntaje nutricional";
//   if (!num10a100.test(input.healthScore))
//     errorInput.healthScore = "El puntaje nutricial debe ser del 10 al 100";

//   if (
//     !/(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?.*(png|jpg|jpeg|gif)$/.test(
//       input.image
//     )
//   )
//     errorInput.image =
//       "Debes insertar una imagen con un enlace seguro (https) y formato jpg, jpeg, png o gift";

//   if (!steps.test(input.steps))
//     errorInput.steps = "Tus indicaciones no deben superar los 500 Caracteres";
//   if (!input.steps)
//     errorInput.steps = "No te olvides de indicarnos como preparar la receta";

//   if (!input.summary)
//     errorInput.summary = "¡Ups!, se te esta olvidando agregar una descripcion";
//   if (!steps.test(input.summary))
//     errorInput.summary =
//       "Tu descripcion solo puede contener numeros del 1 al 10, letras hasta 500 caracteres";

//   if (!input.diets.length)
//     errorInput.diets =
//       "¡Ups!, por favor agrega a que tipo de dieta se adapta tu receta";

//   return errorInput;
// };
// export default validate;

const validate = (input, recipes) => {
  // Crea un objeto con los patrones de expresión regular y los mensajes de error correspondientes

  //filtrados = filter((ele)=>(input.name === ele.name))
  // const filtrado = recipes.filter((ele) => recipes.name === input.name)

  const patterns = {
    name: {
      pattern: /^[a-zA-Z ]{1,30}$/,
      errorMessage: "El nombre de tu receta debe ser con letras de A la Z",
    },
    healthScore: {
      pattern: /^([1-9][0-9]|100)$/,
      errorMessage: "El puntaje nutricial debe ser del 10 al 100",
    },
    image: {
      pattern:
        /(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?.*(png|jpg|jpeg|gif)$/,
      errorMessage:
        "Debes insertar una imagen con un enlace seguro (https) y formato jpg, jpeg, png o gift",
    },
    steps: {
      pattern: /^[a-zA-Z0-9 ]{25,500}$/,
      errorMessage:
        "Tus pasos solo puede contener numeros del 1 al 10, letras minimo 25 hasta 500 caracteres",
    },
    summary: {
      pattern: /^[a-zA-Z0-9 ]{25,500}$/,
      errorMessage:
        "Tu descripcion solo puede contener numeros del 1 al 10, letras minimo 25 hasta 500 caracteres",
    },
    diets: {
      pattern: /^.+$/,
      errorMessage:
        "¡Ups!, por favor agrega a que tipo de dieta se adapta tu receta",
    },
  };

  // Crea un objeto vacío para almacenar los errores de validación
  let errorInput = {};

  // Itera sobre el objeto patterns
  for (const error in patterns) {
    // Verifica si el campo cumple con el patrón de expresión regular
    if (!patterns[error].pattern.test(input[error])) {
      errorInput[error] = patterns[error].errorMessage;
    }
  }

  return errorInput;
};

export default validate;
