gdjs.perdisteCode = {};
gdjs.perdisteCode.localVariables = [];
gdjs.perdisteCode.idToCallbackMap = new Map();
gdjs.perdisteCode.GDTxt_9595PerdistaObjects1= [];
gdjs.perdisteCode.GDTxt_9595PerdistaObjects2= [];
gdjs.perdisteCode.GDTxt_9595PerdistaObjects3= [];
gdjs.perdisteCode.GDNewSprite2Objects1= [];
gdjs.perdisteCode.GDNewSprite2Objects2= [];
gdjs.perdisteCode.GDNewSprite2Objects3= [];
gdjs.perdisteCode.GDNewSprite3Objects1= [];
gdjs.perdisteCode.GDNewSprite3Objects2= [];
gdjs.perdisteCode.GDNewSprite3Objects3= [];
gdjs.perdisteCode.GDNewSprite4Objects1= [];
gdjs.perdisteCode.GDNewSprite4Objects2= [];
gdjs.perdisteCode.GDNewSprite4Objects3= [];
gdjs.perdisteCode.GDMicaObjects1= [];
gdjs.perdisteCode.GDMicaObjects2= [];
gdjs.perdisteCode.GDMicaObjects3= [];
gdjs.perdisteCode.GDbackgroundNubesObjects1= [];
gdjs.perdisteCode.GDbackgroundNubesObjects2= [];
gdjs.perdisteCode.GDbackgroundNubesObjects3= [];
gdjs.perdisteCode.GDmariaObjects1= [];
gdjs.perdisteCode.GDmariaObjects2= [];
gdjs.perdisteCode.GDmariaObjects3= [];
gdjs.perdisteCode.GDMarco_9595InterfazObjects1= [];
gdjs.perdisteCode.GDMarco_9595InterfazObjects2= [];
gdjs.perdisteCode.GDMarco_9595InterfazObjects3= [];
gdjs.perdisteCode.GDinterfaz_9595vidaObjects1= [];
gdjs.perdisteCode.GDinterfaz_9595vidaObjects2= [];
gdjs.perdisteCode.GDinterfaz_9595vidaObjects3= [];
gdjs.perdisteCode.GDinterfaz_9595SthoreObjects1= [];
gdjs.perdisteCode.GDinterfaz_9595SthoreObjects2= [];
gdjs.perdisteCode.GDinterfaz_9595SthoreObjects3= [];
gdjs.perdisteCode.GDNewSpriteObjects1= [];
gdjs.perdisteCode.GDNewSpriteObjects2= [];
gdjs.perdisteCode.GDNewSpriteObjects3= [];
gdjs.perdisteCode.GDportalObjects1= [];
gdjs.perdisteCode.GDportalObjects2= [];
gdjs.perdisteCode.GDportalObjects3= [];
gdjs.perdisteCode.GDinterfaz_9595llaveObjects1= [];
gdjs.perdisteCode.GDinterfaz_9595llaveObjects2= [];
gdjs.perdisteCode.GDinterfaz_9595llaveObjects3= [];
gdjs.perdisteCode.GDtextScoreObjects1= [];
gdjs.perdisteCode.GDtextScoreObjects2= [];
gdjs.perdisteCode.GDtextScoreObjects3= [];
gdjs.perdisteCode.GDtextVidaObjects1= [];
gdjs.perdisteCode.GDtextVidaObjects2= [];
gdjs.perdisteCode.GDtextVidaObjects3= [];
gdjs.perdisteCode.GDposInicialObjects1= [];
gdjs.perdisteCode.GDposInicialObjects2= [];
gdjs.perdisteCode.GDposInicialObjects3= [];
gdjs.perdisteCode.GDthorObjects1= [];
gdjs.perdisteCode.GDthorObjects2= [];
gdjs.perdisteCode.GDthorObjects3= [];
gdjs.perdisteCode.GDllaveObjects1= [];
gdjs.perdisteCode.GDllaveObjects2= [];
gdjs.perdisteCode.GDllaveObjects3= [];
gdjs.perdisteCode.GDportalAbiertoObjects1= [];
gdjs.perdisteCode.GDportalAbiertoObjects2= [];
gdjs.perdisteCode.GDportalAbiertoObjects3= [];
gdjs.perdisteCode.GDposInicial_9595llaveObjects1= [];
gdjs.perdisteCode.GDposInicial_9595llaveObjects2= [];
gdjs.perdisteCode.GDposInicial_9595llaveObjects3= [];
gdjs.perdisteCode.GDLevitadoraObjects1= [];
gdjs.perdisteCode.GDLevitadoraObjects2= [];
gdjs.perdisteCode.GDLevitadoraObjects3= [];
gdjs.perdisteCode.GDDireccionadorObjects1= [];
gdjs.perdisteCode.GDDireccionadorObjects2= [];
gdjs.perdisteCode.GDDireccionadorObjects3= [];
gdjs.perdisteCode.GDbeeheveObjects1= [];
gdjs.perdisteCode.GDbeeheveObjects2= [];
gdjs.perdisteCode.GDbeeheveObjects3= [];
gdjs.perdisteCode.GDenemigoObjects1= [];
gdjs.perdisteCode.GDenemigoObjects2= [];
gdjs.perdisteCode.GDenemigoObjects3= [];


