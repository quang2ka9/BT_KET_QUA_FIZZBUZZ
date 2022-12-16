export class FizzBuzzTranslate {
    static isBetweenZeroAnd100(number: number): boolean {
        let betweenZeroAnd100 = number > 0 && number < 100;
        if (betweenZeroAnd100) return true
        return false;
    }


    static checkNumberIncludeThree(number) {
        let numberToString = String(number).split('')
        for (let i = 0; i < numberToString.length; i++) {
            if (numberToString[i] === '3') return true;
            else return false;
        }
    }

    static checkNumberIncludeFive(number) {
        let numberToString = String(number).split('')
        for (let i in numberToString) {
            if (numberToString[i] == '5') return true
            else return false
        }
    }

    static checkFizz(number: number) {
        let fizz = number % 3 == 0
        let includeThree = this.checkNumberIncludeThree(number) == true;
        let notBuzz = number % 5 !== 0;
        if (fizz || includeThree && notBuzz) return true
        else return false;
    }

    static checkBuzz(number: number): boolean {
        let buzz = number % 5 == 0;
        let includeFive = this.checkNumberIncludeFive(number) == true
        let notFizz = number % 3 !== 0;
        if (buzz || includeFive && notFizz) return true
        else return false;
    }

    static checkFizzBuzz(number: number): boolean {
        let fizzBuzz = number % 3 == 0 && number % 5 == 0;
        if (fizzBuzz) return true
        else return false;
    }

    static translateFizzBuzz(number: number) {
        let translate: string[] = [];
        let fizz = this.checkFizz(number) == true;
        let buzz = this.checkBuzz(number) == true;
        let fizzBuzz = this.checkFizzBuzz(number) == true;

        if (this.isBetweenZeroAnd100(number)) {
            console.log(fizz)
            console.log(buzz)
            console.log(fizzBuzz)
            if (fizzBuzz) return 'FizzBuzz';
            else if (buzz) return 'Buzz';
            else if (fizz) return 'Fizz';

            else {
                let numberToString = String(number).split('')
                for (let i in numberToString) {
                    switch (numberToString[i]) {
                        case '0':
                            translate.push('khong');
                            break;
                        case '1':
                            translate.push('mot');
                            break;
                        case '2':
                            translate.push('hai');
                            break;
                        case '3':
                            translate.push('ba');
                            break;
                        case '4':
                            translate.push('bon');
                            break;
                        case '5':
                            translate.push('nam');
                            break;
                        case '6':
                            translate.push('sau');
                            break;
                        case '7':
                            translate.push('bay');
                            break;
                        case '8':
                            translate.push('tam');
                            break;
                        case '9':
                            translate.push('chin');
                            break;
                    }
                }
            } return translate;
        }
    }
}
console.log(FizzBuzzTranslate.translateFizzBuzz(7));