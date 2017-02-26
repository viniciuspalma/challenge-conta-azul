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

  'checking elements edit car page': browser => {
    browser
      .url(`${browser.globals.devServerURL}/#/cars/cce3ab8e-3e01-4875-bb75-1d07f2ed1f3b`)
      .waitForElementVisible('#app', 1000)
      .assert.containsText('.title', 'Volkswagen - Gol')
      .assert.value('input[name="marca"]', 'Volkswagen')
      .assert.value('input[name="modelo"]', 'Gol')
      .assert.value('input[name="placa"]', 'FFF-5498')
      .assert.value('input[name="valor"]', '20000')
      .assert.value('input[name="combustivel"]', 'Flex')
      .assert.value('input[name="imagem"]', '')
      .end()
  },

  'editing a created car': browser => {
    browser
      .url(`${browser.globals.devServerURL}/#/cars/cce3ab8e-3e01-4875-bb75-1d07f2ed1f3b`)
      .waitForElementVisible('#app', 1000)
      .clearValue('input[name="modelo"]')
      .setValue('input[name="modelo"]', 'Bar')
      .clearValue('input[name="marca"]')
      .setValue('input[name="marca"]', 'Foo')
      .click('button[name="submit"]')
      .pause(100)
      .assert.containsText('.title', 'Foo - Bar')
      .end()
  }
}
