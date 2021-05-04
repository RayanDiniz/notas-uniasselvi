function exibir() {
    const nota1 = document.getElementById("nota1").value;
    const nota2 = document.getElementById("nota2").value;
    const nota3 = document.getElementById("nota3").value;
    const nota4 = document.getElementById("nota4").value;
    const resultado = ((nota1*1.50)+(nota2*1.50)+(nota3*4.00)+(nota4*3.00)) / 10;
    const exibe = '\n\
    <h3>Sua nota é: </h3>\n\
    <h1>' + resultado + '</h1>\n\
    ';
    let root = document.getElementById("root").innerHTML;
    root = root + exibe;

    document.getElementById("root").innerHTML = root;
}
