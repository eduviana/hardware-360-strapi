'use strict';

/**
 * disco-duro service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::disco-duro.disco-duro');
