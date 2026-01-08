gdjs.Nivel1Code = {};
gdjs.Nivel1Code.localVariables = [];
gdjs.Nivel1Code.idToCallbackMap = new Map();
gdjs.Nivel1Code.GDsueloNievel1Objects1= [];
gdjs.Nivel1Code.GDsueloNievel1Objects2= [];
gdjs.Nivel1Code.GDsueloNievel1Objects3= [];
gdjs.Nivel1Code.GDColisionSueloNievel1Objects1= [];
gdjs.Nivel1Code.GDColisionSueloNievel1Objects2= [];
gdjs.Nivel1Code.GDColisionSueloNievel1Objects3= [];
gdjs.Nivel1Code.GDbackgroundBosqueObjects1= [];
gdjs.Nivel1Code.GDbackgroundBosqueObjects2= [];
gdjs.Nivel1Code.GDbackgroundBosqueObjects3= [];
gdjs.Nivel1Code.GDMicaObjects1= [];
gdjs.Nivel1Code.GDMicaObjects2= [];
gdjs.Nivel1Code.GDMicaObjects3= [];
gdjs.Nivel1Code.GDbackgroundNubesObjects1= [];
gdjs.Nivel1Code.GDbackgroundNubesObjects2= [];
gdjs.Nivel1Code.GDbackgroundNubesObjects3= [];
gdjs.Nivel1Code.GDmariaObjects1= [];
gdjs.Nivel1Code.GDmariaObjects2= [];
gdjs.Nivel1Code.GDmariaObjects3= [];
gdjs.Nivel1Code.GDMarco_9595InterfazObjects1= [];
gdjs.Nivel1Code.GDMarco_9595InterfazObjects2= [];
gdjs.Nivel1Code.GDMarco_9595InterfazObjects3= [];
gdjs.Nivel1Code.GDinterfaz_9595vidaObjects1= [];
gdjs.Nivel1Code.GDinterfaz_9595vidaObjects2= [];
gdjs.Nivel1Code.GDinterfaz_9595vidaObjects3= [];
gdjs.Nivel1Code.GDinterfaz_9595SthoreObjects1= [];
gdjs.Nivel1Code.GDinterfaz_9595SthoreObjects2= [];
gdjs.Nivel1Code.GDinterfaz_9595SthoreObjects3= [];
gdjs.Nivel1Code.GDNewSpriteObjects1= [];
gdjs.Nivel1Code.GDNewSpriteObjects2= [];
gdjs.Nivel1Code.GDNewSpriteObjects3= [];
gdjs.Nivel1Code.GDportalObjects1= [];
gdjs.Nivel1Code.GDportalObjects2= [];
gdjs.Nivel1Code.GDportalObjects3= [];
gdjs.Nivel1Code.GDinterfaz_9595llaveObjects1= [];
gdjs.Nivel1Code.GDinterfaz_9595llaveObjects2= [];
gdjs.Nivel1Code.GDinterfaz_9595llaveObjects3= [];
gdjs.Nivel1Code.GDtextScoreObjects1= [];
gdjs.Nivel1Code.GDtextScoreObjects2= [];
gdjs.Nivel1Code.GDtextScoreObjects3= [];
gdjs.Nivel1Code.GDtextVidaObjects1= [];
gdjs.Nivel1Code.GDtextVidaObjects2= [];
gdjs.Nivel1Code.GDtextVidaObjects3= [];
gdjs.Nivel1Code.GDposInicialObjects1= [];
gdjs.Nivel1Code.GDposInicialObjects2= [];
gdjs.Nivel1Code.GDposInicialObjects3= [];
gdjs.Nivel1Code.GDthorObjects1= [];
gdjs.Nivel1Code.GDthorObjects2= [];
gdjs.Nivel1Code.GDthorObjects3= [];
gdjs.Nivel1Code.GDllaveObjects1= [];
gdjs.Nivel1Code.GDllaveObjects2= [];
gdjs.Nivel1Code.GDllaveObjects3= [];
gdjs.Nivel1Code.GDportalAbiertoObjects1= [];
gdjs.Nivel1Code.GDportalAbiertoObjects2= [];
gdjs.Nivel1Code.GDportalAbiertoObjects3= [];
gdjs.Nivel1Code.GDposInicial_9595llaveObjects1= [];
gdjs.Nivel1Code.GDposInicial_9595llaveObjects2= [];
gdjs.Nivel1Code.GDposInicial_9595llaveObjects3= [];
gdjs.Nivel1Code.GDLevitadoraObjects1= [];
gdjs.Nivel1Code.GDLevitadoraObjects2= [];
gdjs.Nivel1Code.GDLevitadoraObjects3= [];
gdjs.Nivel1Code.GDDireccionadorObjects1= [];
gdjs.Nivel1Code.GDDireccionadorObjects2= [];
gdjs.Nivel1Code.GDDireccionadorObjects3= [];
gdjs.Nivel1Code.GDbeeheveObjects1= [];
gdjs.Nivel1Code.GDbeeheveObjects2= [];
gdjs.Nivel1Code.GDbeeheveObjects3= [];
gdjs.Nivel1Code.GDenemigoObjects1= [];
gdjs.Nivel1Code.GDenemigoObjects2= [];
gdjs.Nivel1Code.GDenemigoObjects3= [];


gdjs.Nivel1Code.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) * 0.9, "background4", 0);
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) * 0.75, "background3", 0);
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) * 0.4, "background2", 0);
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) * 0.25, "background1", 0);
}
}

}


