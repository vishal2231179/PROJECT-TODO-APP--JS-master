const popup = () => {
  document.getElementById("main-content").style.filter = "brightness(25%)";
  document.getElementById("pop-up").style.visibility = "visible";
};
document.getElementById("plus_btn").addEventListener("click", popup);
const close = () => {
  document.getElementById("main-content").style.filter = "none";
  document.getElementById("pop-up").style.visibility = "hidden";
};
document.getElementById("close").addEventListener("click", close);
arr = [];
function addbtn() {
  random = arr.length;
  arr.push(random);
  let inputtext = document.getElementById("text").value;
  let newdiv = document.createElement("div");
  newdiv.className = "box";
  newdiv.style.height = "270px";
  newdiv.style.height = "260px";
  newdiv.style.padding = "1rem";
  newdiv.innerHTML = `<h2 style="color:#00A5EC;margin:5px" onclick="open_list(event)" id="item_title${
    arr[arr.length - 1]
  }">${inputtext}</h2> <hr> <div id="item_List_${
    arr[arr.length - 1]
  }"> </div><div id="add_new" style="position:relative;"> <span class="material-symbols-rounded" style="color: #00A5EC; font-size: 40px;" onclick="add_item(event)" id="add_btn_box_${
    arr[arr.length - 1]
  }" class="sc">add_circle</span> <span class="material-symbols-outlined del" style="color: red; font-size: 40px;" onclick="del(event)" id="del_btn_box_${
    arr[arr.length - 1]
  }">delete</span> </div>`;
  document.getElementById("container").appendChild(newdiv);
}
document.getElementById("add_btn").addEventListener("click", addbtn);
document.getElementById("add_btn").addEventListener("click", close);

function del(event) {
  var x = event.target.id;
  document.getElementById(`${x}`).parentElement.parentElement.remove();
  console.log(document.getElementById("container").childElementCount);
  // if (document.getElementById("container").childElementCount === 0) {
  //   document.getElementById("noTask").style.visibility = "visible";
  // }
}
var add_Id;
function add_item(event) {
  document.getElementById("main-content").style.filter = "brightness(30%)";
  document.getElementById("pop-up2").style.visibility = "visible";
  add_Id = event.target.id;
}

document.getElementById("add_btn2").addEventListener("click", close);

const close2 = () => {
  document.getElementById("main-content").style.filter = "none";
  document.getElementById("pop-up2").style.visibility = "hidden";
};
document.getElementById("close2").addEventListener("click", close2);
arr2 = [];
const newTaskAdd = () => {
  b = arr2.length;
  arr2.push(b);
  let t = document.getElementById("text").value;
  let b_d = document.getElementById(`${add_Id}`).parentElement.parentElement;
  b_d.children[2].innerHTML =
    `${b_d.children[2].innerHTML}` +
    `<div id="item_${
      arr2[arr2.length - 1]
    }" class="item"><button style="background-color:#FFF455; border-style:double; border-color:black; border-radius:10px;margin:10px;padding:10px;" id="markdone_${
      arr2[arr2.length - 1]
    }"onclick="markdone(event)">MarkDone</button ><span>${t}</span ></div>`;
  if (typeof document.getElementById("newDiv") != "undefined") {
    b_d = document.getElementById(`newDiv`);
    b_d.children[2].innerHTML =
      `${b_d.children[2].innerHTML}` +
      `<div id="item_${
        arr2[arr2.length - 1]
      }" class="item"> <button style="background-color:skyblue;border-radius:10px;margin:10px;padding:10px;" id="markdone_${
        arr2[arr2.length - 1]
      }"onclick="markdone(event)">MarkDone</button ><span>${t}</span ></div>`;
  }
};
document.getElementById("add_btn2").addEventListener("click", newTaskAdd);
document.getElementById("add_btn2").addEventListener("click", close2);

const markdone = (event) => {
  var z = event.target.id;
  var c = document.getElementById(`${z}`);
  c.parentElement.children[1].style.textDecoration = "line-through";
};
const open_list = (event) => {
  var t = event.target.id;
  var par = document.getElementById(t).parentElement;
  arr3 = [];
  for (var i = 0; i < par.childElementCount; i++) {
    var val = par.children[i].cloneNode(true);
    window["child" + i] = val;
    arr3.push(window["child" + i]);
  }
  document.getElementById("container").style.display = "none";

  let ndiv = document.createElement("div");
  ndiv.className = "box";
  ndiv.id = "newDiv";
  ndiv.style.minheight = "260px";
  ndiv.style.width = "270px";
  ndiv.style.padding = "1rem";
  ndiv.style.backgroundColor = "white";
  ndiv.appendChild(arr3[0]);
  ndiv.appendChild(arr3[1]);
  ndiv.appendChild(arr3[2]);
  ndiv.appendChild(arr3[3]);
  document.getElementById("con_box").appendChild(ndiv);
  var txt = ndiv.children[0].innerText;
  ndiv.children[0].innerHTML = `<h2 style="color:#00A5EC;margin:5px">${txt}</h2>`;
  var back = document.createElement("div");
  back.innerHTML = `<span id='backBtn' class="material-symbols-outlined" style="font-size: 42px;color: grey; float:left" onclick="Back(event)"> arrow_back</span> <span id='bText' style="font-size: 40px">Back<span>`;
  document.getElementById("plus-icon").innerHTML = `${back.innerHTML}  ${
    document.getElementById("plus-icon").innerHTML
  }`;
  ndiv.parentElement.style.display = "flex";
  ndiv.parentElement.style.justifyContent = "center";
};
const Back = (event) => {
  document.getElementById("backBtn").remove();
  document.getElementById("bText").remove();
  document.getElementById("con_box").innerHTML = "";
  document.getElementById("container").style.display = "block";
};
