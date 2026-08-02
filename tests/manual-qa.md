# Validación interactiva

Fecha: 2 de agosto de 2026.

Se ejecutó `index.html` desde un servidor HTTP local y se controló la página en un navegador Chromium sin modificar el código de producción.

## Comprobado

- Carga inicial y consola sin errores de JavaScript.
- Vista vertical de teléfono: 390 × 844 px.
- Vista horizontal de teléfono/tablet: 844 × 390 px.
- Vista vertical de tablet: 768 × 1024 px.
- Créditos y logotipos de ANID, FONDECYT 1231127, Dr. Hugo Romero-Toledo y Universidad Autónoma visibles.
- Desplazamiento horizontal de la paleta, giro por arrastre y controles de giro y zoom.
- Las siete categorías abren correctamente.
- Sociales contiene solo Mujer, Hombre, Niña, Niño y Persona mayor.
- Ceremoniales contiene Machi, Lonko, Rewe, Kultrung, Kuel y Foye.
- Selección y solicitud de pronunciación de las 33 piezas disponibles, además del encendido y apagado de la música, sin errores de consola.
- Misión 1 completada mediante colocación real de ambientes y tres especies silvestres.
- Misión 2 completada mediante colocación real de ruka, personas, cultivo, animal doméstico, malal y pieza ceremonial.
- Valoraciones cualitativas de las dos misiones visibles y sin bloquear la construcción.
- Borrar una pieza, deshacerla y recuperar la evaluación de misión.
- Borrar y restaurar una pieza animada sin referencias activas ni errores posteriores.
- Reiniciar después de una escena cargada y volver a Misiones 0/2.
- Prueba de carga visual con más de 10 árboles, 10 animales, 10 cultivos, 5 fogones, varias piezas de malal y los seis tipos ceremoniales. La escena siguió respondiendo y no registró errores.
- Los mensajes ecológicos son breves, no modales y usan cooldown.
- Prototipo de movimiento probado en vista móvil de 390 × 844 px: un chiliweke fue seleccionado tocando su figura, recorrió una ruta y quedó visible dentro del malal.
- Un niño fue seleccionado, recorrió el tablero evitando el agua y volvió a la entrada de la ruka.
- Los anillos de selección y destino, el estado “va en camino” y los mensajes de llegada se mostraron correctamente.
- La consola de la página permaneció sin errores ni advertencias durante los desplazamientos. Los únicos mensajes ajenos observados provenían de una extensión del navegador y no de la página.
- La nueva frase musical de kultrun y pifilca sintetizados se activó después de una interacción, completó más de un ciclo y pudo apagarse y encenderse nuevamente sin errores de la página.
- La Gran misión 3 se abrió correctamente en 390 × 844 px y 1280 × 800 px, con sus dos submisiones y el contador general 0/3.
- Vida social del lof mostró las siete categorías y todos los elementos previos, además de dawe o quinoa. La franja de bosque que representa el medio natural quedó visible.
- Después de construir cuatro rukas de prueba apareció un Ngürü cerca del poblado. No pudo borrarse, se seleccionó tocando su figura y se desplazó hasta el borde natural; el progreso registró “1 animal devuelto”.
- Espacio público y ceremonial mostró Rewe, Kultrung, Kuel, Foye, Machi, Lonko, Ketru metawe y Meñkuwe. El jarro-pato se colocó realmente en el tablero y actualizó el progreso.
- La categoría social incluye Kona y Toki, ambos móviles, y la misión de vida social exige dos personas mayores para representar a los abuelos.
- El corral de empalizada acepta solamente gallinas y chiliweke; los animales silvestres no pueden ocuparlo y el malal comunitario se mantiene separado.
- Consola sin errores ni advertencias durante las pruebas de ambas submisiones, aparición silvestre, movimiento y colocación de cerámica.

## Validado automáticamente

- Sintaxis del JavaScript embebido.
- Recursos remotos exclusivamente mediante HTTPS.
- Recursos locales presentes.
- Listeners `touchstart`, `touchmove`, `touchend` y `touchcancel` sin `setPointerCapture`.
- Controles de al menos 44 px y `viewport-fit=cover`.
- Relaciones espaciales, distancia euclidiana, organización ceremonial y protección por malal.
- Reutilización de geometrías y materiales fuera del ciclo de animación.
- Pausa por pestaña oculta, reducción de movimiento y límite de pixel ratio.

## Pendiente en dispositivos físicos

- Confirmar pellizco multitáctil, zonas seguras y cambio de orientación en Safari sobre iPhone e iPad reales.
- Confirmar sesiones largas y presión de memoria en un iPhone de gama baja; una prueba Chromium de escritorio no puede certificar que Safari móvil nunca cierre la pestaña.
- Comprobar Android y tablets físicas.
- Simular red lenta y confirmar el comportamiento de la caché del CDN después de la primera carga.
- Escuchar la voz elegida en Safari, Chrome, iPhone, iPad y Android: el juego lee ahora el texto visible sin separación silábica y prioriza la voz española más natural disponible, pero el resultado depende de las voces instaladas.
- Validar pronunciaciones con hablantes de mapuzugun. No hay grabaciones para Foye o Lonko; una voz española no garantiza los sonidos auténticos y la ausencia de archivos de audio no produce errores.
