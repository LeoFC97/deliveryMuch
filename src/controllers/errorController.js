module.exports = {
  missingParams () {
    const error = {
      status: 400,
      errorMensage: {
        err: 'Missing params, check the api manual'
      }
    }
    return error
  }
}
