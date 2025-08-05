   function checkEvenOdd() {
      const num = parseInt(document.getElementById('evenOddInput').value);
      const result = (num % 2 === 0) ? `${num} is Even` : `${num} is Odd`;
      document.getElementById('evenOddOutput').innerText = result;
    }

    function reverseString() {
      const text = document.getElementById('reverseInput').value;
      const reversed = text.split('').reverse().join('');
      document.getElementById('reverseOutput').innerText = `Reversed: ${reversed}`;
    }

    function factorial() {
      const num = parseInt(document.getElementById('factorialInput').value);
      let result = 1;
      for (let i = 2; i <= num; i++) result *= i;
      document.getElementById('factorialOutput').innerText = `Factorial: ${result}`;
    }

    function findMax() {
      const input = document.getElementById('arrayInput').value;
      const arr = input.split(',').map(Number);
      const max = Math.max(...arr);
      document.getElementById('maxOutput').innerText = `Max Value: ${max}`;
    }

    function calculator() {
      const a = parseFloat(document.getElementById('calcA').value);
      const b = parseFloat(document.getElementById('calcB').value);
      const op = document.getElementById('calcOp').value;

      let result;
      switch (op) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/': result = b !== 0 ? a / b : "Cannot divide by zero"; break;
        default: result = "Invalid operator";
      }

      document.getElementById('calcOutput').innerText = `Result: ${result}`;
    }