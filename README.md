# Mi paisaje mapuche · Misiones ecológicas

Vista previa jugable con tres grandes misiones ecológicas y comunitarias.

En la **Gran misión 1 · Conociendo el paisaje**, el jugador construye por separado tres pisos ecológicos:

1. Paisaje andino: cerros, volcán, bosque de araucarias de copa aparasolada, cóndor y puma.
2. Paisaje de valle: lago, pastos, bosque nativo, humedal y fauna terrestre, acuática y voladora.
3. Paisaje costero: mar, agua dulce celeste, humedal, pasto, arena, roqueríos, lobo marino con cola animada, pez plateado saltando, gaviota y ballena.

En la **Gran misión 2 · Conectar la naturaleza**, los tres paisajes se construyen en un mismo tablero. La cordillera, el valle y la costa ocupan zonas distintas y una trayectoria de agua dulce permite observar su conexión con el mar.

En la **Gran misión 3 · Crear el paisaje del lof** hay tres submisiones:

1. Vida social: agua, bosque, ruka, fogón, metawe, corral de empalizada, maíz, papa, dawe o quinoa, pesca, chiliweke, gallinas y la familia completa. Dos personas mayores representan a los abuelos. Los cultivos y la pesca exigen agua cercana, la ruka exige árboles cercanos y el chiliweke solo puede ocupar pasto. Durante la etapa aparecen una vez un zorro y una vez un puma; ambos se seleccionan tocándolos y deben volver manualmente a la franja natural. La etapa termina al desplegar sus 18 tipos de elementos, reunir a los dos abuelos, devolver los dos intrusos y llevar todos los chiliweke al corral. Kona y toki permanecen ocultos en esta etapa.
2. Espacio público y ceremonial: rewe, kuel, malal comunitario, foye, kultrung, lonko, machi, kona, toki, ketru metawe, meñkuwe, eltun y dos chemamüll. La etapa termina cuando todos estos elementos están desplegados; kona y toki aparecen por primera vez aquí.
3. Paisaje completo: habilita todos los elementos del prototipo y propone conectar las siete categorías en un mismo tablero creativo.

El tablero aplica reglas ecológicas: cada animal solo puede ubicarse y desplazarse dentro de su piso correspondiente en las misiones ecológicas; la fauna silvestre no puede entrar al corral; solo gallinas y chiliweke pueden ocuparlo; y los demás animales mantienen distancia del puma y del zorro. Los 15 animales y los 9 personajes humanos ejecutan periódicamente una secuencia visible de cabeza, cuerpo y reposo. Las aves voladoras conservan sus vuelos y las demás especies mantienen además sus saltos, picoteos, nado o pequeños desplazamientos particulares.

Las nuevas cerámicas y piezas funerarias se representan con descripciones prudentes basadas en referencias del Museo Chileno de Arte Precolombino y del Servicio Nacional del Patrimonio Cultural. El eltun se presenta como un lugar de memoria y los chemamüll como figuras funerarias de madera, evitando tratarlos como decoración genérica. La propuesta visual y lingüística continúa siendo un prototipo que debe validarse con especialistas y hablantes.

El paisaje también tiene ciclos ambientales intermitentes: una nube cruza el tablero dejando lluvia, el volcán libera bocanadas de humo y una brisa suave mueve periódicamente los bosques nativos, araucarias y foye. En Vida social y Espacio público ocurre una vez por etapa un temblor suave y cruza un grupo de tres nubes lluviosas.

Las tarjetas muestran los nombres en mapudungun y español. Al tocarlas, la voz lee solamente el nombre mapudungun; la pronunciación sintética es una guía aproximada pendiente de validación por hablantes. El queltehue incorpora además un llamado de alerta sintetizado.

La nueva música original conserva sonidos sintetizados inspirados en timbres de kultrun y pifilca, pero utiliza una composición distinta: diez frases, cinco patrones rítmicos, registro más grave y otra cadencia. No reproduce cantos ni melodías ceremoniales.

Todos los personajes humanos tienen respiración, giro de cabeza y un cambio suave de apoyo corporal, además de conservar su desplazamiento manual por el tablero.

No requiere instalación, compilación ni backend. Funciona como sitio estático y conserva controles táctiles para Safari en iPhone y iPad.

Proyecto FONDECYT 1231127, dirigido por el Dr. Hugo Romero-Toledo, con identidad institucional de ANID y la Universidad Autónoma de Chile.

## Validación

```sh
node tests/validate.mjs
node --test tests/relations.test.cjs
```

Publicación de prueba: `https://romerotoledo.github.io/mi-paisaje-mapuche-misiones-preview/`.
