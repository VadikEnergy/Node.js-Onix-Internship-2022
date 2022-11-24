const middleware = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(422).json({
            message: 'Invalid request',
            details: error.message,
        });
    }

    return next();
}

module.exports = middleware;