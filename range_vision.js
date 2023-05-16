function range_vision(num) {
    const digits = num.toString().split('').map(Number); // convierte el número en un array de dígitos
    let minValue = Infinity; // valor mínimo de visión 
    let primerValorMin = false; // indica si hay algún dígito 1 con el valor mínimo de visión
  
    for (let i = 0; i < digits.length; i++) {
      const range = digits[i];
      let visionValue = 0;
      for (let j = i - range; j <= i + range; j++) {
        if (j !== i && j >= 0 && j < digits.length) {
          visionValue += digits[j];
        }
      }
      if (digits[i] === 1 && visionValue <= minValue) {
        minValue = visionValue;
        hasOneWithMinValue = true;
      } else if (visionValue < minValue) {
        minValue = visionValue;
        primerValorMin = false;
      }
    }
  
    return primerValorMin;
  }
  console.log(range_vision(34183));