const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            message: "Access denied. No authentication token provided."
        });
    }

    next();
};

export default authMiddleware;