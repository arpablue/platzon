# platzon
It is a language translator tools.
IT project is only for [test], and it not should be used for professional mode.
## Description

- Si la palabra termina con "ar", se le quitan esas 2 letras.
- Si la palabra inicia con Z, se le añade 'pe' al final.
- Si la palabra traducida tiene 10 o mças letras, se debe partir en dos por la mitad y unir con un gión en medio.
- Por último. si la palabra original es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando letras mayúsculas y minúsculas.

## Instalacion
```
npm install platzom
```
## Como usar

```
import platzom from 'platzon'

platzom('Programar');
platzom('Zorro');
platzom('Zarpar');
platzom('abecedario');
platzom('sometemos');
```

## Créditos
- [Augusto Flores] (https://nisitio)

##Licencia

[MIT] (https://opensource.org/licenses/MIT )
