/// <reference path="validators.ts" />
namespace Validation {
  const lettersRegexp = /^[A-Za-z]+$/;

  export class LettersValidator implements StringValidator {
    isValid(s: string): boolean {
      return lettersRegexp.test(s);
    }
  }
}