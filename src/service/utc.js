'use strict'

const moment = require('moment-timezone')
const config = require('../../config')
const service = {}

service.getUTCDiaActualInicio = function (format = false) {
  const formato = format || config.formatoUtc
  return moment().tz(config.timezone).startOf('day').utc().format(formato)
}

service.getUTCDiaActualFinal = function (format = false) {
  const formato = format || config.formatoUtc
  return moment().tz(config.timezone).endOf('day').utc().format(formato)
}

service.getUTCInicioMesActual = function (format = false) {
  const formato = format || config.formatoUtc
  return moment().tz(config.timezone).startOf('month').utc().format(formato)
}

service.getUTCFinalMesActual = function (format = false) {
  const formato = format || config.formatoUtc
  return moment().tz(config.timezone).endOf('month').utc().format(formato)
}

service.convertToUTC = function (fecha, format = false) {
  const formato = format || config.formatoUtc
  return moment(fecha).utc().format(formato)
}

service.convertToLocalZone = function (fecha, format = false) {
  const formato = format || config.formatoLocal
  return moment(fecha).tz(config.timezone).format(formato)
}

module.exports = service
