function pullAuthcode() {
    // Get the query string from the URL
    var queryString = window.location.search;

    // Split the query string into an array of key-value pairs
    var queryArray = queryString.substring(1).split("&");

    // Loop through the queryArray to find the 'code' parameter
    for (var i = 0; i < queryArray.length; i++) {
        var pair = queryArray[i].split("=");
        if (pair[0] == "code") {
            // Found the 'code' parameter, extract its value
            var code = pair[1];
            break;
        }
    }

    // The code variable now contains the authorization code
    console.log("Authorization code:", code);
    return code;
}

async function getToken(code) {
    const response = await fetch('http://127.0.0.1:3001/getToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ code })
    });
    token = await response.json();
    return token.access_token;
  }

// store the token in local storage
async function storeToken() {
    const token = await getToken(pullAuthcode());
    console.log(token);
    localStorage.setItem("token", token);
}

// tokens expire, they must be refreshed if an error is thrown
// this will be implemented later
