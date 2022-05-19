const isNotNaN = (value) => !isNaN(value)

const isNotNull = (value) => value !== null

const isNotUndefined = (value) => value !== undefined


const checkIsValidNumber = (value) => {
  const valid = [isNotNaN, isNotNull, isNotUndefined]
    .every(fn => fn(value))

  if (!valid) {
    throw new Error('Invalid number')
  }
}