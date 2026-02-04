"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const ExpressAdapter_1 = __importDefault(require("./infra/http/ExpressAdapter"));
const RouteConfig_1 = __importDefault(require("./infra/http/RouteConfig"));
const connection_1 = require("./infra/database/mongo/connection");
const database = new connection_1.MongoConnection();
database.connect();
const expressAdapter = new ExpressAdapter_1.default();
new RouteConfig_1.default(expressAdapter);
expressAdapter.listen(3000);
