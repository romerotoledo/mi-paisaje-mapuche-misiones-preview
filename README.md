# Mi paisaje mapuche · Misiones ecológicas

Vista previa jugable de la gran misión **Conociendo el paisaje**. El jugador construye tres pisos ecológicos:

1. Paisaje andino: cerros, volcán, bosque de araucarias, cóndor y puma.
2. Paisaje de valle: lago, pastos, bosque nativo, humedal y fauna terrestre, acuática y voladora.
3. Paisaje costero: mar azul, arena, roqueríos, lobos marinos y peces saltando.

Las tarjetas muestran los nombres en mapudungun y español. Al tocarlas, la voz lee solamente el nombre mapudungun; la pronunciación sintética es una guía aproximada pendiente de validación por hablantes. El queltehue incorpora además un llamado de alerta sintetizado.

La música original combina sonidos sintetizados inspirados en timbres de kultrun y pifilca. No reproduce cantos ni melodías ceremoniales.

No requiere instalación, compilación ni backend. Funciona como sitio estático y conserva controles táctiles para Safari en iPhone y iPad.

Proyecto FONDECYT 1231127, dirigido por el Dr. Hugo Romero-Toledo, con identidad institucional de ANID y la Universidad Autónoma de Chile.

## Validación

```sh
node tests/validate.mjs
node --test tests/relations.test.cjs
```

Publicación de prueba: `https://romerotoledo.github.io/mi-paisaje-mapuche-misiones-preview/`.
