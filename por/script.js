function displayValues() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const nacionalidade = document.getElementById('nacionalidade').value;

    // Exibindo os valores na seção de resultados
    document.getElementById('displayNome').textContent = nome;
    document.getElementById('displayIdade').textContent = idade;
    document.getElementById('displayNacionalidade').textContent = nacionalidade;
    
    // Mostrando a seção de resultados
    document.getElementById('results').style.display = 'block';
}