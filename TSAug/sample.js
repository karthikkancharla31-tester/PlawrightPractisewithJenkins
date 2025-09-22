/// <reference path="validators.ts" />
/// <reference path="letters-validator.ts" />
/// <reference path="zipcode-validator.ts" />
// Now you can use the validators from multiple files
var validators = {};
validators["letters"] = new Validation.LettersValidator();
validators["zipcode"] = new Validation.ZipCodeValidator();
// Some samples to validate
var strings = ["Hello", "98052", "101"];
// Validate each
strings.forEach(function (s) {
    for (var name_1 in validators) {
        console.log("\"".concat(s, "\" - ").concat(validators[name_1].isValid(s) ? "matches" : "does not match", " ").concat(name_1));
    }
});
