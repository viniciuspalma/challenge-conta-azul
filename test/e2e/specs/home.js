module.exports = {
  beforeEach: browser => {
    browser.execute(
      `if (window.localStorage) {
        var cars = [
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
        ];
        window.localStorage.setItem('cars', JSON.stringify(cars));
        return true;
      }`
    )
  },

  afterEach: (browser, done) => {
    browser.execute(
      `if (window.localStorage) {
        window.localStorage.clear();
        return true;
      }`, [], () => done()
    )
  },

  'checking elements home': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 1000)
      .assert.elementPresent('.header')
      .assert.elementPresent('.header .wrapper a img')
      .assert.elementPresent('.search-car .input')
      .assert.containsText('.button-box .button', 'Novo Carro')
      .assert.elementCount('table', 1)
      .assert.elementCount('th', 7)
      .assert.elementCount('tr', 4)
      .end()
  },

  'testing click in new car button': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 1000)
      .click('.button-box .button')
      .waitForElementVisible('.title', 1000)
      .assert.containsText('.title', 'Novo Carro')
      .end()
  },

  'testing search by model': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 1000)
      .setValue('input[type=text]', ['Volkswagen', browser.Keys.ENTER])
      .pause(100)
      .assert.elementCount('tr', 4)
      .end()
  },

  'testing search by fuel': browser => {
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 1000)
      .setValue('input[type=text]', ['Flex', browser.Keys.ENTER])
      .pause(100)
      .assert.elementCount('tr', 2)
      .end()
  }
}
