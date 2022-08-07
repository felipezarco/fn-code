import f from './index.js'

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

  const one = f.switch(1, translate)
  const two = f.switch(2, translate)
  const three = f.switch(3, translate)
  const four = f.switch(4, translate)
  const five = f.switch(5, {})

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

  const catGiven = f.switch('cat', dictionary)
  const lionGiven = f.switch('lion', dictionary)
  const dogGiven = f.switch('dog', dictionary)
  const alienGivenWithNoDefault = f.switch('alien', dictionary)
  const alienGivenWithDefault = f.switch('alien', dictionary, { default: 'Species not found!' })

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

  const catGiven = f.switch('nice cat', obj)
  const lionGiven = f.switch('brave lion', obj)
  const dogGiven = f.switch('coward dog', obj)
  const alienGivenWithNoDefault = f.switch('alien', obj)
  const alienGivenWithDefault = f.switch('alien', obj, { default: 'Species not found!' })

  expect(catGiven).toBe('Felis catus')
  expect(lionGiven).toBe('Panthera leo')
  expect(dogGiven).toBe('Canis familiaris')
  expect(alienGivenWithNoDefault).toBe(undefined)
  expect(alienGivenWithDefault).toBe('Species not found!')

})
