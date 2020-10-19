module.exports = async function getAuthToken(clientID, clientSecret, baseUri) {
    var fetch = require("node-fetch");
    const { URLSearchParams } = require("url");
    var party = require("./GetPartyById");

    var myHeaders = new fetch.Headers();
    myHeaders.append("content-type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "password");
    urlencoded.append("username", clientID);
    urlencoded.append("password", clientSecret);

    var requestOptions = {
        method: "post",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow",
    };

    var endpoint = "token";
    var fetchUrl = baseUri + endpoint;

    var accessToken = "";
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

    try {
        var response = await fetch(fetchUrl, requestOptions);
        var result = await response.json();
        accessToken = result.access_token;
    } catch (error) {
        console.log(error);
    }

    party(accessToken, "55fab524-9e8f-4c81-8057-01ae34eb447a", baseUri);
};