{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "background4", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "background3", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "background2", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "background1", 0);
}
}

}


};gdjs.Nivel1Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Mica"), gdjs.Nivel1Code.GDMicaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel1Code.GDMicaObjects2.length;i<l;++i) {
    if ( gdjs.Nivel1Code.GDMicaObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Nivel1Code.GDMicaObjects2[k] = gdjs.Nivel1Code.GDMicaObjects2[i];
        ++k;
    }
}
gdjs.Nivel1Code.GDMicaObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel1Code.GDMicaObjects2 */
{for(var i = 0, len = gdjs.Nivel1Code.GDMicaObjects2.length ;i < len;++i) {
    gdjs.Nivel1Code.GDMicaObjects2[i].getBehavior("Animation").setAnimationName("mica jump");
}
}
{for(var i = 0, len = gdjs.Nivel1Code.GDMicaObjects2.length ;i < len;++i) {
    gdjs.Nivel1Code.GDMicaObjects2[i].setAnimationFrame(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("maria"), gdjs.Nivel1Code.GDmariaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel1Code.GDmariaObjects2.length;i<l;++i) {
    if ( gdjs.Nivel1Code.GDmariaObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Nivel1Code.GDmariaObjects2[k] = gdjs.Nivel1Code.GDmariaObjects2[i];
        ++k;
    }
}
gdjs.Nivel1Code.GDmariaObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel1Code.GDmariaObjects2 */
{for(var i = 0, len = gdjs.Nivel1Code.GDmariaObjects2.length ;i < len;++i) {
    gdjs.Nivel1Code.GDmariaObjects2[i].getBehavior("Animation").setAnimationName("maria jump");
}
}
{for(var i = 0, len = gdjs.Nivel1Code.GDmariaObjects2.length ;i < len;++i) {
    gdjs.Nivel1Code.GDmariaObjects2[i].setAnimationFrame(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mica"), gdjs.Nivel1Code.GDMicaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel1Code.GDMicaObjects2.length;i<l;++i) {
    if ( !(gdjs.Nivel1Code.GDMicaObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Nivel1Code.GDMicaObjects2[k] = gdjs.Nivel1Code.GDMicaObjects2[i];
        ++k;
    }
}
gdjs.Nivel1Code.GDMicaObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel1Code.GDMicaObjects2 */
{for(var i = 0, len = gdjs.Nivel1Code.GDMicaObjects2.length ;i < len;++i) {
    gdjs.Nivel1Code.GDMicaObjects2[i].getBehavior("Animation").setAnimationName("mica descanso");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("maria"), gdjs.Nivel1Code.GDmariaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel1Code.GDmariaObjects2.length;i<l;++i) {
    if ( !(gdjs.Nivel1Code.GDmariaObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Nivel1Code.GDmariaObjects2[k] = gdjs.Nivel1Code.GDmariaObjects2[i];
        ++k;
    }
}
gdjs.Nivel1Code.GDmariaObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel1Code.GDmariaObjects2 */
{for(var i = 0, len = gdjs.Nivel1Code.GDmariaObjects2.length ;i < len;++i) {
    gdjs.Nivel1Code.GDmariaObjects2[i].getBehavior("Animation").setAnimationName("maria descanso");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mica"), gdjs.Nivel1Code.GDMicaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel1Code.GDMicaObjects2.length;i<l;++i) {
    if ( gdjs.Nivel1Code.GDMicaObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Nivel1Code.GDMicaObjects2[k] = gdjs.Nivel1Code.GDMicaObjects2[i];
        ++k;
    }
}
gdjs.Nivel1Code.GDMicaObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel1Code.GDMicaObjects2 */
{for(var i = 0, len = gdjs.Nivel1Code.GDMicaObjects2.length ;i < len;++i) {
    gdjs.Nivel1Code.GDMicaObjects2[i].getBehavior("Animation").setAnimationName("mica Walk");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("maria"), gdjs.Nivel1Code.GDmariaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel1Code.GDmariaObjects2.length;i<l;++i) {
    if ( gdjs.Nivel1Code.GDmariaObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Nivel1Code.GDmariaObjects2[k] = gdjs.Nivel1Code.GDmariaObjects2[i];
        ++k;
    }
}
gdjs.Nivel1Code.GDmariaObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel1Code.GDmariaObjects2 */
{for(var i = 0, len = gdjs.Nivel1Code.GDmariaObjects2.length ;i < len;++i) {
    gdjs.Nivel1Code.GDmariaObjects2[i].getBehavior("Animation").setAnimationName("maria Walk");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mica"), gdjs.Nivel1Code.GDMicaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel1Code.GDMicaObjects2.length;i<l;++i) {
    if ( gdjs.Nivel1Code.GDMicaObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.Nivel1Code.GDMicaObjects2[k] = gdjs.Nivel1Code.GDMicaObjects2[i];
        ++k;
    }
}
gdjs.Nivel1Code.GDMicaObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel1Code.GDMicaObjects2 */
{for(var i = 0, len = gdjs.Nivel1Code.GDMicaObjects2.length ;i < len;++i) {
    gdjs.Nivel1Code.GDMicaObjects2[i].getBehavior("Animation").setAnimationName("mica jump");
}
}
{for(var i = 0, len = gdjs.Nivel1Code.GDMicaObjects2.length ;i < len;++i) {
    gdjs.Nivel1Code.GDMicaObjects2[i].setAnimationFrame(2);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("maria"), gdjs.Nivel1Code.GDmariaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel1Code.GDmariaObjects2.length;i<l;++i) {
    if ( gdjs.Nivel1Code.GDmariaObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.Nivel1Code.GDmariaObjects2[k] = gdjs.Nivel1Code.GDmariaObjects2[i];
        ++k;
    }
}
gdjs.Nivel1Code.GDmariaObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel1Code.GDmariaObjects2 */
{for(var i = 0, len = gdjs.Nivel1Code.GDmariaObjects2.length ;i < len;++i) {
    gdjs.Nivel1Code.GDmariaObjects2[i].getBehavior("Animation").setAnimationName("maria jump");
}
}
{for(var i = 0, len = gdjs.Nivel1Code.GDmariaObjects2.length ;i < len;++i) {
    gdjs.Nivel1Code.GDmariaObjects2[i].setAnimationFrame(2);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mica"), gdjs.Nivel1Code.GDMicaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel1Code.GDMicaObjects2.length;i<l;++i) {
    if ( gdjs.Nivel1Code.GDMicaObjects2[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.Nivel1Code.GDMicaObjects2[k] = gdjs.Nivel1Code.GDMicaObjects2[i];
        ++k;
    }
}
gdjs.Nivel1Code.GDMicaObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel1Code.GDMicaObjects2 */
{for(var i = 0, len = gdjs.Nivel1Code.GDMicaObjects2.length ;i < len;++i) {
    gdjs.Nivel1Code.GDMicaObjects2[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mica"), gdjs.Nivel1Code.GDMicaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel1Code.GDMicaObjects2.length;i<l;++i) {
    if ( gdjs.Nivel1Code.GDMicaObjects2[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.Nivel1Code.GDMicaObjects2[k] = gdjs.Nivel1Code.GDMicaObjects2[i];
        ++k;
    }
}
gdjs.Nivel1Code.GDMicaObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel1Code.GDMicaObjects2 */
{for(var i = 0, len = gdjs.Nivel1Code.GDMicaObjects2.length ;i < len;++i) {
    gdjs.Nivel1Code.GDMicaObjects2[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("maria"), gdjs.Nivel1Code.GDmariaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel1Code.GDmariaObjects2.length;i<l;++i) {
    if ( gdjs.Nivel1Code.GDmariaObjects2[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.Nivel1Code.GDmariaObjects2[k] = gdjs.Nivel1Code.GDmariaObjects2[i];
        ++k;
    }
}
gdjs.Nivel1Code.GDmariaObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel1Code.GDmariaObjects2 */
{for(var i = 0, len = gdjs.Nivel1Code.GDmariaObjects2.length ;i < len;++i) {
    gdjs.Nivel1Code.GDmariaObjects2[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("maria"), gdjs.Nivel1Code.GDmariaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel1Code.GDmariaObjects1.length;i<l;++i) {
    if ( gdjs.Nivel1Code.GDmariaObjects1[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.Nivel1Code.GDmariaObjects1[k] = gdjs.Nivel1Code.GDmariaObjects1[i];
        ++k;
    }
}
gdjs.Nivel1Code.GDmariaObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel1Code.GDmariaObjects1 */
{for(var i = 0, len = gdjs.Nivel1Code.GDmariaObjects1.length ;i < len;++i) {
    gdjs.Nivel1Code.GDmariaObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


};gdjs.Nivel1Code.asyncCallback10644676 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Nivel1Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("llave"), gdjs.Nivel1Code.GDllaveObjects3);
gdjs.copyArray(asyncObjectsList.getObjects("maria"), gdjs.Nivel1Code.GDmariaObjects3);

gdjs.copyArray(runtimeScene.getObjects("posInicial"), gdjs.Nivel1Code.GDposInicialObjects3);
gdjs.copyArray(runtimeScene.getObjects("posInicial_llave"), gdjs.Nivel1Code.GDposInicial_9595llaveObjects3);
{for(var i = 0, len = gdjs.Nivel1Code.GDmariaObjects3.length ;i < len;++i) {
    gdjs.Nivel1Code.GDmariaObjects3[i].setPosition((( gdjs.Nivel1Code.GDposInicialObjects3.length === 0 ) ? 0 :gdjs.Nivel1Code.GDposInicialObjects3[0].getPointX("")),(( gdjs.Nivel1Code.GDposInicialObjects3.length === 0 ) ? 0 :gdjs.Nivel1Code.GDposInicialObjects3[0].getPointY("")));
}
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setBoolean(false);
}
{for(var i = 0, len = gdjs.Nivel1Code.GDllaveObjects3.length ;i < len;++i) {
    gdjs.Nivel1Code.GDllaveObjects3[i].setPosition((( gdjs.Nivel1Code.GDposInicial_9595llaveObjects3.length === 0 ) ? 0 :gdjs.Nivel1Code.GDposInicial_9595llaveObjects3[0].getPointX("")),(( gdjs.Nivel1Code.GDposInicial_9595llaveObjects3.length === 0 ) ? 0 :gdjs.Nivel1Code.GDposInicial_9595llaveObjects3[0].getPointY("")));
}
}
gdjs.Nivel1Code.localVariables.length = 0;
}
gdjs.Nivel1Code.idToCallbackMap.set(10644676, gdjs.Nivel1Code.asyncCallback10644676);
gdjs.Nivel1Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Nivel1Code.localVariables);
for (const obj of gdjs.Nivel1Code.GDmariaObjects2) asyncObjectsList.addObject("maria", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Nivel1Code.asyncCallback10644676(runtimeScene, asyncObjectsList)), 10644676, asyncObjectsList);
}
}

}


};gdjs.Nivel1Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10644292);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1);
}

{ //Subevents
gdjs.Nivel1Code.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Nivel1Code.asyncCallback10643540 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Nivel1Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Mica"), gdjs.Nivel1Code.GDMicaObjects2);

gdjs.copyArray(runtimeScene.getObjects("llave"), gdjs.Nivel1Code.GDllaveObjects2);
gdjs.copyArray(runtimeScene.getObjects("posInicial"), gdjs.Nivel1Code.GDposInicialObjects2);
gdjs.copyArray(runtimeScene.getObjects("posInicial_llave"), gdjs.Nivel1Code.GDposInicial_9595llaveObjects2);
{for(var i = 0, len = gdjs.Nivel1Code.GDMicaObjects2.length ;i < len;++i) {
    gdjs.Nivel1Code.GDMicaObjects2[i].setPosition((( gdjs.Nivel1Code.GDposInicialObjects2.length === 0 ) ? 0 :gdjs.Nivel1Code.GDposInicialObjects2[0].getPointX("")),(( gdjs.Nivel1Code.GDposInicialObjects2.length === 0 ) ? 0 :gdjs.Nivel1Code.GDposInicialObjects2[0].getPointY("")));
}
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setBoolean(false);
}
{for(var i = 0, len = gdjs.Nivel1Code.GDllaveObjects2.length ;i < len;++i) {
    gdjs.Nivel1Code.GDllaveObjects2[i].setPosition((( gdjs.Nivel1Code.GDposInicial_9595llaveObjects2.length === 0 ) ? 0 :gdjs.Nivel1Code.GDposInicial_9595llaveObjects2[0].getPointX("")),(( gdjs.Nivel1Code.GDposInicial_9595llaveObjects2.length === 0 ) ? 0 :gdjs.Nivel1Code.GDposInicial_9595llaveObjects2[0].getPointY("")));
}
}
gdjs.Nivel1Code.localVariables.length = 0;
}
gdjs.Nivel1Code.idToCallbackMap.set(10643540, gdjs.Nivel1Code.asyncCallback10643540);
gdjs.Nivel1Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Nivel1Code.localVariables);
for (const obj of gdjs.Nivel1Code.GDMicaObjects1) asyncObjectsList.addObject("Mica", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Nivel1Code.asyncCallback10643540(runtimeScene, asyncObjectsList)), 10643540, asyncObjectsList);
}
}

}


};gdjs.Nivel1Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10646108);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1);
}

{ //Subevents
gdjs.Nivel1Code.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.Nivel1Code.eventsList6 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("maria"), gdjs.Nivel1Code.GDmariaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel1Code.GDmariaObjects2.length;i<l;++i) {
    if ( gdjs.Nivel1Code.GDmariaObjects2[i].getY() > 320 ) {
        isConditionTrue_0 = true;
        gdjs.Nivel1Code.GDmariaObjects2[k] = gdjs.Nivel1Code.GDmariaObjects2[i];
        ++k;
    }
}
gdjs.Nivel1Code.GDmariaObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Nivel1Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mica"), gdjs.Nivel1Code.GDMicaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel1Code.GDMicaObjects1.length;i<l;++i) {
    if ( gdjs.Nivel1Code.GDMicaObjects1[i].getY() > 315 ) {
        isConditionTrue_0 = true;
        gdjs.Nivel1Code.GDMicaObjects1[k] = gdjs.Nivel1Code.GDMicaObjects1[i];
        ++k;
    }
}
gdjs.Nivel1Code.GDMicaObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Nivel1Code.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.Nivel1Code.asyncCallback10662364 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Nivel1Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "perdiste", false);
}
gdjs.Nivel1Code.localVariables.length = 0;
}
gdjs.Nivel1Code.idToCallbackMap.set(10662364, gdjs.Nivel1Code.asyncCallback10662364);
gdjs.Nivel1Code.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Nivel1Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Nivel1Code.asyncCallback10662364(runtimeScene, asyncObjectsList)), 10662364, asyncObjectsList);
}
}

}


};gdjs.Nivel1Code.mapOfGDgdjs_9546Nivel1Code_9546GDmariaObjects1Objects = Hashtable.newFrom({"maria": gdjs.Nivel1Code.GDmariaObjects1});
gdjs.Nivel1Code.mapOfGDgdjs_9546Nivel1Code_9546GDinterfaz_95959595SthoreObjects1Objects = Hashtable.newFrom({"interfaz_Sthore": gdjs.Nivel1Code.GDinterfaz_9595SthoreObjects1});
gdjs.Nivel1Code.mapOfGDgdjs_9546Nivel1Code_9546GDMicaObjects1Objects = Hashtable.newFrom({"Mica": gdjs.Nivel1Code.GDMicaObjects1});
gdjs.Nivel1Code.mapOfGDgdjs_9546Nivel1Code_9546GDinterfaz_95959595SthoreObjects1Objects = Hashtable.newFrom({"interfaz_Sthore": gdjs.Nivel1Code.GDinterfaz_9595SthoreObjects1});
gdjs.Nivel1Code.mapOfGDgdjs_9546Nivel1Code_9546GDmariaObjects2Objects = Hashtable.newFrom({"maria": gdjs.Nivel1Code.GDmariaObjects2});
gdjs.Nivel1Code.mapOfGDgdjs_9546Nivel1Code_9546GDllaveObjects2Objects = Hashtable.newFrom({"llave": gdjs.Nivel1Code.GDllaveObjects2});
gdjs.Nivel1Code.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10663228);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setBoolean(true);
}
}

}


};gdjs.Nivel1Code.mapOfGDgdjs_9546Nivel1Code_9546GDMicaObjects2Objects = Hashtable.newFrom({"Mica": gdjs.Nivel1Code.GDMicaObjects2});
gdjs.Nivel1Code.mapOfGDgdjs_9546Nivel1Code_9546GDllaveObjects2Objects = Hashtable.newFrom({"llave": gdjs.Nivel1Code.GDllaveObjects2});
gdjs.Nivel1Code.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10631540);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setBoolean(true);
}
}

}


};gdjs.Nivel1Code.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10634756);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("interfaz_llave"), gdjs.Nivel1Code.GDinterfaz_9595llaveObjects2);
{for(var i = 0, len = gdjs.Nivel1Code.GDinterfaz_9595llaveObjects2.length ;i < len;++i) {
    gdjs.Nivel1Code.GDinterfaz_9595llaveObjects2[i].setColor("255;255;255");
}
}
}

}


};gdjs.Nivel1Code.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10636772);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("interfaz_llave"), gdjs.Nivel1Code.GDinterfaz_9595llaveObjects1);
{for(var i = 0, len = gdjs.Nivel1Code.GDinterfaz_9595llaveObjects1.length ;i < len;++i) {
    gdjs.Nivel1Code.GDinterfaz_9595llaveObjects1[i].setColor("255;255;255");
}
}
}

}


};gdjs.Nivel1Code.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("llave"), gdjs.Nivel1Code.GDllaveObjects2);
gdjs.copyArray(runtimeScene.getObjects("maria"), gdjs.Nivel1Code.GDmariaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel1Code.mapOfGDgdjs_9546Nivel1Code_9546GDmariaObjects2Objects, gdjs.Nivel1Code.mapOfGDgdjs_9546Nivel1Code_9546GDllaveObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Nivel1Code.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mica"), gdjs.Nivel1Code.GDMicaObjects2);
gdjs.copyArray(runtimeScene.getObjects("llave"), gdjs.Nivel1Code.GDllaveObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel1Code.mapOfGDgdjs_9546Nivel1Code_9546GDMicaObjects2Objects, gdjs.Nivel1Code.mapOfGDgdjs_9546Nivel1Code_9546GDllaveObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Nivel1Code.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10632436);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("interfaz_llave"), gdjs.Nivel1Code.GDinterfaz_9595llaveObjects2);
{for(var i = 0, len = gdjs.Nivel1Code.GDinterfaz_9595llaveObjects2.length ;i < len;++i) {
    gdjs.Nivel1Code.GDinterfaz_9595llaveObjects2[i].setColor("27;71;122");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("llave"), gdjs.Nivel1Code.GDllaveObjects2);
gdjs.copyArray(runtimeScene.getObjects("maria"), gdjs.Nivel1Code.GDmariaObjects2);
{for(var i = 0, len = gdjs.Nivel1Code.GDllaveObjects2.length ;i < len;++i) {
    gdjs.Nivel1Code.GDllaveObjects2[i].setPosition((( gdjs.Nivel1Code.GDmariaObjects2.length === 0 ) ? 0 :gdjs.Nivel1Code.GDmariaObjects2[0].getCenterXInScene()) + 10,(( gdjs.Nivel1Code.GDmariaObjects2.length === 0 ) ? 0 :gdjs.Nivel1Code.GDmariaObjects2[0].getCenterYInScene()) - 6);
}
}

{ //Subevents
gdjs.Nivel1Code.eventsList10(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mica"), gdjs.Nivel1Code.GDMicaObjects1);
gdjs.copyArray(runtimeScene.getObjects("llave"), gdjs.Nivel1Code.GDllaveObjects1);
{for(var i = 0, len = gdjs.Nivel1Code.GDllaveObjects1.length ;i < len;++i) {
    gdjs.Nivel1Code.GDllaveObjects1[i].setPosition((( gdjs.Nivel1Code.GDMicaObjects1.length === 0 ) ? 0 :gdjs.Nivel1Code.GDMicaObjects1[0].getCenterXInScene()) - 10,(( gdjs.Nivel1Code.GDMicaObjects1.length === 0 ) ? 0 :gdjs.Nivel1Code.GDMicaObjects1[0].getCenterYInScene()) - 6);
}
}

{ //Subevents
gdjs.Nivel1Code.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.Nivel1Code.mapOfGDgdjs_9546Nivel1Code_9546GDLevitadoraObjects1Objects = Hashtable.newFrom({"Levitadora": gdjs.Nivel1Code.GDLevitadoraObjects1});
gdjs.Nivel1Code.mapOfGDgdjs_9546Nivel1Code_9546GDDireccionadorObjects1Objects = Hashtable.newFrom({"Direccionador": gdjs.Nivel1Code.GDDireccionadorObjects1});
gdjs.Nivel1Code.mapOfGDgdjs_9546Nivel1Code_9546GDmariaObjects1Objects = Hashtable.newFrom({"maria": gdjs.Nivel1Code.GDmariaObjects1});
gdjs.Nivel1Code.mapOfGDgdjs_9546Nivel1Code_9546GDportalObjects1Objects = Hashtable.newFrom({"portal": gdjs.Nivel1Code.GDportalObjects1});
gdjs.Nivel1Code.eventsList13 = function(runtimeScene) {

{

/* Reuse gdjs.Nivel1Code.GDportalObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel1Code.GDportalObjects1.length;i<l;++i) {
    if ( gdjs.Nivel1Code.GDportalObjects1[i].getBehavior("Animation").getAnimationName() == "puerta_abierta" ) {
        isConditionTrue_0 = true;
        gdjs.Nivel1Code.GDportalObjects1[k] = gdjs.Nivel1Code.GDportalObjects1[i];
        ++k;
    }
}
gdjs.Nivel1Code.GDportalObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Up");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Nivel2", false);
}
}

}


};gdjs.Nivel1Code.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "interfaz", 0, 0, 0);
}
{gdjs.evtTools.sound.playMusic(runtimeScene, "music-BUJrkCxq.wav", true, 35, 1);
}
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("maria"), gdjs.Nivel1Code.GDmariaObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Nivel1Code.GDmariaObjects1.length !== 0 ? gdjs.Nivel1Code.GDmariaObjects1[0] : null), true, "", 0);
}
}

}


{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.clampCamera(runtimeScene, -(31), -(32), 607, 320, "", 0);
}
}

}


{



}


{


gdjs.Nivel1Code.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mica"), gdjs.Nivel1Code.GDMicaObjects1);
gdjs.copyArray(runtimeScene.getObjects("posInicial"), gdjs.Nivel1Code.GDposInicialObjects1);
gdjs.copyArray(runtimeScene.getObjects("posInicial_llave"), gdjs.Nivel1Code.GDposInicial_9595llaveObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setBoolean(false);
}
{for(var i = 0, len = gdjs.Nivel1Code.GDposInicialObjects1.length ;i < len;++i) {
    gdjs.Nivel1Code.GDposInicialObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Nivel1Code.GDposInicial_9595llaveObjects1.length ;i < len;++i) {
    gdjs.Nivel1Code.GDposInicial_9595llaveObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Nivel1Code.GDMicaObjects1.length ;i < len;++i) {
    gdjs.Nivel1Code.GDMicaObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}
}

}


{


gdjs.Nivel1Code.eventsList1(runtimeScene);
}


{


gdjs.Nivel1Code.eventsList6(runtimeScene);
}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() <= 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Nivel1Code.eventsList7(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("interfaz_Sthore"), gdjs.Nivel1Code.GDinterfaz_9595SthoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("maria"), gdjs.Nivel1Code.GDmariaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel1Code.mapOfGDgdjs_9546Nivel1Code_9546GDmariaObjects1Objects, gdjs.Nivel1Code.mapOfGDgdjs_9546Nivel1Code_9546GDinterfaz_95959595SthoreObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel1Code.GDinterfaz_9595SthoreObjects1 */
{for(var i = 0, len = gdjs.Nivel1Code.GDinterfaz_9595SthoreObjects1.length ;i < len;++i) {
    gdjs.Nivel1Code.GDinterfaz_9595SthoreObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Mica"), gdjs.Nivel1Code.GDMicaObjects1);
gdjs.copyArray(runtimeScene.getObjects("interfaz_Sthore"), gdjs.Nivel1Code.GDinterfaz_9595SthoreObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel1Code.mapOfGDgdjs_9546Nivel1Code_9546GDMicaObjects1Objects, gdjs.Nivel1Code.mapOfGDgdjs_9546Nivel1Code_9546GDinterfaz_95959595SthoreObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel1Code.GDinterfaz_9595SthoreObjects1 */
{for(var i = 0, len = gdjs.Nivel1Code.GDinterfaz_9595SthoreObjects1.length ;i < len;++i) {
    gdjs.Nivel1Code.GDinterfaz_9595SthoreObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() >= 5);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("textScore"), gdjs.Nivel1Code.GDtextScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("textVida"), gdjs.Nivel1Code.GDtextVidaObjects1);
{for(var i = 0, len = gdjs.Nivel1Code.GDtextVidaObjects1.length ;i < len;++i) {
    gdjs.Nivel1Code.GDtextVidaObjects1[i].getBehavior("Text").setText(":" + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}
{for(var i = 0, len = gdjs.Nivel1Code.GDtextScoreObjects1.length ;i < len;++i) {
    gdjs.Nivel1Code.GDtextScoreObjects1[i].getBehavior("Text").setText(":" + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}
}

}


{


gdjs.Nivel1Code.eventsList12(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Direccionador"), gdjs.Nivel1Code.GDDireccionadorObjects1);
{for(var i = 0, len = gdjs.Nivel1Code.GDDireccionadorObjects1.length ;i < len;++i) {
    gdjs.Nivel1Code.GDDireccionadorObjects1[i].hide();
}
}
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Direccionador"), gdjs.Nivel1Code.GDDireccionadorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Levitadora"), gdjs.Nivel1Code.GDLevitadoraObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel1Code.mapOfGDgdjs_9546Nivel1Code_9546GDLevitadoraObjects1Objects, gdjs.Nivel1Code.mapOfGDgdjs_9546Nivel1Code_9546GDDireccionadorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel1Code.GDDireccionadorObjects1 */
/* Reuse gdjs.Nivel1Code.GDLevitadoraObjects1 */
{for(var i = 0, len = gdjs.Nivel1Code.GDLevitadoraObjects1.length ;i < len;++i) {
    gdjs.Nivel1Code.GDLevitadoraObjects1[i].returnVariable(gdjs.Nivel1Code.GDLevitadoraObjects1[i].getVariables().getFromIndex(0)).setString((( gdjs.Nivel1Code.GDDireccionadorObjects1.length === 0 ) ? "" :gdjs.Nivel1Code.GDDireccionadorObjects1[0].getBehavior("Animation").getAnimationName()));
}
}
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Levitadora"), gdjs.Nivel1Code.GDLevitadoraObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel1Code.GDLevitadoraObjects1.length;i<l;++i) {
    if ( gdjs.Nivel1Code.GDLevitadoraObjects1[i].getVariableString(gdjs.Nivel1Code.GDLevitadoraObjects1[i].getVariables().getFromIndex(0)) == "Arriba" ) {
        isConditionTrue_0 = true;
        gdjs.Nivel1Code.GDLevitadoraObjects1[k] = gdjs.Nivel1Code.GDLevitadoraObjects1[i];
        ++k;
    }
}
gdjs.Nivel1Code.GDLevitadoraObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel1Code.GDLevitadoraObjects1 */
{for(var i = 0, len = gdjs.Nivel1Code.GDLevitadoraObjects1.length ;i < len;++i) {
    gdjs.Nivel1Code.GDLevitadoraObjects1[i].setY(gdjs.Nivel1Code.GDLevitadoraObjects1[i].getY() - (1));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Levitadora"), gdjs.Nivel1Code.GDLevitadoraObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel1Code.GDLevitadoraObjects1.length;i<l;++i) {
    if ( gdjs.Nivel1Code.GDLevitadoraObjects1[i].getVariableString(gdjs.Nivel1Code.GDLevitadoraObjects1[i].getVariables().getFromIndex(0)) == "Abajo" ) {
        isConditionTrue_0 = true;
        gdjs.Nivel1Code.GDLevitadoraObjects1[k] = gdjs.Nivel1Code.GDLevitadoraObjects1[i];
        ++k;
    }
}
gdjs.Nivel1Code.GDLevitadoraObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel1Code.GDLevitadoraObjects1 */
{for(var i = 0, len = gdjs.Nivel1Code.GDLevitadoraObjects1.length ;i < len;++i) {
    gdjs.Nivel1Code.GDLevitadoraObjects1[i].setY(gdjs.Nivel1Code.GDLevitadoraObjects1[i].getY() + (1));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Levitadora"), gdjs.Nivel1Code.GDLevitadoraObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel1Code.GDLevitadoraObjects1.length;i<l;++i) {
    if ( gdjs.Nivel1Code.GDLevitadoraObjects1[i].getVariableString(gdjs.Nivel1Code.GDLevitadoraObjects1[i].getVariables().getFromIndex(0)) == "Izquierda" ) {
        isConditionTrue_0 = true;
        gdjs.Nivel1Code.GDLevitadoraObjects1[k] = gdjs.Nivel1Code.GDLevitadoraObjects1[i];
        ++k;
    }
}
gdjs.Nivel1Code.GDLevitadoraObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel1Code.GDLevitadoraObjects1 */
{for(var i = 0, len = gdjs.Nivel1Code.GDLevitadoraObjects1.length ;i < len;++i) {
    gdjs.Nivel1Code.GDLevitadoraObjects1[i].setX(gdjs.Nivel1Code.GDLevitadoraObjects1[i].getX() - (1));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Levitadora"), gdjs.Nivel1Code.GDLevitadoraObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel1Code.GDLevitadoraObjects1.length;i<l;++i) {
    if ( gdjs.Nivel1Code.GDLevitadoraObjects1[i].getVariableString(gdjs.Nivel1Code.GDLevitadoraObjects1[i].getVariables().getFromIndex(0)) == "Derecha" ) {
        isConditionTrue_0 = true;
        gdjs.Nivel1Code.GDLevitadoraObjects1[k] = gdjs.Nivel1Code.GDLevitadoraObjects1[i];
        ++k;
    }
}
gdjs.Nivel1Code.GDLevitadoraObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel1Code.GDLevitadoraObjects1 */
{for(var i = 0, len = gdjs.Nivel1Code.GDLevitadoraObjects1.length ;i < len;++i) {
    gdjs.Nivel1Code.GDLevitadoraObjects1[i].setX(gdjs.Nivel1Code.GDLevitadoraObjects1[i].getX() + (1));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("maria"), gdjs.Nivel1Code.GDmariaObjects1);
gdjs.copyArray(runtimeScene.getObjects("portal"), gdjs.Nivel1Code.GDportalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel1Code.mapOfGDgdjs_9546Nivel1Code_9546GDmariaObjects1Objects, gdjs.Nivel1Code.mapOfGDgdjs_9546Nivel1Code_9546GDportalObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel1Code.GDportalObjects1 */
{for(var i = 0, len = gdjs.Nivel1Code.GDportalObjects1.length ;i < len;++i) {
    gdjs.Nivel1Code.GDportalObjects1[i].getBehavior("Animation").setAnimationName("puerta_abierta");
}
}

{ //Subevents
gdjs.Nivel1Code.eventsList13(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Nivel1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Nivel1Code.GDsueloNievel1Objects1.length = 0;
gdjs.Nivel1Code.GDsueloNievel1Objects2.length = 0;
gdjs.Nivel1Code.GDsueloNievel1Objects3.length = 0;
gdjs.Nivel1Code.GDColisionSueloNievel1Objects1.length = 0;
gdjs.Nivel1Code.GDColisionSueloNievel1Objects2.length = 0;
gdjs.Nivel1Code.GDColisionSueloNievel1Objects3.length = 0;
gdjs.Nivel1Code.GDbackgroundBosqueObjects1.length = 0;
gdjs.Nivel1Code.GDbackgroundBosqueObjects2.length = 0;
gdjs.Nivel1Code.GDbackgroundBosqueObjects3.length = 0;
gdjs.Nivel1Code.GDMicaObjects1.length = 0;
gdjs.Nivel1Code.GDMicaObjects2.length = 0;
gdjs.Nivel1Code.GDMicaObjects3.length = 0;
gdjs.Nivel1Code.GDbackgroundNubesObjects1.length = 0;
gdjs.Nivel1Code.GDbackgroundNubesObjects2.length = 0;
gdjs.Nivel1Code.GDbackgroundNubesObjects3.length = 0;
gdjs.Nivel1Code.GDmariaObjects1.length = 0;
gdjs.Nivel1Code.GDmariaObjects2.length = 0;
gdjs.Nivel1Code.GDmariaObjects3.length = 0;
gdjs.Nivel1Code.GDMarco_9595InterfazObjects1.length = 0;
gdjs.Nivel1Code.GDMarco_9595InterfazObjects2.length = 0;
gdjs.Nivel1Code.GDMarco_9595InterfazObjects3.length = 0;
gdjs.Nivel1Code.GDinterfaz_9595vidaObjects1.length = 0;
gdjs.Nivel1Code.GDinterfaz_9595vidaObjects2.length = 0;
gdjs.Nivel1Code.GDinterfaz_9595vidaObjects3.length = 0;
gdjs.Nivel1Code.GDinterfaz_9595SthoreObjects1.length = 0;
gdjs.Nivel1Code.GDinterfaz_9595SthoreObjects2.length = 0;
gdjs.Nivel1Code.GDinterfaz_9595SthoreObjects3.length = 0;
gdjs.Nivel1Code.GDNewSpriteObjects1.length = 0;
gdjs.Nivel1Code.GDNewSpriteObjects2.length = 0;
gdjs.Nivel1Code.GDNewSpriteObjects3.length = 0;
gdjs.Nivel1Code.GDportalObjects1.length = 0;
gdjs.Nivel1Code.GDportalObjects2.length = 0;
gdjs.Nivel1Code.GDportalObjects3.length = 0;
gdjs.Nivel1Code.GDinterfaz_9595llaveObjects1.length = 0;
gdjs.Nivel1Code.GDinterfaz_9595llaveObjects2.length = 0;
gdjs.Nivel1Code.GDinterfaz_9595llaveObjects3.length = 0;
gdjs.Nivel1Code.GDtextScoreObjects1.length = 0;
gdjs.Nivel1Code.GDtextScoreObjects2.length = 0;
gdjs.Nivel1Code.GDtextScoreObjects3.length = 0;
gdjs.Nivel1Code.GDtextVidaObjects1.length = 0;
gdjs.Nivel1Code.GDtextVidaObjects2.length = 0;
gdjs.Nivel1Code.GDtextVidaObjects3.length = 0;
gdjs.Nivel1Code.GDposInicialObjects1.length = 0;
gdjs.Nivel1Code.GDposInicialObjects2.length = 0;
gdjs.Nivel1Code.GDposInicialObjects3.length = 0;
gdjs.Nivel1Code.GDthorObjects1.length = 0;
gdjs.Nivel1Code.GDthorObjects2.length = 0;
gdjs.Nivel1Code.GDthorObjects3.length = 0;
gdjs.Nivel1Code.GDllaveObjects1.length = 0;
gdjs.Nivel1Code.GDllaveObjects2.length = 0;
gdjs.Nivel1Code.GDllaveObjects3.length = 0;
gdjs.Nivel1Code.GDportalAbiertoObjects1.length = 0;
gdjs.Nivel1Code.GDportalAbiertoObjects2.length = 0;
gdjs.Nivel1Code.GDportalAbiertoObjects3.length = 0;
gdjs.Nivel1Code.GDposInicial_9595llaveObjects1.length = 0;
gdjs.Nivel1Code.GDposInicial_9595llaveObjects2.length = 0;
gdjs.Nivel1Code.GDposInicial_9595llaveObjects3.length = 0;
gdjs.Nivel1Code.GDLevitadoraObjects1.length = 0;
gdjs.Nivel1Code.GDLevitadoraObjects2.length = 0;
gdjs.Nivel1Code.GDLevitadoraObjects3.length = 0;
gdjs.Nivel1Code.GDDireccionadorObjects1.length = 0;
gdjs.Nivel1Code.GDDireccionadorObjects2.length = 0;
gdjs.Nivel1Code.GDDireccionadorObjects3.length = 0;
gdjs.Nivel1Code.GDbeeheveObjects1.length = 0;
gdjs.Nivel1Code.GDbeeheveObjects2.length = 0;
gdjs.Nivel1Code.GDbeeheveObjects3.length = 0;
gdjs.Nivel1Code.GDenemigoObjects1.length = 0;
gdjs.Nivel1Code.GDenemigoObjects2.length = 0;
gdjs.Nivel1Code.GDenemigoObjects3.length = 0;

gdjs.Nivel1Code.eventsList14(runtimeScene);
gdjs.Nivel1Code.GDsueloNievel1Objects1.length = 0;
gdjs.Nivel1Code.GDsueloNievel1Objects2.length = 0;
gdjs.Nivel1Code.GDsueloNievel1Objects3.length = 0;
gdjs.Nivel1Code.GDColisionSueloNievel1Objects1.length = 0;
gdjs.Nivel1Code.GDColisionSueloNievel1Objects2.length = 0;
gdjs.Nivel1Code.GDColisionSueloNievel1Objects3.length = 0;
gdjs.Nivel1Code.GDbackgroundBosqueObjects1.length = 0;
gdjs.Nivel1Code.GDbackgroundBosqueObjects2.length = 0;
gdjs.Nivel1Code.GDbackgroundBosqueObjects3.length = 0;
gdjs.Nivel1Code.GDMicaObjects1.length = 0;
gdjs.Nivel1Code.GDMicaObjects2.length = 0;
gdjs.Nivel1Code.GDMicaObjects3.length = 0;
gdjs.Nivel1Code.GDbackgroundNubesObjects1.length = 0;
gdjs.Nivel1Code.GDbackgroundNubesObjects2.length = 0;
gdjs.Nivel1Code.GDbackgroundNubesObjects3.length = 0;
gdjs.Nivel1Code.GDmariaObjects1.length = 0;
gdjs.Nivel1Code.GDmariaObjects2.length = 0;
gdjs.Nivel1Code.GDmariaObjects3.length = 0;
gdjs.Nivel1Code.GDMarco_9595InterfazObjects1.length = 0;
gdjs.Nivel1Code.GDMarco_9595InterfazObjects2.length = 0;
gdjs.Nivel1Code.GDMarco_9595InterfazObjects3.length = 0;
gdjs.Nivel1Code.GDinterfaz_9595vidaObjects1.length = 0;
gdjs.Nivel1Code.GDinterfaz_9595vidaObjects2.length = 0;
gdjs.Nivel1Code.GDinterfaz_9595vidaObjects3.length = 0;
gdjs.Nivel1Code.GDinterfaz_9595SthoreObjects1.length = 0;
gdjs.Nivel1Code.GDinterfaz_9595SthoreObjects2.length = 0;
gdjs.Nivel1Code.GDinterfaz_9595SthoreObjects3.length = 0;
gdjs.Nivel1Code.GDNewSpriteObjects1.length = 0;
gdjs.Nivel1Code.GDNewSpriteObjects2.length = 0;
gdjs.Nivel1Code.GDNewSpriteObjects3.length = 0;
gdjs.Nivel1Code.GDportalObjects1.length = 0;
gdjs.Nivel1Code.GDportalObjects2.length = 0;
gdjs.Nivel1Code.GDportalObjects3.length = 0;
gdjs.Nivel1Code.GDinterfaz_9595llaveObjects1.length = 0;
gdjs.Nivel1Code.GDinterfaz_9595llaveObjects2.length = 0;
gdjs.Nivel1Code.GDinterfaz_9595llaveObjects3.length = 0;
gdjs.Nivel1Code.GDtextScoreObjects1.length = 0;
gdjs.Nivel1Code.GDtextScoreObjects2.length = 0;
gdjs.Nivel1Code.GDtextScoreObjects3.length = 0;
gdjs.Nivel1Code.GDtextVidaObjects1.length = 0;
gdjs.Nivel1Code.GDtextVidaObjects2.length = 0;
gdjs.Nivel1Code.GDtextVidaObjects3.length = 0;
gdjs.Nivel1Code.GDposInicialObjects1.length = 0;
gdjs.Nivel1Code.GDposInicialObjects2.length = 0;
gdjs.Nivel1Code.GDposInicialObjects3.length = 0;
gdjs.Nivel1Code.GDthorObjects1.length = 0;
gdjs.Nivel1Code.GDthorObjects2.length = 0;
gdjs.Nivel1Code.GDthorObjects3.length = 0;
gdjs.Nivel1Code.GDllaveObjects1.length = 0;
gdjs.Nivel1Code.GDllaveObjects2.length = 0;
gdjs.Nivel1Code.GDllaveObjects3.length = 0;
gdjs.Nivel1Code.GDportalAbiertoObjects1.length = 0;
gdjs.Nivel1Code.GDportalAbiertoObjects2.length = 0;
gdjs.Nivel1Code.GDportalAbiertoObjects3.length = 0;
gdjs.Nivel1Code.GDposInicial_9595llaveObjects1.length = 0;
gdjs.Nivel1Code.GDposInicial_9595llaveObjects2.length = 0;
gdjs.Nivel1Code.GDposInicial_9595llaveObjects3.length = 0;
gdjs.Nivel1Code.GDLevitadoraObjects1.length = 0;
gdjs.Nivel1Code.GDLevitadoraObjects2.length = 0;
gdjs.Nivel1Code.GDLevitadoraObjects3.length = 0;
gdjs.Nivel1Code.GDDireccionadorObjects1.length = 0;
gdjs.Nivel1Code.GDDireccionadorObjects2.length = 0;
gdjs.Nivel1Code.GDDireccionadorObjects3.length = 0;
gdjs.Nivel1Code.GDbeeheveObjects1.length = 0;
gdjs.Nivel1Code.GDbeeheveObjects2.length = 0;
gdjs.Nivel1Code.GDbeeheveObjects3.length = 0;
gdjs.Nivel1Code.GDenemigoObjects1.length = 0;
gdjs.Nivel1Code.GDenemigoObjects2.length = 0;
gdjs.Nivel1Code.GDenemigoObjects3.length = 0;


return;

}

gdjs['Nivel1Code'] = gdjs.Nivel1Code;
