// @flow
import timeago from 'timeago.js'

// the local dict example is below.
const customLocale = (_timestamp, index, _totalSeconds) => {
  return [
    ['just now', 'right now'],
    ['%ss', 'in %ss'],
    ['1m', 'in 1m'],
    ['%sm', 'in %sm'],
    ['1h', 'in 1d'],
    ['%sh', 'in %sh'],
    ['1d', 'in 1d'],
    ['%sd', '%sd'],
    ['1w', 'in 1w'],
    ['%sw', 'in %sw'],
    ['1mo', 'in 1mo'],
    ['%smo', 'in %smo'],
    ['1y', 'in 1y'],
    ['%sy', 'in %sy']
  ][index]
}

timeago.register('customLocale', customLocale)

const timeagoInstance = timeago()

const formatDate = (timestamp: number) => {
  return timeagoInstance.format(timestamp, 'customLocale')
}

export default formatDate
