module.exports = {
  missingParams () {
    const errorObject = {
      status: 400,
      errorMensage: {
        err: 'Missing params, check the api manual'
      }
    }
    return errorObject
  },
  wrongParams () {
    const errorObject = {
      status: 400,
      errorMensage: {
        err: 'Wrong params, check the api manual'
      }
    }
    return errorObject
  }
}
