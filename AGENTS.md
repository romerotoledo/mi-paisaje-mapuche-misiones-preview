# AGENTS.md — Mi paisaje mapuche

Contexto para cualquier agente (Codex u otra IA) que trabaje este repositorio.

## Qué es

Juego educativo 3D en el navegador (vóxeles estilo Minecraft, con Three.js) donde
niños arman el paisaje mapuche precolombino (Wallmapu / Araucanía) y aprenden
mapuzugun. Proyecto FONDECYT 1231127, dirigido por el Dr. Hugo Romero-Toledo,
con identidad institucional de ANID y la Universidad Autónoma de Chile.

El objetivo pedagógico es **que los niños aprendan mapuzugun jugando**, no un
sandbox genérico. Hay tres Grandes misiones (pisos ecológicos, conexión de
paisajes, y construcción del lof en tres submisiones).

## Cómo correr y validar

No hay dependencias de npm que instalar. Three.js está vendorizado en
`assets/vendor/three.min.js` (r128 / npm 0.128.0), así que renderiza offline.

- Servir para verlo (Three.js necesita servidor, no `file://`):
  `python3 -m http.server 8000` y abrir `http://localhost:8000/`.
- Tests: `npm test` (corre ambos), o por separado:
  - `node tests/validate.mjs`
  - `node --test tests/relations.test.cjs`

Node >= 18 (se usa `node --test` y `node:test`).

## Mapa de archivos

- `index.html` — **casi todo el juego vive aquí** (~1600 líneas: render, estado,
  movimiento, evaluación de misiones, audio, clima). Un solo `<script>` inline.
- `relations.js` — único módulo extraído y con tests de conducta reales
  (distancias, hábitats, depredadores, relaciones ecológicas). Es UMD/CommonJS:
  se carga por `<script>` en el navegador y por `require()` en los tests.
- `tests/validate.mjs`, `tests/relations.test.cjs`, `tests/manual-qa.md`.
- `assets/institucional/` — logos ANID y U. Autónoma. `assets/vendor/` — three.js.
- `.github/workflows/pages.yml`, `.nojekyll` — despliegue a GitHub Pages.

## Advertencias importantes antes de editar

### 1. `validate.mjs` es un test de SNAPSHOT, no de conducta
Afirma la existencia de ~200 strings literales exactos dentro de `index.html`
(nombres de funciones, colores hex, números, fragmentos de código). No prueba que
el juego funcione: prueba que nadie tocó esos strings. Consecuencias:
- Cualquier refactor, renombre o reformateo puede romperlo aunque la conducta sea
  idéntica o mejor.
- Verde no significa "correcto", significa "sin editar".
Si cambias código cubierto por un assert, **actualiza el assert en el mismo
commit** o el CI se cae. Lo ideal a mediano plazo es reescribirlo como test de
conducta (montar un mundo simulado y verificar que una misión se completa, que un
intruso resuelto suma, que un silvestre no entra al corral). No lo hagas sin
avisar: es la red de seguridad actual.

### 2. Salvaguardas culturales (no negociables)
Este es material culturalmente sensible. Al editar, mantener:
- La **música es sintética e "inspirada en la trutruka"**; NO reproduce cantos ni
  melodías ceremoniales. El texto que lo declara debe permanecer.
- Las **voces son una guía sintética pendiente de validación por hablantes**. No
  presentarlas como pronunciación autorizada. La voz lee solo el nombre en
  mapudungun (nunca el español).
- El **grafemario es Azümchefe** (CONADI 2003 / MINEDUC EIB). No cambiar grafías a
  otro sistema sin verificar.
- La **araucaria (pewen) NO debe parecer un pino** — es políticamente sensible por
  el conflicto forestal. Tronco alto desnudo + copa de parasol/candelabro.
- `fort`/`malal`, `eltun` y `chemamüll` se tratan como recinto comunitario y
  lugares de memoria, NO como fortificación militar ni decoración. `validate.mjs`
  incluso bloquea la reaparición de "fortificación" / "comprender la defensa".

### 3. Literales que `validate.mjs` exige (romperlos = CI rojo)
Ejemplos que deben permanecer textuales si tocas su zona:
- Voz: `new SpeechSynthesisUtterance(pieces[id].mapu)`, `mapu.rate=.84;mapu.pitch=1`,
  `mapu.onend=queltehueCall`, `function getNaturalSpanishVoice()`.
- Música: `function startMusic()`, `function kultrunBeat(`, `function trutrukaCall(`,
  `const musicThemes={`, exactamente **3** bloques `phrases:[`.
- Render: `renderer.shadowMap.enabled=false` (la línea debe existir; las sombras se
  activan condicionalmente en una línea aparte, `if(!lowPowerDevice...)`),
  `Math.min(devicePixelRatio,1.2)`.
- Recurso: `src="./relations.js?v=20260802-4"`.

### 4. Arquitectura / deuda conocida
- Lógica duplicada entre `relations.js` y wrappers inline en `index.html`.
- El motor de estado (world, movimiento, evaluate) está inline y sin tests de
  conducta. Extraerlo a un módulo + testearlo es la mejora estructural pendiente.
- `swan` está en varios sets a la vez (silvestre/humedal/volador/acuático); revisar
  antes de tocar reglas de fauna.

## Estilo de trabajo esperado por el autor

Feedback crítico y directo, sin adulación. Español chileno (tuteo). Antes de
implementar algo con implicancia cultural o lingüística, verificar y advertir, no
asumir.
