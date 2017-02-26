import _ from 'lodash'

const cars = [
  {
    id: 'cce3ab8e-3e01-4875-bb75-1d07f2ed1f3b',
    combustivel: 'Flex',
    imagem: null,
    marca: 'Volkswagen',
    modelo: 'Gol',
    placa: 'FFF-5498',
    valor: '20000'
  },

  {
    id: '64dd5fd8-5515-4c0a-a248-59c3fcacb2ac',
    combustivel: 'Gasolina',
    imagem: null,
    marca: 'Volkswagen',
    modelo: 'Fox',
    placa: 'FOX-4125',
    valor: '20000'
  },

  {
    id: '6d098cc1-389a-4039-8c87-c407f9d9e904',
    combustivel: 'Alcool',
    imagem: 'http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg',
    marca: 'Volkswagen',
    modelo: 'Fusca',
    placa: 'PAI-4121',
    valor: '20000'
  }
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

const findCar = (id) => {
  const currentCars = getCarsStorage()

  return currentCars.find(car => car.id === id)
}

const updateCar = (car) => {
  const currentCars = getCarsStorage()

  _.remove(currentCars, (current) => current.id === car.id)

  currentCars.push(car)
  localStorage.setItem('cars', JSON.stringify(currentCars))

  return findCar(car.id)
}

const deleteCar = (carId) => {
  const currentCars = getCarsStorage()

  _.remove(currentCars, (car) => car.id === carId)
  localStorage.setItem('cars', JSON.stringify(currentCars))
}

const massDeleteCars = (carIds) => {
  _.each(carIds, carId => deleteCar(carId))
}

export default {
  getCars (cb) {
    setTimeout(() => cb(getCarsStorage()), 200)
  },

  saveCar (car, cb) {
    saveCar(car)
    setTimeout(() => cb(), 200)
  },

  findCar (id, cb) {
    cb(findCar(id))
  },

  updateCar (car, cb) {
    setTimeout(() => cb(updateCar(car)), 200)
  },

  deleteCar (carId, cb) {
    deleteCar(carId)
    setTimeout(() => cb(), 200)
  },

  massDeleteCars (carIds, cb) {
    massDeleteCars(carIds)
    setTimeout(() => cb(), 200)
  }
}
