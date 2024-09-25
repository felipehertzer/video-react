import '@testing-library/jest-dom'

// Global utility function to create spy objects, if needed
global.createSpyObj = function (baseName, methodNames) {
  const obj = {}

  methodNames.forEach((method) => {
    obj[method] = jest.fn() // Create Jest mock functions
  })

  return obj
}
