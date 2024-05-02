const mongoose = require("mongoose");

module.exports = () => {
    return async (req, res, next) => {
        const { id } = req.params;
        if (!id) {
            return next();
        }
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid id" });
        }
    }
}