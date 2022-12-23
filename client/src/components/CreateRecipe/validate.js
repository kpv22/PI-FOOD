const validate = (input) => {
  // objeto con los patrones de expresión regular y los mensajes de error correspondientes

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

  // Cobjeto vacío para almacenar los errores de validación
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
