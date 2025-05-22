function calcularDesconto() {
    const preco = parseFloat(document.getElementById('preco').value);
    const desconto = parseFloat(document.getElementById('desconto').value);
    const resultado = document.getElementById('resultado');

    if (!isNaN(preco) && !isNaN(desconto)) {
        const valorDesconto = preco * (desconto / 100);
        const precoFinal = preco - valorDesconto;
        resultado.innerHTML = `Valor do desconto: R$ ${valorDesconto.toFixed(2)} <br> Preço final com desconto: R$ ${precoFinal.toFixed(2)}`;
    } else {
        resultado.textContent = 'Por favor, preencha todos os campos corretamente.';
    }
}