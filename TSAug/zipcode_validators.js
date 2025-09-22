define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /// <reference path="validators.ts" />
    var Validation;
    (function (Validation) {
        const zipCodeRegexp = /^[0-9]+$/;
        class ZipCodeValidator {
            isValid(s) {
                return zipCodeRegexp.test(s) && s.length === 5;
            }
        }
        Validation.ZipCodeValidator = ZipCodeValidator;
    })(Validation || (Validation = {}));
});
//# sourceMappingURL=zipcode_validators.js.map