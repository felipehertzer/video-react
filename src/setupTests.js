import { configure } from 'enzyme'
import Adapter from '@cfaester/enzyme-adapter-react-18'

configure({ adapter: new Adapter() })

global.createSpyObj = (baseName, methodNames) => {
  const obj = {}

  for (let i = 0; i < methodNames.length; i += 1) {
    obj[methodNames[i]] = jest.fn()
  }

  return obj
}
