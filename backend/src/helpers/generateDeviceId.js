"use strict"

/* --- BLOG API DEVICE --- */

const crypto = require('crypto');
const { normalizeDevice } = require('./normalizeDevice')

const generateDeviceId = (req, res) => {

    if (!req || !req.ip || !req.socket || !req.headers) {
        throw new Error('Invalid request object')
    }

    const userIp = req.ip.replace(/^::ffff:/, '').split('.').slice(0, 3).join('.') + '.0'
    const userPort = req.socket.remotePort || 0
    const secCHUA = req.headers['sec-ch-ua'] || 'unknown'
    const userAgent = req.headers['user-agent'] || 'unknown_agent'

    let deviceId = req.cookies?.deviceId

    if (!deviceId) {
        deviceId = crypto.createHash('sha256').update(`${userIp}:${userPort}_${secCHUA}_${userAgent}`).digest('hex')

        res.cookie('deviceId', deviceId, { maxAge: 365 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'Lax' })
    }

    return { deviceId, deviceInfo: normalizeDevice(userAgent) }
}

module.exports = generateDeviceId