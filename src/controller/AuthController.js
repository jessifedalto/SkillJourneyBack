export default class AuthController {
    static async register(req, res) 
    {
        var key = process.env.SECRET;

        
    }

    static async login(req, res)
    {
        
    }

    static async verifyJWT(req, res, next)
    {
        // const authHeader = req.headers.authorization;
        // if (!authHeader) return res.status(401).json({ message: 'No token provided.' });

        // const [scheme, token] = authHeader.split(' ');

        // jwt.verify(token, process.env.SECRET, function(err, decoded) {
        //     if (err) return res.status(401).json({ message: 'Unauthorized' });

        //     req.userId = decoded.id;
        //     req.authorId = decoded.author;
        //     req.username = decoded.name;
        //     next();
        // });
    }
}
