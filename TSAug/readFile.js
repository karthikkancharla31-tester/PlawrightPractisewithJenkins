define(["require", "exports", "fs"], function (require, exports, fs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const content = (0, fs_1.readFileSync)('sample.txt', 'utf-8');
    console.log(content);
});
//# sourceMappingURL=readFile.js.map