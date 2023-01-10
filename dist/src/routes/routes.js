"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("../controller/controller"));
const routes = (0, express_1.Router)();
routes.get('/healthcheck', controller_1.default.healthcheck);
routes.get('/country/:name', controller_1.default.getCountry);
routes.get('/country', controller_1.default.getAllCountry);
exports.default = routes;
//# sourceMappingURL=routes.js.map