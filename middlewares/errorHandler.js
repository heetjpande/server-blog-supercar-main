let message;
let errorHandler = (error, req, res, next) => {
    switch (error.name) {
        case "SequelizeValidationError":
            message = res.status(400).json({ message: `${error.errors[0].message}` });
            break;
        case "SequelizeUniqueConstraintError":
            message = res.status(400).json({ message: `${error.errors[0].message}` });
            break;
        case "failed login":
            message = res.status(401).json({ message: `Invalid email / password` });
            break;
        case "no title":
            message = res.status(400).json({ message: `Title is required` });
            break;
        case "no content":
            message = res.status(400).json({ message: `Content is required` });
            break;
        case "no imgUrl":
            message = res.status(400).json({ message: `Image URL is required` });
            break;
        case "Blog Not Found":
            message = res.status(404).json({ message: `Blog Not Found` });
            break;
        case "Comment Not Found":
            message = res.status(404).json({ message: `Comment Not Found` });
            break;
        case "Access Denied":
            message = res.status(403).json({ message: `Forbidden Access` });
            break;
        default:
            message = res.status(500).json({ message: "Internal server error." });
            break;
    }
};

module.exports = errorHandler;
