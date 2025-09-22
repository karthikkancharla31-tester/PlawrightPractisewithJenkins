define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App;
    (function (App) {
        class User {
            constructor(name, age, gender) {
                this.name = name;
                this.age = age;
                this.gender = gender;
            }
        }
        let userList = [];
        function createUser(name, age, gender) {
            const u = new User(name, age, gender);
            userList.push(u);
            return u;
        }
        App.createUser = createUser;
        function getUsers() {
            return userList;
        }
        App.getUsers = getUsers;
    })(App || (App = {}));
});
//# sourceMappingURL=user-actions.js.map