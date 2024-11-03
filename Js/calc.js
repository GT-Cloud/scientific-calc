const handleButtonClick = (value) => {
    const display = document.getElementById('display');
    display.value += value; 
};

const clearDisplay = () => {
    document.getElementById('display').value = ''; // Clear 
};

const calculateResult = () => {
    const display = document.getElementById('display');
    try {
        
        let expression = display.value.replace(/π/g, Math.PI);
        const result = eval(expression); 
        display.value = result; 
    } catch (error) {
        display.value = 'Error'; 
    }
};

