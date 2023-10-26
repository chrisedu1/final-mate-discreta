
const conjuntoA = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
const conjuntoB = ["8", "9", "10", "11"];

function calcularUnion() {
    const resultado = [...new Set([...conjuntoA, ...conjuntoB])];
    const resultadoElement = document.getElementById("resultado");

  
    const procedimiento = `Unión de Conjuntos A y B: ${conjuntoA.join(", ")} <strong class="union">∪</strong> ${conjuntoB.join(", ")} = ${resultado.join(", ")}`;
   
    
    resultadoElement.innerHTML = `
        <div class="resul"><h4>Procedimiento:</h4>
        <br>
        <p>Conjunto A: [${conjuntoA.join(", ")}]</p>
        <p>Conjunto B: [${conjuntoB.join(", ")}]</p>
        <p>${procedimiento}</p>
        <br>
        <p ><center><strong class="resultado">A U B [${resultado.join(", ")}]</p></strong></center> 
        <center><img class="imge" src="DIAGRAMA.png"></center</div>

    `;
    const solucionButton = document.getElementById("solucionButton");
    solucionButton.textContent = "Solucionado";

}