gdjs.perdisteCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
}

}


};gdjs.perdisteCode.asyncCallback10672540 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.perdisteCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Nivel1", false);
}
{gdjs.evtTools.sound.playMusic(runtimeScene, "perdiste.wav", true, 35, 1);
}

{ //Subevents
gdjs.perdisteCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.perdisteCode.localVariables.length = 0;
}
gdjs.perdisteCode.idToCallbackMap.set(10672540, gdjs.perdisteCode.asyncCallback10672540);
gdjs.perdisteCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.perdisteCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.perdisteCode.asyncCallback10672540(runtimeScene, asyncObjectsList)), 10672540, asyncObjectsList);
}
}

}


};gdjs.perdisteCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.perdisteCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.perdisteCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.perdisteCode.GDTxt_9595PerdistaObjects1.length = 0;
gdjs.perdisteCode.GDTxt_9595PerdistaObjects2.length = 0;
gdjs.perdisteCode.GDTxt_9595PerdistaObjects3.length = 0;
gdjs.perdisteCode.GDNewSprite2Objects1.length = 0;
gdjs.perdisteCode.GDNewSprite2Objects2.length = 0;
gdjs.perdisteCode.GDNewSprite2Objects3.length = 0;
gdjs.perdisteCode.GDNewSprite3Objects1.length = 0;
gdjs.perdisteCode.GDNewSprite3Objects2.length = 0;
gdjs.perdisteCode.GDNewSprite3Objects3.length = 0;
gdjs.perdisteCode.GDNewSprite4Objects1.length = 0;
gdjs.perdisteCode.GDNewSprite4Objects2.length = 0;
gdjs.perdisteCode.GDNewSprite4Objects3.length = 0;
gdjs.perdisteCode.GDMicaObjects1.length = 0;
gdjs.perdisteCode.GDMicaObjects2.length = 0;
gdjs.perdisteCode.GDMicaObjects3.length = 0;
gdjs.perdisteCode.GDbackgroundNubesObjects1.length = 0;
gdjs.perdisteCode.GDbackgroundNubesObjects2.length = 0;
gdjs.perdisteCode.GDbackgroundNubesObjects3.length = 0;
gdjs.perdisteCode.GDmariaObjects1.length = 0;
gdjs.perdisteCode.GDmariaObjects2.length = 0;
gdjs.perdisteCode.GDmariaObjects3.length = 0;
gdjs.perdisteCode.GDMarco_9595InterfazObjects1.length = 0;
gdjs.perdisteCode.GDMarco_9595InterfazObjects2.length = 0;
gdjs.perdisteCode.GDMarco_9595InterfazObjects3.length = 0;
gdjs.perdisteCode.GDinterfaz_9595vidaObjects1.length = 0;
gdjs.perdisteCode.GDinterfaz_9595vidaObjects2.length = 0;
gdjs.perdisteCode.GDinterfaz_9595vidaObjects3.length = 0;
gdjs.perdisteCode.GDinterfaz_9595SthoreObjects1.length = 0;
gdjs.perdisteCode.GDinterfaz_9595SthoreObjects2.length = 0;
gdjs.perdisteCode.GDinterfaz_9595SthoreObjects3.length = 0;
gdjs.perdisteCode.GDNewSpriteObjects1.length = 0;
gdjs.perdisteCode.GDNewSpriteObjects2.length = 0;
gdjs.perdisteCode.GDNewSpriteObjects3.length = 0;
gdjs.perdisteCode.GDportalObjects1.length = 0;
gdjs.perdisteCode.GDportalObjects2.length = 0;
gdjs.perdisteCode.GDportalObjects3.length = 0;
gdjs.perdisteCode.GDinterfaz_9595llaveObjects1.length = 0;
gdjs.perdisteCode.GDinterfaz_9595llaveObjects2.length = 0;
gdjs.perdisteCode.GDinterfaz_9595llaveObjects3.length = 0;
gdjs.perdisteCode.GDtextScoreObjects1.length = 0;
gdjs.perdisteCode.GDtextScoreObjects2.length = 0;
gdjs.perdisteCode.GDtextScoreObjects3.length = 0;
gdjs.perdisteCode.GDtextVidaObjects1.length = 0;
gdjs.perdisteCode.GDtextVidaObjects2.length = 0;
gdjs.perdisteCode.GDtextVidaObjects3.length = 0;
gdjs.perdisteCode.GDposInicialObjects1.length = 0;
gdjs.perdisteCode.GDposInicialObjects2.length = 0;
gdjs.perdisteCode.GDposInicialObjects3.length = 0;
gdjs.perdisteCode.GDthorObjects1.length = 0;
gdjs.perdisteCode.GDthorObjects2.length = 0;
gdjs.perdisteCode.GDthorObjects3.length = 0;
gdjs.perdisteCode.GDllaveObjects1.length = 0;
gdjs.perdisteCode.GDllaveObjects2.length = 0;
gdjs.perdisteCode.GDllaveObjects3.length = 0;
gdjs.perdisteCode.GDportalAbiertoObjects1.length = 0;
gdjs.perdisteCode.GDportalAbiertoObjects2.length = 0;
gdjs.perdisteCode.GDportalAbiertoObjects3.length = 0;
gdjs.perdisteCode.GDposInicial_9595llaveObjects1.length = 0;
gdjs.perdisteCode.GDposInicial_9595llaveObjects2.length = 0;
gdjs.perdisteCode.GDposInicial_9595llaveObjects3.length = 0;
gdjs.perdisteCode.GDLevitadoraObjects1.length = 0;
gdjs.perdisteCode.GDLevitadoraObjects2.length = 0;
gdjs.perdisteCode.GDLevitadoraObjects3.length = 0;
gdjs.perdisteCode.GDDireccionadorObjects1.length = 0;
gdjs.perdisteCode.GDDireccionadorObjects2.length = 0;
gdjs.perdisteCode.GDDireccionadorObjects3.length = 0;
gdjs.perdisteCode.GDbeeheveObjects1.length = 0;
gdjs.perdisteCode.GDbeeheveObjects2.length = 0;
gdjs.perdisteCode.GDbeeheveObjects3.length = 0;
gdjs.perdisteCode.GDenemigoObjects1.length = 0;
gdjs.perdisteCode.GDenemigoObjects2.length = 0;
gdjs.perdisteCode.GDenemigoObjects3.length = 0;

