function fizzBuzz(num) {
    if (num % 15 === 0) {
        return 'fizzbuzz';
    } else if (num % 3 === 0) {
        return 'fizz';
    } else if (num % 5 === 0) {
        return 'buzz';
    } else {
        return num;
    }
}


function fizzBuzzer(countTo) {
    const results = [];
    for (let i =1; i <= countTo; i ++) {
        results.push(fizzBuzz(i));
    }
    return results
}

console.log(fizzBuzzer(15));

function generateDiv(el) {
    let fizzBuzzClass = '';
    if (typeof el === 'string') {
        fizzBuzzClass = el;
    }
    return `
    <div class="fizz-buzz-item ${fizzBuzzClass}">
        <span>${el}</span>
    </div>`
}

function generateResults(fizzbuzzSeq) {
    return fizzbuzzSeq.map(fs => generateDiv(fs));
}

function main() {
    $('#number-chooser').submit(e => {
        e.preventDefault();
        const countTo = $('#number-choice').val();
        $('#number-choice').val('');
        const fizzResults = fizzBuzzer(countTo);
        const html = generateResults(fizzResults);
        $('.js-results').empty();
        $('.js-results').append(html);
    });
}

$(main);

