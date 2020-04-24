module.exports = {
  missimParams () {
    const status = 400
    const errorSring = 'Missing params, check the api manual'
    return { status, errorSring }
  }
}
