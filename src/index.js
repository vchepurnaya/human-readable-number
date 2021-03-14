module.exports = function toReadable(number) {
    let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven','twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    let decimals = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let firstNum = Math.floor(number / 10);
    let secondNum = number % 10;
    let hundred = Math.floor(number / 100);
    let decimalNum = Math.floor(number % 100 / 10);

    if (number < 21) {
        return numbers[number];
    } else {
        if (number / 100 < 1) {
            if (number % 10 === 0) {
                return decimals[firstNum - 2];
            } else {
                return `${decimals[firstNum - 2]} ${numbers[secondNum]}`
            }
        } else {
            if (number % 100 === 0) {
                return `${numbers[hundred]} hundred`
            } else if (number % 100 < 21) {
                return `${numbers[hundred]} hundred ${numbers[number % 100]}`
            } else if (number % 10 === 0) {
                return `${numbers[hundred]} hundred ${decimals[decimalNum - 2]}`
            } else {
                return `${numbers[hundred]} hundred ${decimals[decimalNum - 2]} ${numbers[secondNum]}`
            }
        }
    }
}
