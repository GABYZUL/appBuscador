let buscador = document.getElementById("search");
let encontrados = document.getElementById("encontrados");
buscador.addEventListener("keyup", function () {
    let cont = 0;
    Array.from(document.getElementsByTagName("p")).forEach((elemen) => {
        const htmlOriginal = elemen.getAttribute("data-original-text") || elemen.innerText;

        if (elemen.innerText.includes(buscador.value) && buscador.value !== "") {
            const htmlNuevo = htmlOriginal.replaceAll(
                buscador.value,
                '<span style="background-color: yellow;">' + buscador.value + "</span>"
            );

            // Guarda el texto original en un atributo de datos para restaurarlo después
            if (!elemen.hasAttribute("data-original-text")) {
                elemen.setAttribute("data-original-text", htmlOriginal);
            }

            elemen.innerHTML = htmlNuevo;
            cont = cont + 1;
            encontrados.text =  cont +  " elementos ";
        } else {
            // Restaura el texto original cuando el buscador está vacío
            elemen.innerHTML = htmlOriginal;
            if (cont == 0){
                encontrados.text =  "";
            }else{
                encontrados.text =  cont +  " elementos ";
            }
            
        }
    });
});