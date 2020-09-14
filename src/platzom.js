// Esta funcion se encarga de darle la vuelta a una cadena.
function reverse( str ){  
    let vector = str.split(''); 
    vector = vector.reverse();
    const res = vector.join('');
    return res;
}
// Esta funcion se encarga de convertir todas las consonantes a mayúsculas
function minMay( str ){
    const size = str.length;
    let res = '';
    let capitalize = true;
    for( let i = 0; i <  size; i++ ){
        const char = str.charAt( i );
        res += capitalize ? char.toUpperCase() : char.toLowerCase();
        capitalize = !capitalize;
    }
    return res;
}
/**
 * SE agrega dos palabaras:
 * - export: Se encarga de especificar cuales son las funciones que se exprtaran del modulo, o que se publicaran del mismo, siendo accesibles externamente
 * - default: esto especifica cual es la funcion que será por defecto utilizada, solo una funcion debe ser por defecto
 */
export default function platzom( str ){ 
    let trans = str;
    
    // 1. Si la palabra ter mnia en 'ar' se remueven estar letras.
    if( str.toLowerCase().endsWith('ar')){
        trans = str.slice(0,-2);
    }
    // 2. Si la palabra termina en 'z' se añade 'pe' al final.
    if( str.toLowerCase().startsWith('z') ){
        trans = trans + 'pe'
    }
    // 3. si la palabra tiene 10 o mas letras se debe poner un '-' a la mitad
    const size = trans.length;
    if( size >= 10 ){
        const firstHalf = trans.slice(0, Math.round( size / 2  ));
        const secondtHalf = trans.slice(Math.round( size / 2 ));
        trans = firstHalf+"-"+secondtHalf;
    }
    //4. si la palabra original es un palindromo entonces als letras no vocales se cámbian de minusculas a mayúsculas
    if( str == reverse(str) ){
        trans = minMay(str);
    }
    return trans;
}

