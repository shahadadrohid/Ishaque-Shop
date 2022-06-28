function getInputValue(product, isIncreasing, price) {
    const inputValue = document.getElementById(product + '-input');
    let inputNumber = inputValue.value;
    if (isIncreasing == true) {
        inputNumber = parseInt(inputNumber) + 1;
    }
    else if (inputNumber > 0) {
        inputNumber = parseInt(inputNumber) - 1;
    }
    inputValue.value = inputNumber;

    // Update Price 
    const inputValuePrice = document.getElementById(product + '-price');
    inputValuePrice.innerText = inputNumber * price;

    // Call Total 
    updateTotal()
}

function updateValue(product) {
    console.log(product)
    const productTotal = document.getElementById(product);
    const productTotalNumber = parseInt(productTotal.value);
    console.log(productTotalNumber)
    return productTotalNumber;
}


function updateTotal() {
    // let productTotal = document.getElementById('atta1-input');
    // let productTotalNumber = parseInt(productTotal.value);
    let atta1Price = updateValue('atta1-input') * 300;

    // productTotal = document.getElementById('atta2-input');
    // productTotalNumber = parseInt(productTotal.value);
    let atta2Price = updateValue('atta2-input') * 280;

    subTotal = atta1Price + atta2Price;
    console.log(subTotal)

    document.getElementById('totalAmount').innerText = subTotal;
}



document.getElementById('atta1-plus-button').addEventListener('click', function () {
    getInputValue('atta1', true, 300)
})

document.getElementById('atta1-minus-button').addEventListener('click', function () {
    getInputValue('atta1', false, 300)
})

// Atta num 2 
document.getElementById('atta2-plus-button').addEventListener('click', function () {
    getInputValue('atta2', true, 280)
})
document.getElementById('atta2-minus-button').addEventListener('click', function () {
    getInputValue('atta2', false, 280)
})