import fn from './index.js'

interface ISwitchObject {
  case: any
  value: any
}

test('one: switches object keys and return values', () => {

  const translate = {
    1: 'um',
    2: 'dois',
    '3': 'três',
  }

  const one = fn.one(1, translate)
  const two = fn.one(2, translate)
  const three = fn.one(3, translate)
  const four = fn.one(4, translate)
  const five = fn.one(5, {})

  expect(one).toBe('um')
  expect(two).toBe('dois')
  expect(three).toBe('três')
  expect(four).toBe(undefined)
  expect(five).toBe(undefined)

})

test('one: it retrieves a default value', () => {

  const dictionary = { 
    'cat':'Felis catus',
    'lion':'Panthera leo',
    'dog':'Canis familiaris' 
  }

  const catGiven = fn.one('cat', dictionary)
  const lionGiven = fn.one('lion', dictionary)
  const dogGiven = fn.one('dog', dictionary)
  const alienGivenWithNoDefault = fn.one('alien', dictionary)
  const alienGivenWithDefault = fn.one('alien', dictionary, { default: 'Species not found!' })

  expect(catGiven).toBe('Felis catus')
  expect(lionGiven).toBe('Panthera leo')
  expect(dogGiven).toBe('Canis familiaris')
  expect(alienGivenWithNoDefault).toBe(undefined)
  expect(alienGivenWithDefault).toBe('Species not found!')

})

test('one: I can use an array of objects for the switch', () => {

  const obj: ISwitchObject[] = [
    {
      case: (str: string) => str.includes('cat'),
      value: 'Felis catus'
    },
    {
      case: (str: string) => str.includes('lion'),
      value: 'Panthera leo'
    },
    {
      case: (str: string) => str.includes('dog'),
      value: 'Canis familiaris' 
    }
  ]

  const catGiven = fn.one('nice cat', obj)
  const lionGiven = fn.one('brave lion', obj)
  const dogGiven = fn.one('coward dog', obj)
  const alienGivenWithNoDefault = fn.one('alien', obj)
  const alienGivenWithDefault = fn.one('alien', obj, { default: 'Species not found!' })

  expect(catGiven).toBe('Felis catus')
  expect(lionGiven).toBe('Panthera leo')
  expect(dogGiven).toBe('Canis familiaris')
  expect(alienGivenWithNoDefault).toBe(undefined)
  expect(alienGivenWithDefault).toBe('Species not found!')

})
