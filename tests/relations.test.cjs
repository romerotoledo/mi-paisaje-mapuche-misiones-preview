const assert=require('node:assert/strict');
const relations=require('../relations.js');

const object=(type,i,k,category='')=>({type,i,k,category});

assert.equal(relations.gridDistance(object('a',0,0),object('b',3,4)),5);

{
  const ruka=object('ruka',2,2),objects=[ruka,object('water',4,2)];
  const result=relations.evaluateLandscapeRelations(objects).relations.find(item=>item.id==='ruka-water');
  assert.equal(result.state,'good');
}

{
  const ruka=object('ruka',2,2),objects=[ruka,object('water',2,2)];
  const result=relations.evaluateLandscapeRelations(objects).relations.find(item=>item.id==='ruka-water');
  assert.equal(result.state,'suggestion','la ruka no se considera bien ubicada directamente sobre el agua');
}

{
  const pudu=object('pudu',5,5),objects=[pudu,object('forest',6,6)];
  const result=relations.evaluateLandscapeRelations(objects).relations.find(item=>item.id==='pudu-forest');
  assert.equal(result.state,'good');
}

{
  const chicken=object('chicken',5,5),malal=[object('fence',4,5),object('fence',6,5),object('fort',5,6)];
  assert.equal(relations.evaluateMalalProtection(chicken,[chicken]).state,'unprotected');
  assert.equal(relations.evaluateMalalProtection(chicken,[chicken,...malal.slice(0,2)]).state,'partial');
  assert.equal(relations.evaluateMalalProtection(chicken,[chicken,...malal]).state,'protected');
}

{
  const crop=object('corn',3,3),objects=[
    crop,object('water',3,1),object('ruka',4,3),
    object('fence',2,3),object('fence',3,4),object('fence',4,4)
  ];
  const result=relations.evaluateLandscapeRelations(objects).relations.find(item=>item.id==='crop-organization');
  assert.equal(result.state,'good');
  assert.equal(result.score,3);
}

{
  const crop=object('quinoa',3,3),objects=[crop,object('water',3,1),object('ruka',4,3)];
  const result=relations.evaluateLandscapeRelations(objects).relations.find(item=>item.object===crop&&item.id==='crop-organization');
  assert.equal(result.state,'good');
}

{
  const machi=object('machi',7,7,'ceremonial'),objects=[machi,object('lonko',8,7,'ceremonial'),object('foye',7,9,'ceremonial')];
  const result=relations.evaluateLandscapeRelations(objects).relations.find(item=>item.object===machi&&item.id==='ceremonial-cluster');
  assert.equal(result.state,'good');
}

assert.equal(relations.isNear([object('pudu',0,0),object('forest',1,1)],'pudu','forest',2),true);
assert.equal(relations.isNearAny([object('condor',0,0),object('volcano',3,0)],'condor',['hill','volcano'],4),true);

assert.equal(relations.ecologicalFloorAt(4,2,true,'integrado'),'andino');
assert.equal(relations.ecologicalFloorAt(4,5,true,'integrado'),'valle');
assert.equal(relations.ecologicalFloorAt(4,9,true,'integrado'),'costero');
assert.equal(relations.animalHabitatAllows('condor',4,2,true,'integrado'),true);
assert.equal(relations.animalHabitatAllows('condor',4,5,true,'integrado'),false);
assert.equal(relations.animalHabitatAllows('whale',4,9,true,'integrado'),true);
assert.equal(relations.animalHabitatAllows('whale',4,5,true,'integrado'),false);
assert.equal(relations.animalHabitatAllows('pudu',4,4,false,'valle'),true);
assert.equal(relations.animalHabitatAllows('pudu',4,4,false,'andino'),false);
assert.ok(relations.CEREMONIAL_TYPES.includes('ketruMetawe'));
assert.ok(relations.CEREMONIAL_TYPES.includes('menkuwe'));

{
  const puma=object('puma',4,4),pudu=object('pudu',6,4),condor=object('condor',9,9);
  assert.equal(relations.hasPredatorConflict('pudu',6,4,[puma,pudu],2,pudu),true);
  assert.equal(relations.hasPredatorConflict('condor',9,9,[puma,condor],2,condor),false);
  assert.equal(relations.hasPredatorConflict('fox',5,4,[puma],2),true);
}

console.log('OK: distancias, hábitats, depredadores, relaciones ecológicas, organización ceremonial y protección por malal validados.');
