"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const auth_route_1 = __importDefault(require("./modules/auth/auth.route"));
const app = (0, express_1.default)();
// Parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Application routes
app.get('/', (req, res) => {
    res.send('Welcome to the Auth Server!');
});
app.get('/users', async (req, res) => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await users.json();
    res.json(data);
});
app.use('/api/v1/auth', auth_route_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map