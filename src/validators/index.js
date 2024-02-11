export const required = (value) => {
  if (!value || !value.trim()) {
    return 'Este campo es obligatorio.'
  }

  return false
}

export const onlyLetters = (value) => {
  const regex = /^[\sa-zA-ZÀ-ÿ]*$/g
  if (!regex.test(value)) {
    return 'Este solo debe contener letras.'
  }

  return false
}

export const numberOrLetter = (value) => {
  const regex = /^[\sa-zA-ZÀ-ÿ\d]*$/g

  if (!regex.test(value)) {
    return 'Este campo solo debe contener letras y/o números.'
  }

  return false
}

// TODO: validation for arithmetics operations
// ^[-+]?\d+(?:\.\d+)?(?:(?:[+-]?|[*/%]?[+-]?)\d+(?:\.\d+)?)?$|^[-+*/%]$

export const numberOrOperator = (value) => {
  const regex = /^[-+]?\d*\.\d+$/g

  if (!regex.test(value)) {
    return `El valor "${value}" no es válido para realizar una operación matemática.`
  }

  return false
}

export const min = (value, min) => {
  if (value.trim().length < min) {
    return `Este campo debe contener al menos ${min} caracteres.`
  }

  return false
}
export const max = (value, max) => {
  if (value.trim().length > max) {
    return `Este campo debe sobrepasar los ${max} caracteres.`
  }

  return false
}
