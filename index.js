"use strict";

let libApiFactory = require("lib-metered-api-regulation");

let conf = require("./config/cmc.json");

let libApi = new libApiFactory({});

conf.ids.forEach((id) => {
  libApi.addTicker(id);
});

console.log(libApi);

libApi.start();

setTimeout(libApi.stop, 100000);
