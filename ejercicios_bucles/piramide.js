//En la consola del navegador utilizando Javascript, dibujar una piramide utilizando uno de los 3 ciclos vistos en clase.

let niveles = 10;


for (let altura =1; altura <= niveles; altura++){ //altura
    for (let espacio = 1; espacio<= niveles- altura; espacio++) {  //ancho espacio
         document.write("&nbsp");
    }
    for(let ast = 1; ast <= altura; ast++){ //Asteriscos
        document.write("*")
    }
document.write("<br/>")


}
