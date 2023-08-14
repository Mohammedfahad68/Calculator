
const inputBox1 = document.getElementById('inputBox1');
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', handleButtonClick);
});
function handleButtonClick(event) {
    const buttonValue = event.target.textContent;
    
    if (buttonValue === 'Enter') {
      calculateResult();
    } else if (buttonValue === 'Clear') {
      inputBox.value = '';
      inputBox1.value = '';
    } else if (buttonValue === 'Del') {
      inputBox.value = '';
      inputBox1.value = inputBox1.value.slice(0, -1);
    }else if (buttonValue === '÷') {
       
        inputBox1.value += '÷';
    }else if (buttonValue === '×') {
      
        inputBox1.value += '×';
    }else if (buttonValue === '√') {
        
        inputBox1.value += '√';
    }else if (buttonValue === '%') {
       
        inputBox1.value += '%';
    }else if (buttonValue === '﹙') {
      
        inputBox1.value += '﹙';
    }else if (buttonValue === '﹚') {
       
        inputBox1.value += '﹚';
    } else {
      
      inputBox1.value += buttonValue;
    }
    
}
function calculateResult() {
    try {
      const expression = inputBox1.value.replace(/÷/g, '/').replace(/×/g, '*').replace(/√/g,'**0.5').replace(/%/g,'*100').replace(/﹙/g,'(').replace(/﹚/g,')');
      const result = eval(expression);
      inputBox.value = result;
    } catch (error) {
      inputBox.value = 'Error';
    }
}
   