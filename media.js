function calcularMedia() {
    let n1 = +document.getElementById('nota1').value
    let n2 = +document.getElementById('nota2').value
    let n3 = +document.getElementById('nota3').value

    let mediaP = document.getElementById('media')
    let statusP = document.getElementById('status')

    if (!n1 || !n2 || !n3) {
        mediaP.textContent = 'Média: Preencha todas as notas.'
        statusP.textContent = 'Status: ---'
        return
    }

    let media = (n1 + n2 + n3) / 3

    mediaP.textContent = 'Média: ' + media.toFixed(2)
    statusP.textContent = media >= 7 ? 'Status: Aprovado!' : 'Status: Reprovado!'
}
function limparCampos() {
    document.getElementById('nota1').value = ''
    document.getElementById('nota2').value = ''
    document.getElementById('nota3').value = ''

    document.getElementById('media').textContent = 'Média:'
    document.getElementById('status').textContent = 'Status:'
}