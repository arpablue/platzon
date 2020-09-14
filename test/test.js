const { assert } = require('chai');

const expect = require('mocha').expect; // cargamos el modulo de moca
const platzom = require('..').default; // cargamos el modulo de plazom, que se encuentra en el archivo package.json un nivel mas arriba

// Esta funcion se encarga de recibir 2 argumentos, el nombre del mdulo a testear.
// y el una funcion que incluye a todos los tests

describe(
        '#platzom', // Este es el modulo aser testeado 
        function (){ // Esta funcion contiene atodos los test.
            // para ejecutar los test 
            it(
                'Si la palabra termina con ar, se le quitan esas 2 letras', //el titulo del test
                function(){ // implementacion del test
                    
                    const exp = 'Program';
                    const target = 'Programar';
                    const cur = platzom( target ); //ejecutamos la funcion
                    
                    if (exp.localeCompare( cur ) != 0 ){
                        assert.fail( `...Result: exp[${ exp }] cur[${ cur }]` );
                    }
                 
                }
            );

            it(
                'Si la palabra inicia con Z, se le añade pe al final', //el titulo del test
                function(){ // implementacion del test
                    
                    const exp = 'Zorrope';
                    const target = 'Zorro';
                    const cur = platzom( target ); //ejecutamos la funcion
                    
                    if (exp.localeCompare( cur ) != 0 ){
                        assert.fail( `...Result: exp[${ exp }] cur[${ cur }]` );
                    }
                 
                    
                    const exp2 = 'Zarppe';
                    const target2 = 'Zarpar';
                    const cur2 = platzom( target2 ); //ejecutamos la funcion
                    
                    if (exp2.localeCompare( cur2 ) != 0 ){
                        assert.fail( `...Result: exp[${ exp2 }] cur[${ cur2 }]` );
                    }
                 

                }
            );

            it(
                'Si la palabra traducida tiene 10 o mças letras, se debe partir en dos por la mitad y unir con un gión en medio', //el titulo del test
                function(){ // implementacion del test

                    
                    const exp = 'abece-dario';
                    const target = 'abecedario';
                    const cur = platzom( target ); //ejecutamos la funcion
                    
                    if (exp.localeCompare( cur ) != 0 ){
                        assert.fail( `...Result: exp[${ exp }] cur[${ cur }]` );
                    }
                 
                }
            );

            it(
                'Por último. si la palabra original es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando letras mayúsculas y minúsculas      ', //el titulo del test
                function(){ // implementacion del test
                    
                    const exp = 'SoMeTeMoS';
                    const target = 'sometemos';
                    const cur = platzom( target ); //ejecutamos la funcion
                    
                    if (exp.localeCompare( cur ) != 0 ){
                        assert.fail( `...Result: exp[${ exp }] cur[${ cur }]` );
                    }

                }
            );
        }
);