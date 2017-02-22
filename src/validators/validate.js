import _ from 'lodash'
import validator from 'validator'

export default (rules, fields) => {
  return _.reduce(_.keys(fields), (messages, field) => {
    if (!rules[field]) {
      return messages
    }

    _.each(rules[field].validations, method => {
      if (validator[method](fields[field])) {
        messages.push(rules[field].message)
      }
    })

    return messages
  }, [])
}
