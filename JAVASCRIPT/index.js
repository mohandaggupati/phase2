
var ideandexedDB=window.indexedDB||window.mozIndexedDB||window.webKitindexDB||window.msIndexedDB;
indexedDB?console.log("Success"):console.log("browser not supported");

var request=indexedDB.open("DBMS",1);
var result;
var store;
console.log(request);

request.onupgradeneeded=function (e) {
result =e.target.result;
store=result.createObjectStore("resume",{keyPath:'Id',autoIncrement:true});
}

//on success
 request.onsuccess=function (e) {
  console.log("reached successfully");
 result=e.target.result;
 var tx=result.transaction("resume","readwrite");
store=tx.objectStore("resume");
var gettingData =store.getAll();


  gettingData.onsuccess=function (getdata) {
    console.log(getdata.target.result);
    Profile(getdata.target.result);
  }

  var cards=document.querySelector('.cards');
  function Profile(getprofile) {
    for(i in getprofile){
      let card=document.createElement("div");
      card.classList.add("card");
      cards.appendChild(card);
      let image=document.createElement("img");
      image.src="download.png";
      image.alt="profile";
      card.appendChild(image);

      let a=document.createElement("a");
      a.href="resume.html?Id="+getprofile[i].Id;
      card.appendChild(a);

      let name=document.createElement("h2");
    name.textContent=getprofile[i].name;
      a.appendChild(name);
      let roll=document.createElement("h2");
    roll.textContent=getprofile[i].roll;
      card.appendChild(roll);

      let phone=document.createElement("h4");
  phone.textContent=getprofile[i].phone;
      card.appendChild(phone);

      let mail=document.createElement("h5");
    mail.textContent=getprofile[i].mail;
      card.appendChild(mail);






    }


    }

  }
