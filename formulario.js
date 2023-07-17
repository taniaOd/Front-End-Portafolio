function valida(input) {
  const tipoInput = input.dataset.tipo;
  if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalid");
  } else {
    input.parentElement.classList.remove("input-container--invalid");
  }
}

const tipoErrores = ["valueMissing", "typeMismatch"];

const nuevoMsnError = {
  nombre: {
    valueMissing: "El campo Nombre no puede estar vacío.",
  },
  email: {
    valueMissing: "El campo E-mail no puede estar vacío.",
    typeMismatch: "No es un correo electrónico.",
  },
  asunto: {
    valueMissing: "El campo Asunto no puede estar vacío.",
  },
  mensaje: {
    valueMissing: "El campo Mensaje no puede estar vacío.",
  },
};

function mostrarMsnError(tipoInput, input) {
  let mensaje = "";
  tipoErrores.forEach((error) => {
    if (input.validity[error]) {
      console.log(tipoInput, error);
      console.log(input.validity.error);
      console.log(nuevoMsnError[tipoInput][error]);
      mensaje = nuevoMsnError[tipoInput][error];
    }
  });
  return mensaje;
}
