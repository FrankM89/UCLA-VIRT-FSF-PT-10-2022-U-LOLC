// TODO: Complete the 'counter' function below.
function counter() {
    let count = 1;

    return {
        increment: function () {
            return ++count;
        },
    };
}

const studentCounter = counter();

studentCounter.increment();


module.exports = counter;
