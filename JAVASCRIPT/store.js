function submit() {
var carrer=document.getElementById('carrer').value;
var name=document.getElementById('name').value;
 var roll=document.getElementById('roll').value;
 var phone=document.getElementById('phone').value;
 var mail =document.getElementById('mail').value;
 var degree=document.getElementById('degree').value;
 var dcollege=document.getElementById('dcollege').value;
var dbranch=document.getElementById('dbranch').value;
 var dmarks=document.getElementById('dmarks').value;
 var idegree=document.getElementById('idegree').value;
 var icollege=document.getElementById('icollege').value;
 var ibranch=document.getElementById('ibranch').value;
 var imarks=document.getElementById('imarks').value;
 var board=document.getElementById('board').value;
 var school=document.getElementById('school').value;
 var medium=document.getElementById('medium').value;
 var smarks=document.getElementById('smarks').value;
var skills =document.getElementById('skills').value;



var ideandexedDB=window.indexedDB||window.mozIndexedDB||window.webKitindexDB||window.msIndexedDB;
indexedDB?console.log("Success"):console.log("browser not supported");

var request=indexedDB.open("DBMS",1);
var result;
var store;
console.log(request);

request.onupgradeneeded=function (e) {
result =e.target.result;
store=result.createObjectStore("resume",{KeyPath:'Id',autoIncrement:true});
}

//on success
 request.onsuccess=function (e) {
  console.log("reached successfully");
 result=e.target.result;
 var tx=result.transaction("resume","readwrite");
store=tx.objectStore("resume");
store.put({
  co:carrer,
  name:name,
  roll:roll,
  phone:phone,
  mail:mail,
  degree:degree,
  dcollege:dcollege,
  dbranch:dbranch,
  dmarks:dmarks,
  idegree:idegree,
  icollege:icollege,
  ibranch:ibranch,
  imarks:imarks,
  board:board,
  school:school,
  medium:medium,
  smarks:smarks,
  skills:skills
});
}

//on error
request.onerror=function (e) {
  console.log("error"+e);

}
window.open("index.html","_self");

}
