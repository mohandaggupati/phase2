var query=window.location.search.substring(1).split("?");
var data;
query.map((data)=>{
  let split=query.split("=");
data=  parseInt(split[1]);
});
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
store.get(data);
var getExact=store.get(data);
getExact.onsuccess=function (e) {
console.log(get.target.result);
pro(get.target.result);
}
var left=document.querySelector(".left");
var right=document.querySelector(".right");

function pro(profile) {
var img=document.createElement("img");
image.src="#";
image.alt="profile";
left.appendChild(image);



}
}
