
function getInputHandler (id, isIncrement) {
    const CountInput = document.getElementById(id + 'Input');
    const CountIncrementNumber = parseInt(CountInput.value);
    let InputCountValue = CountIncrementNumber;
    if(isIncrement == true) {
        InputCountValue = CountIncrementNumber + 1;
    }
    if(isIncrement == false && CountIncrementNumber > 0) {
        InputCountValue = CountIncrementNumber - 1;
    }
    CountInput.value = InputCountValue;
    CalculateSubTotal ()
}

function CalculateSubTotal () {
    const getFirstInputNumber = getInputValue('getFirstInput');
    const getEconomyInputNumber = getInputValue('getEconomyInput')
    const SubTotal = getFirstInputNumber * 150 + getEconomyInputNumber * 100;
    document.getElementById('subTotal').innerText = SubTotal;
    const tax = Math.floor(SubTotal * 0.10);
    document.getElementById('tax').innerText = tax;
    const granTotal = SubTotal + tax;
    document.getElementById('grand-total').innerText = granTotal;
}

function getInputValue (inputId) {
    const getFirstInput = document.getElementById(inputId).value;
    const getFirstInputNumber = parseInt(getFirstInput);
    return getFirstInputNumber ;
} 
