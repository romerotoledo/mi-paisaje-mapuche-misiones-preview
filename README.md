# Mi paisaje mapuche · Misiones ecológicas

Vista previa jugable con dos grandes misiones ecológicas.

En la **Gran misión 1 · Conociendo el paisaje**, el jugador construye por separado tres pisos ecológicos:

1. Paisaje andino: cerros, volcán, bosque de araucarias de copa aparasolada, cóndor y puma.
2. Paisaje de valle: lago, pastos, bosque nativo, humedal y fauna terrestre, acuática y voladora.
3. Paisaje costero: mar, agua dulce celeste, humedal, pasto, arena, roqueríos, lobo marino con cola animada, pez plateado saltando, gaviota y ballena.

En la **Gran misión 2 · Conectar la naturaleza**, los tres paisajes se construyen en un mismo tablero. La cordillera, el valle y la costa ocupan zonas distintas y una trayectoria de agua dulce permite observar su conexión con el mar.

El tablero aplica reglas ecológicas: cada animal solo puede ubicarse y desplazarse dentro de su piso correspondiente; la fauna silvestre no puede entrar al corral; y los demás animales mantienen distancia del puma y del zorro. Toda la fauna conserva movimientos ambientales suaves y las aves voladoras continúan realizando vuelos periódicos.

El paisaje también tiene ciclos ambientales intermitentes: una nube cruza el tablero dejando lluvia, el volcán libera bocanadas de humo y una brisa mueve suavemente los árboles.

Las tarjetas muestran los nombres en mapudungun y español. Al tocarlas, la voz lee solamente el nombre mapudungun; la pronunciación sintética es una guía aproximada pendiente de validación por hablantes. El queltehue incorpora además un llamado de alerta sintetizado.

La música original combina sonidos sintetizados inspirados en timbres de kultrun y pifilca. Ahora utiliza ocho frases y cuatro patrones rítmicos para reducir la repetición. No reproduce cantos ni melodías ceremoniales.

No requiere instalación, compilación ni backend. Funciona como sitio estático y conserva controles táctiles para Safari en iPhone y iPad.

Proyecto FONDECYT 1231127, dirigido por el Dr. Hugo Romero-Toledo, con identidad institucional de ANID y la Universidad Autónoma de Chile.

## Validación

```sh
node tests/validate.mjs
node --test tests/relations.test.cjs
```

Publicación de prueba: `https://romerotoledo.github.io/mi-paisaje-mapuche-misiones-preview/`.
