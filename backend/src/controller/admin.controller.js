import { User } from "../models/user.model.js";


const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({});
        res
            .status(200)
            .json(users);
    } catch (error) {
        return next(error);
    }
}

const getAllSellers = async (req, res, next) => {
    try {
        const sellers = await User.find({ isSeller: true });
        res
            .status(200)
            .json(sellers);
    } catch (error) {
        return next(error);
    }
}


export { getAllUsers, getAllSellers };