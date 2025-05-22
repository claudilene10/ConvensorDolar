function converter() {
    const valorDolar = parseFloat(document.getElementById("valorDolar").value);
    const taxaCambio = 5.69;
  
    if (isNaN(valorDolar)) {
      document.getElementById("resultado").textContent = "Por favor, digita um valor válido.";
      return;
    }
  
    const valorReal = valorDolar * taxaCambio;
    document.getElementById("resultado").textContent = 
      `US$ ${valorDolar.toFixed(2)} = R$ ${valorReal.toFixed(2)}`;
  }