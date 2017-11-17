var nconf = require('nconf');

function Config() {
    nconf.argv().env("_");
    /**
     * Setting env to development for now !
     */
    //var environment = nconf.get("NODE:ENV") || "development";
    var environment = 'development';
    nconf.file(environment, "config/" + environment + ".json");
    nconf.file("default", "config/default.json");

    this.get = function(key) {
        return nconf.get(key);
    }
}

module.exports = new Config();

