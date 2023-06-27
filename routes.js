const routes = require("next-routes")();

routes
  .add("/albums/new", "/albums/new")
  .add("/albums/:id", "/albums/show")
  ;

module.exports = routes;
