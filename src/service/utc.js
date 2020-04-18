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

service.getUTCInicio = function (fecha, format = false) {
  const formato = format || config.formatoUtc
  console.log(moment(fecha).tz(config.timezone).startOf('day').utc().format(formato))
  return moment(fecha).tz(config.timezone).startOf('day').utc().format(formato)
}

service.getUTCFinal = function (fecha, format = false) {
  const formato = format || config.formatoUtc
  console.log(moment(fecha).tz(config.timezone).endOf('day').utc().format(formato))
  return moment(fecha).tz(config.timezone).endOf('day').utc().format(formato)
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

service.getTodayAndHourUTC = function (format = false) {
  const formato = format || config.formatoLocal
  return moment().tz(config.timezone).utc().format(formato)
}

service.getTodayAndHourLocal = function (format = false) {
  const formato = format || config.formatoLocal
  return moment().tz(config.timezone).format(formato)
}

service.getYesterdayAndHourUTC = function (format = false) {
  const formato = format || config.formatoLocal
  return moment().subtract(1, 'days').tz(config.timezone).utc().format(formato)
}

service.getLocalTimeWithFormat = function (time) {
  return moment(time).format(config.formatoComun)
}

module.exports = service
