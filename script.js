function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    const conversionType = document.getElementById('conversionType').value;
    let result = '';

    if (isNaN(temperatureInput)) {
        result = 'Please enter a valid number';
    } else {
        switch (conversionType) {
            case 'celsius':
                result = `${temperatureInput}°C is equal to ${temperatureInput * 9/5 + 32}°F, ${temperatureInput + 273.15}K, ${temperatureInput * 9/5 + 491.67}°R, and ${temperatureInput * 4/5}°Ré`;
                break;
            case 'fahrenheit':
                result = `${temperatureInput}°F is equal to ${(temperatureInput - 32) * 5/9}°C, ${(temperatureInput - 32) * 5/9 + 273.15}K, ${(temperatureInput - 32) * 5/9 + 491.67}°R, and ${(temperatureInput - 32) * 4/9}°Ré`;
                break;
            case 'kelvin':
                result = `${temperatureInput}K is equal to ${(temperatureInput - 273.15)}°C, ${(temperatureInput - 273.15) * 9/5 + 32}°F, ${(temperatureInput - 273.15) * 9/5 + 491.67}°R, and ${(temperatureInput - 273.15) * 4/5}°Ré`;
                break;
            case 'rankine':
                result = `${temperatureInput}°R is equal to ${(temperatureInput - 491.67) * 5/9}°C, ${(temperatureInput - 491.67) * 5/9 + 273.15}K, ${(temperatureInput - 491.67)}°F, and ${(temperatureInput - 491.67) * 5/4}°Ré`;
                break;
            case 'reaumur':
                result = `${temperatureInput}°Ré is equal to ${(temperatureInput * 5/4)}°C, ${(temperatureInput * 5/4) * 9/5 + 32}°F, ${(temperatureInput * 5/4) * 9/5 + 273.15}K, and ${(temperatureInput * 5/4) * 5/4 + 491.67}°R`;
                break;
            default:
                result = 'Invalid conversion type';
        }
    }

    document.getElementById('resultText').textContent = result;
}
