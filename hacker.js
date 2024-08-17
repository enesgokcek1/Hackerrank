
// hackerrank if else example
function hackerButton() {
    let hackerInput = document.querySelector("#hackerrankIfElse").value
    let number = parseInt(hackerInput, 10);

    if (isNaN(number)) {
        document.getElementById('message').innerHTML = "Geçerli bir sayı girin.";
        return;
    }

    if (number % 2 === 0) {
        document.getElementById('message').innerHTML = number + " çift bir sayıdır.";
    } else {
        document.getElementById('message').innerHTML = number + " tek bir sayıdır.";
    }
}
