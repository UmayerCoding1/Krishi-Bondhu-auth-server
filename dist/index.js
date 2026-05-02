"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const error_middleware_1 = require("./middlewares/error.middleware");
const auth_route_1 = __importDefault(require("./modules/auth/auth.route"));
const db_1 = require("./config/db");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
// import cropRouter from "./modules/crop/crop.route";
// import chatRoute from "./modules/chat/chat.route";
// import diseaseDetectionRouter from "./modules/disease/disease.route";
// import userRouter from "./modules/user/user.route";
const https_1 = __importDefault(require("https"));
// worker
// import './worker/sendEmailWorker';
// import './worker/saveChatWorker';
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    origin: ["http://localhost:3000", "https://krishi-bondhu-bd.vercel.app"],
    credentials: true,
}));
let pinggCount = 0;
setInterval(() => {
    https_1.default.get('https://krishi-bondhu-server1.onrender.com/', (res) => {
        console.log('Ping status:', res.statusCode, 'count:', pinggCount);
        pinggCount += 1;
    }).on('error', (err) => {
        console.log('Ping error:', err.message);
    });
}, 1000 * 60 * 10);
(0, db_1.connectDB)();
app.get("/", (req, res) => {
    res.send("Hello from TypeScript + Express 🚀 ");
});
app.use('/api/v1/auth', auth_route_1.default);
// app.use('/api/v1/users', userRouter);
// app.use('/api/v1/crop', cropRouter);
// app.use('/api/v1/chat', chatRoute);
// app.use('/api/v1/disease', diseaseDetectionRouter);
app.use(error_middleware_1.globalErrorHandle);
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map