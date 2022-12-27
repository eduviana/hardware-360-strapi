'use strict';

/**
 * impresora service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::impresora.impresora');
