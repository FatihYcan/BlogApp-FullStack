"use strict"

/* --- BLOG API NORMALİZEDEVICE --- */

const normalizeDevice = (userAgent = '') => {
    // 1. Temel markaları yakala
    const brand = userAgent.match(
        /(Asus|Dell|Lenovo|HP|Acer|MacBook|Surface|Samsung|iPhone|Xiaomi|Huawei|Pixel)/i
    )?.[0] || 'Generic'

    // 2. Model bilgisini basitçe çıkar (ilk parantez içi veya slash sonrası)
    const model = userAgent.match(/\(([^;)]+)\)|\/([^;\s]+)/i)?.[1]?.split(/\s+/)[0] || ''

    return `${brand} ${model}`.trim().replace(/\s{2,}/g, ' ')
}

//? Module Exports
module.exports = { normalizeDevice }