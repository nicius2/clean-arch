import Http from "./Http";

export default class RouteConfig {
     constructor(http: Http) {
          http.on("/", "get", async function (params: any, body: any) {
               return { message: "Hello World!" }
          })
     }
}    