export default function validations(datos) {
  let errors = {};
  const regex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  if (!datos.email) {
    errors.email = "el Email no puede estar vacio";
  } else if (!regex.test(datos.email)) {
    errors.email = "El email no es valido";
  } else if (datos.email.length > 35) {
    errors.email = "el email no puede tener mas de 35 caracteres.";
  }
  if (!/\d/.test(datos.password)) {
    errors.password = "La contraseña debe tener al menos un numero";
  } else if (datos.password.length < 6 || datos.password.length > 10) {
    errors.password =
      "la contraseña tiene que tener una longitud entre 6 y 10 caracteres";
  }

  return errors;
}
