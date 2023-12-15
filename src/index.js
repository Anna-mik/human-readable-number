module.exports = function toReadable(number) {
    if (number === 0) {
        return "zero";
    }

    const ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const teens = [
        "",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    function convertToWords(num) {
        if (num === 0) {
            return "";
        } else if (num === 10) {
            return "ten";
        } else if (num < 10) {
            return ones[num];
        } else if (num < 20) {
            return teens[num - 10];
        } else {
            const digit = num % 10;
            const tenDigit = Math.floor(num / 10);
            return tens[tenDigit] + (digit !== 0 ? " " + ones[digit] : "");
        }
    }

    const hundredDigit = Math.floor(number / 100);
    const remainder = number % 100;

    let result = "";

    if (hundredDigit > 0) {
        result += ones[hundredDigit] + " hundred ";
    }

    if (remainder > 0) {
        result += convertToWords(remainder);
    }

    return result.trim();
};
