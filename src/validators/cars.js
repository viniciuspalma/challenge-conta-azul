import validate from 'validators/validate'

const rules = {
  modelo: {
    validations: ['isEmpty'],
    message: 'O campo Modelo deve estar preenchido!'
  },

  marca: {
    validations: ['isEmpty'],
    message: 'O campo Marca deve estar preenchido!'
  },

  placa: {
    validations: ['isEmpty'],
    message: 'O campo Placa deve estar preenchido!'
  }
}

export default (fields) => {
  return validate(rules, fields)
}
