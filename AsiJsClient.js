var server = require("./LocalServer.js");
var authorize = require("./GetToken.js");
var party = require("./GetParty101");
var secrets = require("./secrets.js");
const { baseUri } = require("./secrets.js");

server();

var accessToken = authorize(
    secrets.clientID,
    secrets.clientSecret,
    secrets.baseUri
);
console.log("access token: ", accessToken);

var partyId = 10001;
party(accessToken, partyId, baseUri);
