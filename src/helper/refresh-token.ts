import jwt from 'jsonwebtoken';

const refresh = (employeeId: Number) => {
    let refreshToken = jwt.sign({ ID: employeeId }, "refreshToken", {
        expiresIn: "365d"
    });
    return refreshToken
}

export default refresh;