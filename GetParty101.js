module.exports = function GetParty(accessToken, id, baseUri) {
    var fetch = require("node-fetch");

    var myHeaders = new fetch.Headers();
    myHeaders.append("content-type", "application/x-www-form-urlencoded");
    myHeaders.append("Authorization", "Bearer " + accessToken);

    var requestOptions = {
        method: "get",
        headers: myHeaders,
        redirect: "follow",
    };

    var endpoint = "api/Party/10001";
    var fetchUrl = baseUri + endpoint;

    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

    fetch(fetchUrl, requestOptions)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
};
