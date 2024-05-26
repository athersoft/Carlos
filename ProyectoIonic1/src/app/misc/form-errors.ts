const errorMsg =  {
    required: 'Field required.',
    requiredTrue: 'Field required.',
    email: 'Invalid email.',
    minlength: 'Mínimo de caracteres no alcanzado',
    maxlength: 'Máximo de caracteres excedido',
    pattern: 'Formato inválido',
    rutDv: 'Dígito verificador inválido',
    rutFormat: 'Formato de RUT inválido (sin puntos, con guión)',
    region: 'Región no seleccionada',
    comuna: 'Comuna no seleccionada',
    tyc: 'Debe aceptar los términos y condiciones',
    password: 'Contraseña inválida',
    passwordConfirm: 'Las contraseñas no coinciden',
}
// revisar para las cosas de la cosa de la cosa

type FormError = keyof typeof errorMsg;

export {errorMsg};
export type {FormError};