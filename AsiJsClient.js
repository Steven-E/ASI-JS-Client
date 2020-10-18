var server = require("./LocalServer.js");
var authorize = require("./GetToken.js");
var party = require("./GetParty101");
var secrets = require("./secrets.js");
const { baseUri } = require("./secrets.js");
var partyId = "10001";

async function sleep() {
    await setTimeout(() => {}, 20000);
}

server();
sleep().finally();

authorize(secrets.clientID, secrets.clientSecret, secrets.baseUri)
    .catch((error) => console.log("error: ", error))
    .finally();

sleep().finally();
