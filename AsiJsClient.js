var server = require("./LocalServer.js");
var authorize = require("./GetToken.js");
var party = require("./GetPartyById");
var secrets = require("./secrets.js");
const { baseUri } = require("./secrets.js");
var partyId = "55fab524-9e8f-4c81-8057-01ae34eb447a";

async function sleep() {
    await setTimeout(() => {}, 20000);
}

server();
sleep().finally();

authorize(secrets.clientID, secrets.clientSecret, secrets.baseUri)
    .catch((error) => console.log("error: ", error))
    .finally();

sleep().finally();
