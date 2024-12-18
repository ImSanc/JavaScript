"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const User = prisma.user;
function insertUser(username, password, firstName, lastName) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield User.create({ data: { username,
                password,
                firstName,
                lastName } });
        console.log(result);
    });
}
function updateUser(username_1, _a) {
    return __awaiter(this, arguments, void 0, function* (username, { firstName, lastName }) {
        const result = yield User.update({ data: { firstName,
                lastName },
            where: {
                username
            },
            select: {
                firstName: true,
                lastName: true
            } });
        console.log(result);
    });
}
updateUser('ImSanc', { firstName: 'tsshe', lastName: 'Flash' });
//insertUser("ImSanc", "sanchit@17","sanchit" , "mishra");
