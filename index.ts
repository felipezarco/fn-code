interface IOptions {
  default: any
}

interface ISwitchObject {
  case: (variable: any) => boolean
  value: any
}

function one(variable: any, switchObjectOrArray: object | ISwitchObject[] | undefined, options?: IOptions) {
  if((typeof switchObjectOrArray === 'object' && switchObjectOrArray !== null)) {
    for (const [key, value] of Object.entries(switchObjectOrArray)) {
      if(key == variable) {
        return value
      }
    }
  } 
  if(Array.isArray(switchObjectOrArray) && switchObjectOrArray.length) {
    for(const switchObject of switchObjectOrArray) {
      if(typeof switchObject.case === 'function' && switchObject.case(variable)) {
        return switchObject.value 
      }
    }
  }
  return options?.default
}

const fn = { one, switch: one }

export default fn
