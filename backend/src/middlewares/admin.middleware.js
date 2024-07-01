import errorHandler from "../utils/ErrorHandler.js"
import { User } from "../models/user.model.js"

export const verifyAdmin = async (req, res, next) => {
    const { userId } = req.body

    if (!userId) {
        return next(errorHandler(400, "User ID is required"))
    }

    try {
        const user = await User.findById(userId)

        if (user && user.isAdmin) {
            next();
        } else {
            return next(errorHandler(403, "Access denied: Admins only"))
        }

    } catch (error) {
        return next(error)
    }
};

