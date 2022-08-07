#  Fn functions 

> Functions (fn) that make your javascript code cleaner

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT) [![npm version](https://badge.fury.io/js/fn-code.svg)](https://badge.fury.io/js/fn-code) [![Build Status](https://travis-ci.org/felipezarco/fn-code.svg?branch=master)](https://travis-ci.org/felipezarco/fn-code) [![Coverage Status](https://coveralls.io/repos/github/felipezarco/fn-code/badge.svg?branch=master)](https://coveralls.io/github/felipezarco/fn-code?branch=master) ![Downloads](https://img.shields.io/npm/dw/fn-code)

[![npm](https://nodei.co/npm/fn-code.png)](https://www.npmjs.com/package/fn-code)


## Installation

The latest version is available at: https://www.npmjs.com/package/fn-code

Use your favorite package manager to install. For instance:  

```bash
yarn add fn-code
```

Then import it:

```typescript
import fn from 'fn-code'
```

Importing as `fn` is the way I prefer to use it. But it's a matter of preference, you could either chose another name or deconstruct the functions:

```typescript
import cleanCode from 'fn-code'
import { one } from 'fn-code'
```

## Why Clean Code functions?

You like functional programming. You find yourself doing shenanigans to achieve your goals. Let's see:

### **I want to make my variable a const, but depending on different values of another variable**

For example: 

My const variable `binomalName` depends on the `animal` variable value.

You try something like:

```typescript
let binomalName = ''

if(animal === 'cat') binomalName = 'Felis catus'
if(animal === 'dog') binomalName = 'Canis familiaris'
```

But this is not what you want since binomalName name is not a const.

You try something like: 

```typescript
const binomalName = (animal === 'cat') ? 'Felis catus' : 'Canis familiaris'
```

This is meets the const criteria. But what if you would have a third species now (animal 'lion' for instance)? 

```typescript
const binomalName = (animal === 'cat') ? 'Felis catus' : ((animal === 'lion') ? 'Panthera leo' : 'Canis familiaris')
```

Ughhh! This escalates badly. Also, the ternary operator is only clean when the third operand is the default value (and not another conditional).

So, you are clever and you make a function:

```typescript

const binomalName = ((animal) => {
  switch (animal) {
    case 'cat':
      return 'Felis catus'
    case 'lion':
      return 'Panthera leo'
    case 'dog':
      return 'Canis familiaris'
  }
})(animal)
```

This is better since we have const and switch. But passing those parameters to make the function pure still looks weird.

## Usage

You can use [fn-code](https://www.npmjs.com/package/fn-code) npm package to:

### Set const conditionally (fn.one/fn.switch):

````typescript
import fn from 'fn-code'

const binomalName = fn.one(animal, {
  'cat': 'Felis catus'
  'lion': 'Panthera leo'
  'dog': 'Canis familiaris'
})
````

But what if you want to have a **default** value for binomialName when no condition is met? 
For that, you can use the third optional argument, passing `{ default: '' }`

````typescript
import fn from 'fn-code'

const binomalName = fn.one(animal, {
  'cat': 'Felis catus'
  'lion': 'Panthera leo'
  'dog': 'Canis familiaris'
}, { default: 'Species not found' })
````

But what if you want to pass a regex or a more specific comparison than `case == value` ?

No problem! You can define the switch as an array of **case functions** and values!

(These case functions must always return boolean)

````typescript
const binomalName = fn.one(animal, [
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
  ], { default: 'Species not found' })
 
````

Alternatively, if it feels more familiar you can use `fn.switch` instead, as it is an alias for `fn.one`.

## Testing

Run the test suit with `yarn test`.

## Contributing

If you want to contribute in any of theses ways:

- Give your ideas or feedback
- Question something
- Point out a problem or issue
- Enhance the code or its documentation
- Help in any other way

You can (and should) [open an issue](https://github.com/felipezarco/fn-code/issues/new) or even a [pull request](https://github.com/felipezarco/fn-code/compare)!

Thanks for your interest in contributing to this repo!

## Author

[Luiz Felipe Zarco](https://github.com/felipezarco) (felipezarco@hotmail.com)

## License

This code is licensed under the [MIT License](https://github.com/felipezarco/fn-code/blob/master/LICENSE). See the [LICENSE.md](https://github.com/felipezarco/fn-code/blob/master/LICENSE) file for more info.
