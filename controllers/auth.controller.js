import mongoose from "mongoose";

export const signIn = async (req, res, next) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try{

    } catch{

    }
};

export const signUp = async (req, res, next) => {

};

export const signOut = async (req, res, next) => {

};
