"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
    throw new Error("Please define MONGODB_URI");
}
// global cache
let cached = global.mongoose;
if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}
const connectDB = async () => {
    if (cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        console.log("Connecting to MongoDB...");
        cached.promise = mongoose_1.default.connect(MONGODB_URI).then((mongoose) => {
            console.log("✅ MongoDB connected");
            return mongoose;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
};
exports.connectDB = connectDB;
//# sourceMappingURL=db.js.map