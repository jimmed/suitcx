var cx = require('classnames')

/**
 * It's `suitcx`. Like `cx`, but for suitCSS
 *
 * @param {string} parent - The main suitCSS class, i.e. `ChatItem` or `ChatItem-message`.
 * @param {Object} [modifiers] - The suitCSS modifiers to apply, where each key is the name of the modifier applied. For each key/value pair of the object; if a value is a string, the modifier name will be the value appended to the key (in camel-case); otherwise, the modifier will only be added if the value is truthy.
 * @param {Object} [state] - The suitCSS state to apply, where each key is the name of the state to be applied, and the value used to determine whether to apply the state.
 *
 * @returns {string} A className string suitable fit for the most stylish of elements.
 *
 * @example
 * // returns 'ChatItem ChatItem--alignLeft ChatItem--deleted is-hovered'
 * suitcx('ChatItem', { align: 'left', deleted: true }, { hovered: true })
 **/

module.exports = function suitcx (parent, modifiers, state) {
  return cx([ parent ]
    .concat(Object.keys(modifiers || {})
      .reduce((classes, key) => {
        const fullKey = [parent, key].join('--')
        const value = modifiers[key]
        if (typeof value === 'string') {
          classes.push(fullKey + capitalizeFirst(value))
        } else if (value) {
          classes.push(fullKey)
        }
        return classes
      }, [])
    )
    .concat(Object.keys(state || {})
      .reduce((classes, key) => {
        if (state[key]) {
          classes.push('is-' + key)
        }
        return classes
      }, [])
    )
  )
}

function capitalizeFirst (str) {
  return str ? str[0].toUpperCase() + str.slice(1) : str
}
