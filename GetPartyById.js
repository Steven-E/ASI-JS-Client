module.exports = async function GetParty(accessToken, id, baseUri) {
    var fetch = require("node-fetch");

    var myHeaders = new fetch.Headers();
    myHeaders.append("content-type", "application/x-www-form-urlencoded");
    myHeaders.append("Authorization", "Bearer " + accessToken);

    var requestOptions = {
        method: "get",
        headers: myHeaders,
        redirect: "follow",
    };

    var endpoint = "api/Party/" + id;
    var fetchUrl = baseUri + endpoint;

    try {
        var response = await fetch(fetchUrl, requestOptions);
        var result = await response.json();
        console.log("Party:\n" + JSON.stringify(result, null, 2));
    } catch (error) {
        console.log(error);
    }
};
