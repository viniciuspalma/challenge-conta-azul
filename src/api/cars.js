const cars = [
  {id: 1, combustivel: 'Flex', imagem: null, marca: 'Volkswagem', modelo: 'Gol', placa: 'FFF-5498', valor: '20000'},
  {id: 2, combustivel: 'Gasolina', imagem: null, marca: 'Volkswagem', modelo: 'Fox', placa: 'FOX-4125', valor: '20000'},
  {id: 3, combustivel: 'Alcool', imagem: 'http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg', marca: 'Volkswagen', modelo: 'Fusca', placa: 'PAI-4121', valor: '20000'}
]

const getCarsStorage = () => {
  if (!localStorage.getItem('cars')) {
    localStorage.setItem('cars', JSON.stringify(cars))
  }

  return JSON.parse(localStorage.getItem('cars'))
}

const saveCar = (car) => {
  const currentCars = getCarsStorage()

  currentCars.push(car)

  localStorage.setItem('cars', JSON.stringify(currentCars))
}

export default {
  getCars (cb) {
    setTimeout(() => cb(getCarsStorage()), 200)
  },

  saveCar (car, cb) {
    saveCar(car)
    setTimeout(() => cb(), 200)
  }
}
