/// <reference path="validators.ts" />
namespace Validation {
  const zipCodeRegexp = /^[0-9]+$/;

  export class ZipCodeValidator implements StringValidator {
    isValid(s: string): boolean {
      return zipCodeRegexp.test(s) && s.length === 5;
    }
  }
}