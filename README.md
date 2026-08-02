# Mi paisaje mapuche · Misiones ecológicas

Vista previa jugable con tres grandes misiones ecológicas y comunitarias.

En la **Gran misión 1 · Conociendo el paisaje**, el jugador construye por separado tres pisos ecológicos:

1. Paisaje andino: cerros, volcán, bosque de araucarias de copa aparasolada, cóndor y puma.
2. Paisaje de valle: lago, pastos, bosque nativo, humedal y fauna terrestre, acuática y voladora.
3. Paisaje costero: mar, agua dulce celeste, humedal, pasto, arena, roqueríos, lobo marino con cola animada, pez plateado saltando, gaviota y ballena.

En la **Gran misión 2 · Conectar la naturaleza**, los tres paisajes se construyen en un mismo tablero. La cordillera, el valle y la costa ocupan zonas distintas y una trayectoria de agua dulce permite observar su conexión con el mar.

En la **Gran misión 3 · Crear el paisaje del lof** hay dos submisiones:

1. Vida social: ruka, fogón, metawe, corral de empalizada, cultivos de maíz, papa y dawe o quinoa, chiliweke, gallinas y la familia completa. Dos personas mayores representan a los abuelos. Un zorro o puma puede aparecer ocasionalmente junto al poblado; el jugador debe tocarlo y devolverlo manualmente a la franja de bosque que representa su medio natural.
2. Espacio público y ceremonial: rewe, kuel, malal comunitario, foye, kultrung, lonko, machi, kona, toki y dos formas cerámicas: ketru metawe y meñkuwe. Para completar la misión, el foye debe quedar junto al rewe y el kultrung cerca de la machi.

El tablero aplica reglas ecológicas: cada animal solo puede ubicarse y desplazarse dentro de su piso correspondiente en las misiones ecológicas; la fauna silvestre no puede entrar al corral; solo gallinas y chiliweke pueden ocuparlo; y los demás animales mantienen distancia del puma y del zorro. Toda la fauna muestra de manera continua respiración, balanceo o pequeños giros, mientras las aves voladoras conservan sus vuelos periódicos y las demás especies mantienen sus gestos particulares.

Las nuevas cerámicas se representan con descripciones prudentes basadas en referencias del Museo Chileno de Arte Precolombino y del Servicio Nacional del Patrimonio Cultural. La propuesta visual y lingüística continúa siendo un prototipo que debe validarse con especialistas y hablantes.

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