gdjs.perdisteCode.eventsList2(runtimeScene);
gdjs.perdisteCode.GDTxt_9595PerdistaObjects1.length = 0;
gdjs.perdisteCode.GDTxt_9595PerdistaObjects2.length = 0;
gdjs.perdisteCode.GDTxt_9595PerdistaObjects3.length = 0;
gdjs.perdisteCode.GDNewSprite2Objects1.length = 0;
gdjs.perdisteCode.GDNewSprite2Objects2.length = 0;
gdjs.perdisteCode.GDNewSprite2Objects3.length = 0;
gdjs.perdisteCode.GDNewSprite3Objects1.length = 0;
gdjs.perdisteCode.GDNewSprite3Objects2.length = 0;
gdjs.perdisteCode.GDNewSprite3Objects3.length = 0;
gdjs.perdisteCode.GDNewSprite4Objects1.length = 0;
gdjs.perdisteCode.GDNewSprite4Objects2.length = 0;
gdjs.perdisteCode.GDNewSprite4Objects3.length = 0;
gdjs.perdisteCode.GDMicaObjects1.length = 0;
gdjs.perdisteCode.GDMicaObjects2.length = 0;
gdjs.perdisteCode.GDMicaObjects3.length = 0;
gdjs.perdisteCode.GDbackgroundNubesObjects1.length = 0;
gdjs.perdisteCode.GDbackgroundNubesObjects2.length = 0;
gdjs.perdisteCode.GDbackgroundNubesObjects3.length = 0;
gdjs.perdisteCode.GDmariaObjects1.length = 0;
gdjs.perdisteCode.GDmariaObjects2.length = 0;
gdjs.perdisteCode.GDmariaObjects3.length = 0;
gdjs.perdisteCode.GDMarco_9595InterfazObjects1.length = 0;
gdjs.perdisteCode.GDMarco_9595InterfazObjects2.length = 0;
gdjs.perdisteCode.GDMarco_9595InterfazObjects3.length = 0;
gdjs.perdisteCode.GDinterfaz_9595vidaObjects1.length = 0;
gdjs.perdisteCode.GDinterfaz_9595vidaObjects2.length = 0;
gdjs.perdisteCode.GDinterfaz_9595vidaObjects3.length = 0;
gdjs.perdisteCode.GDinterfaz_9595SthoreObjects1.length = 0;
gdjs.perdisteCode.GDinterfaz_9595SthoreObjects2.length = 0;
gdjs.perdisteCode.GDinterfaz_9595SthoreObjects3.length = 0;
gdjs.perdisteCode.GDNewSpriteObjects1.length = 0;
gdjs.perdisteCode.GDNewSpriteObjects2.length = 0;
gdjs.perdisteCode.GDNewSpriteObjects3.length = 0;
gdjs.perdisteCode.GDportalObjects1.length = 0;
gdjs.perdisteCode.GDportalObjects2.length = 0;
gdjs.perdisteCode.GDportalObjects3.length = 0;
gdjs.perdisteCode.GDinterfaz_9595llaveObjects1.length = 0;
gdjs.perdisteCode.GDinterfaz_9595llaveObjects2.length = 0;
gdjs.perdisteCode.GDinterfaz_9595llaveObjects3.length = 0;
gdjs.perdisteCode.GDtextScoreObjects1.length = 0;
gdjs.perdisteCode.GDtextScoreObjects2.length = 0;
gdjs.perdisteCode.GDtextScoreObjects3.length = 0;
gdjs.perdisteCode.GDtextVidaObjects1.length = 0;
gdjs.perdisteCode.GDtextVidaObjects2.length = 0;
gdjs.perdisteCode.GDtextVidaObjects3.length = 0;
gdjs.perdisteCode.GDposInicialObjects1.length = 0;
gdjs.perdisteCode.GDposInicialObjects2.length = 0;
gdjs.perdisteCode.GDposInicialObjects3.length = 0;
gdjs.perdisteCode.GDthorObjects1.length = 0;
gdjs.perdisteCode.GDthorObjects2.length = 0;
gdjs.perdisteCode.GDthorObjects3.length = 0;
gdjs.perdisteCode.GDllaveObjects1.length = 0;
gdjs.perdisteCode.GDllaveObjects2.length = 0;
gdjs.perdisteCode.GDllaveObjects3.length = 0;
gdjs.perdisteCode.GDportalAbiertoObjects1.length = 0;
gdjs.perdisteCode.GDportalAbiertoObjects2.length = 0;
gdjs.perdisteCode.GDportalAbiertoObjects3.length = 0;
gdjs.perdisteCode.GDposInicial_9595llaveObjects1.length = 0;
gdjs.perdisteCode.GDposInicial_9595llaveObjects2.length = 0;
gdjs.perdisteCode.GDposInicial_9595llaveObjects3.length = 0;
gdjs.perdisteCode.GDLevitadoraObjects1.length = 0;
gdjs.perdisteCode.GDLevitadoraObjects2.length = 0;
gdjs.perdisteCode.GDLevitadoraObjects3.length = 0;
gdjs.perdisteCode.GDDireccionadorObjects1.length = 0;
gdjs.perdisteCode.GDDireccionadorObjects2.length = 0;
gdjs.perdisteCode.GDDireccionadorObjects3.length = 0;
gdjs.perdisteCode.GDbeeheveObjects1.length = 0;
gdjs.perdisteCode.GDbeeheveObjects2.length = 0;
gdjs.perdisteCode.GDbeeheveObjects3.length = 0;
gdjs.perdisteCode.GDenemigoObjects1.length = 0;
gdjs.perdisteCode.GDenemigoObjects2.length = 0;
gdjs.perdisteCode.GDenemigoObjects3.length = 0;


return;

}

gdjs['perdisteCode'] = gdjs.perdisteCode;
