// Client-side validation logic
document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the form data
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight)) {
        alert('Please enter valid numeric values for height and weight.');
    } else {
        // Perform BMI calculation logic here
        const bmi = calculateBMI(height, weight);
        const resultMessage = getResultMessage(bmi);

        // Log values for debugging
        console.log('BMI:', bmi);
        console.log('Result Message:', resultMessage);

        // Display the result on the page
        document.getElementById('result').innerHTML = `Your BMI is: ${bmi.toFixed(2)}. ${resultMessage}`;
    }
});

// Helper functions
function calculateBMI(height, weight) {
    return weight / ((height / 100) * (height / 100));
}

function getResultMessage(bmi) {
    let resultMessage = '';

    if (bmi < 18.5) {
        resultMessage = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultMessage = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        resultMessage = 'Overweight';
    } else {
        resultMessage = 'Obese';
    }

    return resultMessage;
}
