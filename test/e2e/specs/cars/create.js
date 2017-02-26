module.exports = {
  'checking elements new car page': browser => {
    browser
      .url(`${browser.globals.devServerURL}/#/cars/new`)
      .waitForElementVisible('#app', 1000)
      .assert.elementPresent('input[name="modelo"]')
      .assert.elementPresent('input[name="marca"]')
      .assert.elementPresent('input[name="placa"]')
      .assert.elementPresent('input[name="valor"]')
      .assert.elementPresent('input[name="combustivel"]')
      .assert.elementPresent('input[name="imagem"]')
      .assert.containsText('.title', 'Novo Carro')
      .assert.containsText('button[name="submit"]', 'Criar novo carro')
      .assert.containsText('button[name="back"]', 'Voltar')
      .end()
  },

  'creating a new car': browser => {
    browser
      .url(`${browser.globals.devServerURL}/#/cars/new`)
      .waitForElementVisible('#app', 1000)
      .setValue('input[name="modelo"]', 'Gol')
      .setValue('input[name="marca"]', 'Volkswagem')
      .setValue('input[name="placa"]', 'FOO-1234')
      .setValue('input[name="valor"]', '90000')
      .setValue('input[name="combustivel"]', 'Flex')
      .setValue('input[name="imagem"]', '')
      .click('button[name="submit"]')
      .waitForElementVisible('.title', 1000)
      .assert.containsText('.title', 'Volkswagem - Gol')
      .end()
  },

  'creating a new car without required fields': browser => {
    browser
      .url(`${browser.globals.devServerURL}/#/cars/new`)
      .waitForElementVisible('#app', 1000)
      .click('button[name="submit"]')
      .pause(100)
      .assert.containsText('.form-errors', 'O campo Modelo deve estar preenchido!')
      .assert.containsText('.form-errors', 'O campo Marca deve estar preenchido!')
      .assert.containsText('.form-errors', 'O campo Placa deve estar preenchido!')
      .end()
  }
}
