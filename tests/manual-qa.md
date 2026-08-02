# Validación interactiva

Fecha: 2 de agosto de 2026.

## Movimiento periódico de seres vivos y árboles

- En cada una de las tres grandes misiones, colocar al menos un animal y una persona disponibles.
- Esperar entre 3 y 14 segundos: comprobar que primero gira o inclina la cabeza, después se inclina suavemente el cuerpo y finalmente vuelve al reposo.
- Confirmar que el gesto no interrumpe el vuelo del cóndor, halcón y gaviota, el salto del pez, el picoteo de la bandurria, el nado ni el desplazamiento manual.
- Colocar bosque nativo, araucarias y foye; comprobar que cada copa recibe una brisa suave intermitente y vuelve a quedar quieta.
- Activar “Reducir movimiento” en el sistema y comprobar que los gestos quedan desactivados.

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
- Cada Gran misión seleccionó su propio banco musical de seis frases y seis ritmos. Los golpes de tambor y las llamadas sintetizadas inspiradas en la trutruka usan pausas y ciclos variables; al cambiar de misión se detuvo la secuencia anterior antes de comenzar la nueva.
- La Gran misión 3 se abrió correctamente en 390 × 844 px y 1280 × 800 px, con sus dos submisiones y el contador general 0/3.
- Vida social del lof mostró las siete categorías y todos los elementos previos, además de dawe o quinoa. La franja de bosque que representa el medio natural quedó visible.
- Después de construir cuatro rukas de prueba apareció un Ngürü cerca del poblado. No pudo borrarse, se seleccionó tocando su figura y se desplazó hasta el borde natural; el progreso registró “1 animal devuelto”.
- Espacio público y ceremonial mostró Rewe, Kultrung, Kuel, Foye, Machi, Lonko, Ketru metawe y Meñkuwe. El jarro-pato se colocó realmente en el tablero y actualizó el progreso.
- La categoría social incluye Kona y Toki, ambos móviles, y la misión de vida social exige dos personas mayores para representar a los abuelos.
- El corral de empalizada acepta solamente gallinas y chiliweke; los animales silvestres no pueden ocuparlo y el malal comunitario se mantiene separado.
- Consola sin errores ni advertencias durante las pruebas de ambas submisiones, aparición silvestre, movimiento y colocación de cerámica.
- La Gran misión 3 muestra ahora tres submisiones en móvil; el panel sigue siendo desplazable y los botones conservan una altura táctil adecuada.
- Vida social se revisó nuevamente en 390 × 844 px: su paleta contiene familia, lonko, producción y elementos domésticos, pero no muestra kona ni toki.
- Intentar colocar maíz antes de agregar agua produjo el aviso esperado y no creó el cultivo.
- Espacio público sí mostró kona y toki en la categoría Social.
- En Vida social y Espacio público se programaron dos secuencias de nubes lluviosas múltiples. La segunda deja un charco celeste visible en una casilla libre, sin modificar el tipo de suelo ni el progreso de la misión.
- La condición de Vida social exige 18 tipos de elementos, dos abuelos, zorro y puma devueltos y todos los chiliweke dentro del corral. Espacio público exige sus 13 tipos y dos chemamüll, sin condiciones de proximidad adicionales.
- Se reprodujo la aparición del intruso en 390 × 844 px. El animal quedó fuera de la paleta y de la columna de controles; el primer toque mostró “Pangui/Ngürü seleccionado” aun cuando había una persona cerca. Igual que con los demás seres vivos, el segundo toque permite elegir una casilla libre y repetir el desplazamiento hasta llegar al borde natural.
- El primer temblor de Vida social y Espacio público queda programado entre 175 y 190 segundos después de iniciar cada etapa. El segundo ocurre entre 95 y 120 segundos después y usa una intensidad superior durante 5,8 segundos.
- Cada paisaje y submisión completados activa una celebración con mensaje, acorde y confeti; el cierre de cada Gran misión utiliza 90 piezas de confeti.
- Eltun y Chemamüll aparecen en Ceremoniales. Ambos se colocaron realmente en casillas vecinas y el progreso reconoció la relación `chemamüll/eltun` y el conteo 1/2.
- La representación del eltun utiliza montículos, vegetación y un borde de piedras, sin cruces genéricas; el chemamüll se representa como una figura antropomorfa tallada en madera.
- Paisaje completo abrió las siete categorías y mostró el progreso `0 de 7 categorías utilizadas`, sin restringir la biblioteca de elementos.
- Se activó la nueva composición y se dejó correr más de un ciclo de 4,12 segundos sin errores ni advertencias de consola.
- El registro de animaciones incluye todos los tipos de personajes humanos y aplica respiración, balanceo corporal y cambio mínimo de apoyo cuando están quietos.

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
