"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("./user.service");
const route = [
    {
        path: "/",
        method: "get",
        escapeAuth: true,
        handler: [user_service_1.userController.fetchAll]
    },
    {
        path: "/",
        method: "post",
        escapeAuth: true,
        handler: [user_service_1.userController.create]
    },
    {
        path: "/:id",
        method: "get",
        handler: [user_service_1.userController.fetch]
    },
    {
        path: "/:id",
        method: "put",
        handler: [user_service_1.userController.update]
    },
    {
        path: "/:id",
        method: "delete",
        handler: [user_service_1.userController.fetchAll]
    },
    {
        path: "something",
        method: "get",
        handler: [user_service_1.userController.fetchAll]
    }
];
exports.default = route;
//# sourceMappingURL=index.js.map