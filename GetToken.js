module.exports = function getAuthToken(clientID, clientSecret, baseUri) {
    var fetch = require("node-fetch");
    const { URLSearchParams } = require("url");

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

    fetch(fetchUrl, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            accessToken = result.access_token;
        })
        .catch((error) => console.log("error", error));

    return accessToken;
};
