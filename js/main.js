const bienvenido= () =>{
    alert(' ¡Bienvenido a Corralon ML ' + nombre + '!'+ '\nEn esta sección Ud. encontrará los productos que comercializamos');
    }

class Material { // creo una clase para la seccion materiales
    constructor(codigo,nombre,precio){
        this.codigo=parseInt(codigo);
        this.nombre=nombre;
        this.precio=parseFloat(precio);
           
    }
    mostrarinfoMateriales(){
        return prompt ('Materiales'+'\nCodigo de producto :' + this.codigo + '\nNombre: ' + this.nombre + '\nPrecio: '+ this.precio);
    }
}
const materiales= [];
materiales.push(new Material(1, 'Cemento Loma Negra',825));
materiales.push(new Material(2, 'Cal Cacique ', 630 ));
materiales.push(new Material(3, 'Plasaticor',660));
materiales.push(new Material(4, 'Arena', 3400));
materiales.push(new Material(5, 'Piedra',4950));
materiales.push(new Material(6, 'Cascote', 2500));
materiales.push(new Material(7, 'Ceresita',680));

class Hierro { // creo una clase para la seccion hierros
    constructor(codigo,tamaño,precio){
        this.codigo=parseInt(codigo);
        this.tamaño=tamaño;
        this.precio=parseFloat(precio);
           
    }
    mostrarinfoHierros(){
        return prompt ('Hierros'+'\nCodigo de producto :' + this.codigo + '\nTamaño: ' + this.tamaño + '\nPrecio: '+ this.precio);
    }
}
const hierros= [];
hierros.push(new Hierro(8, '4,2',550));
hierros.push(new Hierro(9, '6 ', 800 ));
hierros.push(new Hierro(10, '8',1700));
hierros.push(new Hierro(11, '10', 1950));
hierros.push(new Hierro(12, '12',2600));

class Malla { //creo una clase para la seccion mallas
    constructor(codigo,tamaño,precio){
        this.codigo=parseInt(codigo);
        this.tamaño=tamaño;
        this.precio=parseFloat(precio);
           
    }
    mostrarinfoMallas(){
        return prompt ('Mallas'+'\nCodigo de producto :' + this.codigo + '\nTamaño: ' + this.tamaño + '\nPrecio: '+ this.precio);
    }
}
const mallas= [];
mallas.push(new Malla(13, '15x15',550));
mallas.push(new Malla(14, '15x25', 800 ));
mallas.push(new Malla(15, '10x15',1700));



let nombre= prompt(' Ingrese su nombre'); 
bienvenido();
for(const material of materiales){ //con el operador for of recorro las tres secciones
    alert(material.mostrarinfoMateriales());

}
for(const hierro of hierros){
    alert(hierro.mostrarinfoHierros());

}
for(const malla of mallas){
    alert(malla.mostrarinfoMallas());
}

