import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const html = await readFile(resolve(root, "index.html"), "utf8");

assert.match(html, /<!doctype html>/i);
assert.match(html, /<meta name="viewport"[^>]*viewport-fit=cover/i);
assert.match(html, /Proyecto FONDECYT 1231127/);
assert.match(html, /Dirigido por el Dr\. Hugo Romero-Toledo/);
assert.match(html, /assets\/institucional\/anid\.svg/);
assert.match(html, /assets\/institucional\/universidad-autonoma\.png/);
assert.doesNotMatch(html, /\bhttp:\/\//i, "Todos los recursos de red deben usar HTTPS");

for (const match of html.matchAll(/\b(?:src|href)=["']([^"']+)["']/gi)) {
  const url = match[1];
  if (/^(?:https?:)?\/\//i.test(url)) {
    assert.match(url, /^https:\/\//i, `Recurso inseguro: ${url}`);
  }
}

for (const asset of [
  "relations.js",
  "assets/institucional/anid.svg",
  "assets/institucional/universidad-autonoma.png",
]) {
  await access(resolve(root, asset));
}

const inlineScripts = [...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)];
assert.ok(inlineScripts.length > 0, "No se encontró JavaScript embebido");
for (const [, source] of inlineScripts) {
  new Function(source);
}

for (const eventName of ["touchstart", "touchmove", "touchend", "touchcancel"]) {
  assert.match(html, new RegExp(`addEventListener\\(['"]${eventName}['"]`));
}

assert.match(html, /function paintGround\(i,k,type\)/);
assert.match(html, /pieces\[selected\]\.kind==='block'/);
assert.match(html, /op:'paint'/);
for (const id of ["woman", "man", "girl", "boy", "elder"]) {
  assert.match(html, new RegExp(`${id}:\\{cat:'social'`));
}
for (const id of ["machi", "lonko", "rewe", "kultrun", "kuel", "foye"]) {
  assert.match(html, new RegExp(`${id}:\\{cat:'ceremonial'`));
}
assert.doesNotMatch(html, /(?:machi|lonko):\{cat:'social'/);
assert.doesNotMatch(html, /child:\{cat:'social'/);
const piecesSource = html.slice(html.indexOf("const pieces={"), html.indexOf("let category="));
const categoryIds = category => [...piecesSource.matchAll(new RegExp(`(\\w+):\\{cat:'${category}'`, "g"))].map(match => match[1]).sort();
assert.deepEqual(categoryIds("social"), ["boy", "elder", "girl", "kona", "man", "toki", "woman"]);
assert.deepEqual(categoryIds("ceremonial"), ["chemamull", "eltun", "foye", "ketruMetawe", "kuel", "kultrun", "lonko", "machi", "menkuwe", "rewe"]);
assert.match(html, /mapu:'Lonko',es:'Autoridad comunitaria'/);
assert.match(html, /mapu:'Foye',es:'Canelo'/);
assert.match(html, /function palisade\(\)/);
assert.match(html, /es:'Corral de empalizada'/);
assert.match(html, /fort:\{cat:'arquitectura'/);
assert.match(html, /mapu:'Malal',es:'Recinto comunitario'/);
assert.doesNotMatch(html, /recinto fortificado|fortificación|comprender la defensa/i);
assert.match(html, /type==='fort'/);
assert.match(html, /function pronounce\(id\)/);
assert.match(html, /SpeechSynthesisUtterance/);
assert.match(html, /function startMusic\(\)/);
assert.match(html, /function kultrunBeat\(/);
assert.match(html, /function pifilcaNote\(/);
assert.match(html, /const musicPhrases=\[/);
assert.ok((html.match(/\[[\d.,]+\]/g) || []).length >= 10, "La música debe contener al menos diez frases nuevas");
assert.match(html, /const musicDrums=\[/);
assert.match(html, /setInterval\(musicPulse,4120\)/);
assert.match(html, /inspiradas en timbres de kultrun y pifilca/);
assert.match(html, /no reproduce cantos ni melodías ceremoniales/);
assert.match(html, /function getNaturalSpanishVoice\(\)/);
assert.match(html, /new SpeechSynthesisUtterance\(pieces\[id\]\.mapu\)/);
assert.match(html, /mapu\.rate=\.84;mapu\.pitch=1/);
assert.match(html, /se lee solamente su nombre en mapudungun/);
assert.doesNotMatch(html, /SpeechSynthesisUtterance\(pieces\[id\]\.es\)/, "La voz no debe leer el nombre en español");
assert.doesNotMatch(html, /const pronunciations=/);
assert.match(html, /src="\.\/relations\.js\?v=20260802-4"/);
for (const fn of [
  "getObjectsByType", "getObjectsByCategory", "gridDistance", "isNear",
  "isNearAny", "countNearby", "getNearbyObjects", "evaluateMalalProtection",
  "evaluateLandscapeRelations", "getRelationScore", "showLandscapeFeedback",
]) {
  assert.match(html, new RegExp(`function ${fn}\\(`), `${fn} debe existir`);
}
assert.doesNotMatch(html, /id="turnPiece"/);
assert.doesNotMatch(html, /pieceRotation/);
assert.match(html, /j=1,k=/);
assert.match(html, /Ese espacio ya está ocupado/);
assert.match(html, /prefers-reduced-motion: reduce/);
assert.match(html, /visibilitychange/);
assert.match(html, /function registerAnimation\(/);
assert.match(html, /function animateEntry\(/);
assert.match(html, /function animateAnimalIdle\(/);
assert.match(html, /animateAnimalIdle\(entry,time\)/);
assert.match(html, /function animateHumanIdle\(/);
assert.match(html, /animateHumanIdle\(entry,time\)/);
assert.match(html, /humanMovers\.has\(entry\.type\)/);
assert.match(html, /entry\.mesh\.position\.y=entry\.baseY\+breath\*\.025/);
assert.match(html, /entry\.mesh\.rotation\.z=step\*\.028/);
assert.match(html, /entry\.mesh\.scale\.set\(1-breath\*\.012,1\+breath\*\.022,1-breath\*\.012\)/);
assert.match(html, /function createClouds\(/);
assert.match(html, /function resetClouds\(/);
assert.match(html, /function createRainCloud\(/);
assert.match(html, /function resetRainCloud\(/);
assert.match(html, /function updateRainCloud\(delta\)/);
assert.match(html, /nextRain=24\+Math\.random\(\)\*22/);
assert.match(html, /const smokeGeometry=/);
assert.match(html, /entry\.type==='volcano'/);
assert.match(html, /entry\.state='smoke'/);
assert.match(html, /entry\.state='breeze'/);
assert.match(html, /lowPowerDevice\?3:4/);
assert.match(html, /const count=lowPowerDevice\?2:3/);
assert.match(html, /clearIndicatorsForMesh\(r\.mesh\)/);
assert.match(html, /animated\.splice\(a,1\)/);
assert.match(html, /resetLandscapeFeedback\(\);clearAllIndicators\(\);resetClouds\(\)/);
assert.match(html, /const feedbackTimes=new Map\(\)/);
assert.match(html, /now-previous<cooldown/);
assert.match(html, /now-lastFeedbackAt<2600/);
assert.match(html, /renderer\.shadowMap\.enabled=false/);
assert.match(html, /Math\.min\(devicePixelRatio,1\.2\)/);
assert.doesNotMatch(html, /setPointerCapture/);
assert.doesNotMatch(html, /\.ctrl\{width:(?:4[0-3]|[0-3]\d)px;height:/, "Los controles deben medir al menos 44 px");
const animationSource=html.slice(html.indexOf("function animateEntry"),html.indexOf("function place"));
assert.doesNotMatch(animationSource,/new THREE\./,"El ciclo de animación no debe crear geometrías ni materiales");
assert.match(html, /Prototipo móvil/);
assert.match(html, /let category='ambiental', selected='hill', deleting=false, soundOn=true, freeMode=false/);
for (const id of ["seaWater", "sand", "araucaria", "reliefRock", "coipo", "swan", "lapwing", "ibis", "seaLion", "jumpingFish", "seagull", "whale"]) {
  assert.match(html, new RegExp(`${id}:\\{cat:`), `${id} debe existir`);
}
assert.match(html, /andino:\{label:'Paisaje andino'/);
assert.match(html, /valle:\{label:'Paisaje de valle'/);
assert.match(html, /required:\['water','grass','forest','wetland','fox','pudu','coipo','swan','hawk','lapwing','ibis'\]/);
assert.match(html, /costero:\{label:'Paisaje costero'/);
assert.match(html, /required:\['seaWater','water','wetland','grass','sand','reliefRock','seaLion','jumpingFish','seagull','whale'\]/);
assert.match(html, /function seagull\(\)/);
assert.match(html, /mapu:'Kaukau',es:'Gaviota grande'/);
assert.match(html, /mapu:'Yene',es:'Ballena'/);
assert.match(html, /0xd8dedb/);
assert.match(html, /entry\.type==='seaLion'[\s\S]{0,220}if\(entry\.tail\)entry\.tail\.rotation\.y/);
assert.match(html, /function selectIntegrated\(\)/);
assert.match(html, /id="integratedProgress"/);
assert.match(html, /activeFloor='integrado';integratedMode=true/);
assert.match(html, /Cordillera \$\{andino\}/);
assert.match(html, /function queltehueCall\(\)/);
assert.match(html, /mapu\.onend=queltehueCall/);
assert.match(html, /entry\.type==='ibis'&&entry\.peckHead/);
assert.match(html, /entry\.type==='condor'\|\|entry\.type==='hawk'/);
assert.match(html, /const movableTypes=new Set\(/);
for (const id of ["camelid", "chicken", "girl", "boy", "woman", "man", "pudu", "condor"]) {
  assert.match(html, new RegExp(`movableTypes[^;]+['"]${id}['"]`));
}
for (const fn of [
  "getMoversAtCell", "hostAccepts", "movementCellAvailable", "findMovePath",
  "selectMover", "startMovement", "updateActiveMovement", "finishMovement", "restoreMove",
]) assert.match(html, new RegExp(`function ${fn}\\(`), `${fn} debe existir`);
assert.match(html, /wildAnimalTypes\.has\(record\.type\)\)return false/);
assert.match(html, /domesticAnimalTypes\.has\(record\.type\)\)return host\.type==='fence'/);
assert.match(html, /humanMovers\.has\(record\.type\).*host\.type==='ruka'\|\|host\.type==='fort'/s);
assert.match(html, /function animalHabitatAllows\(/);
assert.match(html, /function predatorConflict\(/);
assert.match(html, /function animalEcologyIssue\(/);
assert.match(html, /Los animales silvestres no pueden entrar al corral/);
assert.match(html, /Los animales deben mantenerse lejos del puma y del zorro/);
assert.match(html, /animalMovers\.has\(entry\.type\)/);
assert.match(html, /function animateCreatureGesture\(entry,delta\)/);
assert.match(html, /gestureState:'rest',gestureElapsed:0,nextGesture:/);
assert.match(html, /entry\.gestureState='head'/);
assert.match(html, /entry\.gestureState='body'/);
assert.match(html, /entry\.head\.rotation\.y=turn\*\.38/);
assert.match(html, /entry\.mesh\.rotation\.x=shift\*\(humanMovers\.has\(entry\.type\)\?\.045:\.075\)/);
assert.match(html, /animateCreatureGesture\(entry,delta\)/);
assert.ok((html.match(/userData\.head=head/g)||[]).length>=10,'Todos los modelos articulados deben exponer la cabeza');
assert.match(html, /tree\?4\+Math\.random\(\)\*7/);
assert.match(html, /duration=4\.8/);
assert.match(html, /entry\.nextAction=8\+Math\.random\(\)\*12/);
assert.match(html, /groundCell\.type==='water'/);
assert.match(html, /reservedDestinations/);
assert.match(html, /op:'move'/);
assert.match(html, /updateActiveMovement\(delta\)/);
assert.match(html, /id="moveStatus"/);
for (const id of ["quinoa", "ketruMetawe", "menkuwe", "eltun", "chemamull", "kona", "toki"]) {
  assert.match(html, new RegExp(`${id}:\\{cat:`), `${id} debe existir`);
}
assert.match(html, /Gran misión 3 · Crear el paisaje del lof/);
assert.match(html, /lofSocial:\{label:'Vida social del lof'/);
assert.match(html, /lofPublic:\{label:'Espacio público y ceremonial'/);
assert.match(html, /lofAll:\{label:'Paisaje completo del lof'/);
assert.match(html, /function spawnLofIntruder\(\)/);
assert.match(html, /record\.intruder=true/);
assert.match(html, /record\.k<=2/);
assert.match(html, /Este animal debe volver manualmente al borde natural/);
assert.match(html, /isNear\('foye','rewe',2\)/);
assert.match(html, /isNear\('kultrun','machi',2\)/);
assert.match(html, /isNear\('chemamull','eltun',2\)/);
assert.match(html, /chemamullCount===2/);
assert.match(html, /categories\.every\(\(\[id\]\)=>used\.has\(id\)\)/);
assert.match(html, /Grandes misiones <strong>\$\{grandCompleted\}\/3/);

console.log("OK: HTML estático, relaciones, animaciones reutilizables, audio, recursos y controles táctiles validados.");
