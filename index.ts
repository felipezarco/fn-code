
interface IOptions {
  default: any
}

function one(variable: any, object: object | undefined, options?: IOptions) {
  if((typeof object === 'object' && object !== null)) {
    for (const [key, value] of Object.entries(object)) {
      if(key == variable) {
        return value
      }
    }
  } 
  return options?.default
}

export default {
  one,
  switch: one
}
