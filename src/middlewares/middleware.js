import jwt from 'jsonwebtoken';
import CryptoJS from 'crypto-js'

function verifyJWT(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'No token provided.' });

    const [scheme, token] = authHeader.split(' ');

    jwt.verify(token, process.env.SECRET, function (err, decoded) {
        if (err) return res.status(401).json({ message: 'Não autorizado' });

        req.userId = decoded.id;
        req.role = decoded.role;
        req.employeeId = decoded.employeeId;
        req.full_name = decoded.full_name;
        next();
    });
}

function decryptBody(req, res, next){
    try {
        var key = process.env.SECRET;
        var bytes = CryptoJS.AES.decrypt(req.body.jsonCrypt, key);
        const decryptd = bytes.toString(CryptoJS.enc.Utf8);
        const json = JSON.parse(decryptd);
        req.body = json;
        next();
    } catch (eror) {
        next();
    }
}

export default { verifyJWT, decryptBody };