const jwt = require("jsonwebtoken");

// creating employee JWT token.
const access = (employeeId: Number) => {

    let accessToken = jwt.sign({ ID: employeeId }, "accessToken", {
        expiresIn: "1h"
    });
    return accessToken;
}

export default access;