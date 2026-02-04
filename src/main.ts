import "dotenv/config";
import ExpressAdapter from "./infra/http/ExpressAdapter";
import RouteConfig from "./infra/http/RouteConfig";
import { MongoConnection } from "./infra/database/mongo/connection";

const database = new MongoConnection();
database.connect();

const expressAdapter = new ExpressAdapter()
new RouteConfig(expressAdapter)
expressAdapter.listen(3000)
