/// <reference path="validators.ts" />
/// <reference path="letters-validator.ts" />
/// <reference path="zipcode-validator.ts" />
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Now you can use the validators from multiple files
    let validators = {};
    validators["letters"] = new Validation.LettersValidator();
    validators["zipcode"] = new Validation.ZipCodeValidator();
    // Some samples to validate
    let strings = ["Hello", "98052", "101"];
    // Validate each
    strings.forEach(s => {
        for (let name in validators) {
            console.log(`"${s}" - ${validators[name].isValid(s) ? "matches" : "does not match"} ${name}`);
        }
    });
});
//# sourceMappingURL=main.js.map