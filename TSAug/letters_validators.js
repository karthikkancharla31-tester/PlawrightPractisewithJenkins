define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /// <reference path="validators.ts" />
    var Validation;
    (function (Validation) {
        const lettersRegexp = /^[A-Za-z]+$/;
        class LettersValidator {
            isValid(s) {
                return lettersRegexp.test(s);
            }
        }
        Validation.LettersValidator = LettersValidator;
    })(Validation || (Validation = {}));
});
//# sourceMappingURL=letters_validators.js.map