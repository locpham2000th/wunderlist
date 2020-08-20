// window.onload = function()
// {
//   //nền đen 
//   var listmenu= document.getElementsByClassName("list-menu")[0];
//   var y =  document.getElementById("seach2-1");
//   var z = document.getElementsByClassName("background-color-black")[0];
//   var a=document.getElementsByClassName("account-setting")[0];
//   document.getElementById("seach2-1").addEventListener("click",function(){
//     if( listmenu.style.display === "none" ){
//       listmenu.style.display = "block";
//       z.style.display = "block";
//       }else{
//       listmenu.style.display = "none";
//       }
//     })
// //close clumright
// document.getElementsByClassName("seach10-1")[0].addEventListener("click", function(){
// clumright.style.display = "none";
// between.style.marginRight = "0px";
// })

// //mất các cửa sổ
// document.getElementsByTagName("body")[0].addEventListener("click", function(){
//   listmenu.style.display = "none";
//   // z.style.display = "none";
//   document.getElementsByClassName("search10")[0].style.display="none";
//   document.getElementsByClassName("search11")[0].style.display="none";
//   document.getElementsByClassName("search12")[0].style.display="none";
//   document.getElementsByClassName("search13")[0].style.display="none";
// },true)

// //hiển thị account setting
// document.getElementsByClassName("show-account")[0].addEventListener("click", function(){
//   document.getElementsByClassName('list-menu')[0].style.display = 'none';  
//   a.style.display="block";
//   z.style.display= "block";
// })
// // hiển thị tọa độ
// document.getElementsByTagName("body")[0].addEventListener("click", function(){
//   var x = event.clientX;
//   var y = event.clientY;
//   var coords = "X coords: " + x + ", Y coords: " + y;
//   //document.getElementsByClassName("seach9")[0].innerHTML = coords;
// })
//   var b = document.getElementsByClassName("hide-account")[0];
//   var c = document.getElementsByClassName("account-setting")[0];
//   b.addEventListener("click", function() {
//       c.style.display = "none";
//       z.style.display = "none";
//   })
//   var showcreatelist=document.getElementsByClassName("create-new-list")[0];
//   document.getElementsByClassName("abc")[0].addEventListener("click",function(){
//     showcreatelist.style.display ="block";
//     z.parentElement.style.display = "block";
//     z.style.display = "block";
//   })
//   var hidecreatenewlistbycancle=document.getElementsByClassName("bottom-create-new-list-cancle")[0];
//   hidecreatenewlistbycancle.addEventListener("click",function(){
//   document.getElementsByClassName("create-new-list")[0].style.display = "none";
//   z.style.display = "none";
//   })
//   var clickseach1=document.getElementById("seach1-1");
//   var hideclumleft=document.getElementById("clumleft");
//   var hide = document.getElementsByClassName("hide");
//   clickseach1.addEventListener("click",function(){
// for( let i = 0; i < hide.length; i++ ) {

//     if(hide[i].style.display === "none"){
//       hide[i].style.display = "block";
//       hideclumleft.style = "280px";
//      }else{
//       hide[i].style.display = "none";
//       hideclumleft.style.width = "42px";
//     }
//   }
// })
// var clickstar=document.getElementById("starred");
//   clickstar.addEventListener("click",function(){
//     document.querySelector("#text-starred text").innerHTML="Star";
//   })
//   //sự kiện tạo ra crew list
//   var newlist=document.getElementsByClassName("inboxcopy")[0];
//   var hidecreatenewlistbysave=document.getElementsByClassName("bottom-create-new-list-save")[0];
//   hidecreatenewlistbysave.addEventListener("click",function(){
//     if(document.getElementsByClassName("text-crew-list")[0].value.trim().length > 0){
//     var clone=newlist.cloneNode(true);
//      var b = document.getElementsByClassName("lists")[0].appendChild(clone);
//      var c = document.getElementsByClassName("text-crew-list")[0];
//      clone.children[1].children[0].innerHTML=c.value;
//       }    
//       else{
//         alert("ban can nhap du lieu");
//       }
//     })
//   //enter để tạo crew list
//   var entercrewlist=document.getElementsByClassName("text-crew-list")[0];
//   entercrewlist.addEventListener("keyup",function(e){
//     if(e.keyCode ==13){
//    if(document.getElementsByClassName("text-crew-list")[0].value.trim().length > 0){
//      var clone=newlist.cloneNode(true);
//      var b = document.getElementsByClassName("lists")[0].appendChild(clone);
//      var c = document.getElementsByClassName("text-crew-list")[0];
//      clone.children[1].children[0].innerHTML=c.value;
//      clone.addEventListener("contextmenu", deleteleftlist );
//      clone.addEventListener("click", deleleft1);
//      c.value = "";
//     }
//     else{
//       alert("ban hay nhap du lieu");
//     }
//   }
//   })


// // create list of task item
// var search = [];
// var ids = [];
// var tasks = [];
// var idt = [];
// console.log(tasks);
//   //emter để tạo thêm các list
//   var maxInNumbers = 0;
//   var maxInNumbersearch = 0;
//   var entercrewlistmain=document.getElementsByClassName("seach6-1-2")[0];
//   var newlistmain=document.getElementsByClassName("seach6-2-1")[0];
//   entercrewlistmain.addEventListener("keyup",function(e){
//     if( e.keyCode  === 13 ) {
//       if(entercrewlistmain.value.trim().length > 0){
      
//       var c = document.getElementsByClassName("seach6-1-2")[0];
//       var newItem = {id: maxInNumbers + 1, name : c.value};
//       var idtItem = idt.length + 1;
//       idt.push(idtItem);
//       tasks.push(newItem);
//       console.log(tasks);
//       // console.log(tasks.id);
//       maxInNumbers = Math.max.apply( Number , idt );
//       console.log(maxInNumbers);
//       tasks.sort(function( a , b ) {
//         var n1 = a.name.toLowerCase();
//         var n2 = b.name.toLowerCase();
//           if( n1 < n2){
//             return -1;
//           }
//           if( n1 > n2 ){
//             return 1;
//           }
//           return 0;
//       })
//       showTasks(tasks);
//       c.value = "";
//       }
//       else{
//         alert("hay nhap du lieu");
//       }
//     }
//   })
//   //sắp xếp ngược
//   document.getElementsByClassName("sort")[0].addEventListener("click", function(){
//     console.log("nhận sự kiện sort");
//     tasks.reverse();
//     showTasks(tasks);
//   })

  //tim kiem 
  var task2 = tasks;
  var elemen = document.getElementById("seach1-2");
  document.getElementById("seach1-2").addEventListener("keyup", function(e){
    if( e.keyCode === 13 ) {
      if(elemen.value.trim().length > 0){
        // tasks.forEach( (item2) => {
          
        // } )
        console.log(elemen.value);
        // console.log(tasks.name[1]);
        tasks = tasks.filter((task) => {
            return task.name.indexOf(elemen.value) >= 0;
        })
        // var idx = tasks.indexOf(elemen.value);
        // console.log(idx);
        // console.log(ids);
        // var newsearch = idx
        showTasks(tasks);
        // while ( idx != -1 ) {
        //   ids.push(idx);
        //   idx = tasks.indexOf( elemen, idx + 1 );
        // }
        // console.log(ids);
      }else{
        showTasks(task2);
      }
    }
  })

//   function showsearch(search1) {
//     search1.forEach( (item) => {
//       let pana = document.createElement("div");
//       para.innerHTML=` <div class="seach6-2-1">
//         <div class="seach6-2-1-1">
//               <svg class="task-check" width="10px" height="10px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg>
//         </div>
//         <text class="sapxep1">` + item.name + `</text>
//         <span class= "idarry" >`+ item.id +`</span>
//         <div class="seach6-2-1-2 star-red"> 
//               <svg width="18px" height="18px" class="starwhite" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"> <g> <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path> </g> </svg>
//               <svg width="36px" height="44px" fill="red" class="star-dd" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path> </g> </svg>
//         </div>
//     </div>`;
//         document.getElementsByClassName("seach6-2")[0].appendChild(para);
//         para.children[0].children[0].addEventListener("click", chuyentt);
//         para.children[0].children[3].addEventListener("click", chuyendo);
//         para.addEventListener("contextmenu", chuotphai);
//         para.children[0].addEventListener("dblclick", dbl);
//     })
//   }

//   function showTasks(tasks1) {
//     // let clone = newlistmain.cloneNode(true);
//     document.getElementsByClassName("seach6-2")[0].innerHTML = ''
//     // console.log(tasks1);
//       tasks1.forEach( (item) => {
//         let para = document.createElement("div");
//         para.innerHTML=` <div class="seach6-2-1">
//         <div class="seach6-2-1-1">
//               <svg class="task-check" width="10px" height="10px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg>
//         </div>
//         <text class="sapxep1">` + item.name + `</text>
//         <span class= "idarry" >`+ item.id +`</span>
//         <div class="seach6-2-1-2 star-red"> 
//               <svg width="18px" height="18px" class="starwhite" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"> <g> <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path> </g> </svg>
//               <svg width="36px" height="44px" fill="red" class="star-dd" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path> </g> </svg>
//         </div>
//     </div>`;
//         document.getElementsByClassName("seach6-2")[0].appendChild(para);
//         para.children[0].children[0].addEventListener("click", chuyentt);
//         para.children[0].children[3].addEventListener("click", chuyendo);
//         para.addEventListener("contextmenu", chuotphai);
//         para.children[0].addEventListener("dblclick", dbl);
//       })
//   }

//   //reposive
//   window.addEventListener("resize", function(){
//     // console.log(window.innerWidth);
//     if( window.innerWidth > 1000 ) {
//       document.getElementById("clumright").style.display = "none";
//       between.style.marginRight = "0px";
//     }
//     if( window.innerWidth < 700 ){
//       console.log("nhan su kien  be hon 1000");
//       for( let i = 0; i < document.getElementsByClassName("hide").length; i ++ ) {
//         document.getElementsByClassName("hide")[i].style.display = "none";
//       }
//       document.getElementById("clumleft").style.width = "42px";
//     }
//   })


//   //click vào sao vừa tạo ms và thêm sao
//   var clicksaotaolist = document.getElementsByClassName("seach6-1-4")[0];
//   clicksaotaolist.addEventListener("click", function() {
//     if( entercrewlistmain.value.trim().length > 0 ) {
//       clone = newlistmain.cloneNode(true);
//       document.getElementsByClassName("seach6-2")[0].appendChild(clone);
//       clone.children[1].innerHTML = entercrewlistmain.value;
//       clone.children[2].children[1].style.display = "block";
//       clone.children[2].children[0].style.display = "none";
//       document.getElementsByClassName("seach6-1-2")[0].value = "";
//       clone.children[0].addEventListener("click", chuyentt);
//       clone.children[2].addEventListener("click", chuyendo);
//       entercrewlistmain.value = " ";
//     }
//     else{
//       alert("chưa có nội dung");
//     }
//   })

//   //sự kiện click chuột phải xóa các list ở Main
//   var valuearry;
//   var abcde;
//   function chuotphai(){
//     var x = event.clientX;
//     var y = event.clientY;
//       document.getElementsByClassName("search12")[0].style.display = "block";
//       document.getElementsByClassName("search10")[0].style.display = "none";
//       document.getElementsByClassName("search11")[0].style.display ="none";
//       document.getElementsByClassName("search13")[0].style.display = "none";
//       document.getElementsByClassName("search12")[0].style.top= y + "px";
//       document.getElementsByClassName("search12")[0].style.left= x + "px";
//       event.preventDefault();
//       abcde = this;
//       valuearry = this.children[0].children[2].innerHTML;
//       valuearry = +valuearry;
//   }
//       document.getElementsByClassName("deletelistbody")[0].addEventListener("click",function(){
//       if( nhan === abcde ){
//         clumright.style.display = "block";
//         console.log(clumright);
//       }
//         tasks = tasks.filter((task) => {
//           return task.id !== valuearry;
//       })
//       showTasks(tasks);
//       console.log(tasks);
//       });
//     // chuột phải xóa phẩn tử completed
//   var deletelistcompleted;
//   function listcomple(){
//     var x = event.clientX;
//     var y = event.clientY;
//     event.preventDefault();
//     document.getElementsByClassName("search13")[0].style.display = "block";
//     document.getElementsByClassName("search10")[0].style.display = "none";
//     document.getElementsByClassName("search11")[0].style.display = "none";
//     document.getElementsByClassName("search12")[0].style.display = "none";
//     document.getElementsByClassName("search13")[0].style.top= y + "px"
//     document.getElementsByClassName("search13")[0].style.left= x + "px"
//     deletelistcompleted = this;
//   }
//     document.getElementsByClassName("deletelistcompleted")[0].addEventListener("click", function(){
//     deletelistcompleted.remove();
//   })

//   // doubleclick để chuyển subtab
//   var nhan;
//   var dbl;
//     function dbl() {
//       nhan = this;
//       // console.log(this.parentElement);
//       var b = this.children[1].innerHTML;
//       var ndclumright = document.getElementsByClassName("seach7-2")[0];
//       clumright.style.display = "block";
//       between.style.marginRight = "367px";
//       ndclumright.value = b;
//       // console.log(nhan.children[3]);
//       // console.log(document.getElementById("checkboxright"));
//       if (nhan.children[3].children[1].style.display === "block"){
//         starsub.children[2].children[1].style.display = "block";
//         starsub.children[2].children[0].style.display = "none";
//         console.log(nhan.parentElement.parentElement);
//         if( nhan.parentElement.parentElement == document.getElementsByClassName("seach6-2 ")[0] ) {
//           checkbox.children[1].style.display = "none";
//           checkbox.children[0].style.display = "block";
//         }
//       }
//       else {
//         starsub.children[2].children[1].style.display = "none";
//         starsub.children[2].children[0].style.display = "block";
//         console.log(nhan.parentElement.parentElement);
//         if( nhan.parentElement.parentElement == document.getElementsByClassName("seach6-2 ")[0] ) {
//           checkbox.children[1].style.display = "none";
//           checkbox.children[0].style.display = "block";
//         }
//       }
//     }
//     var listbody=document.getElementsByClassName("seach6-2-1");
//     var starsub = document.getElementsByClassName("seach7")[0];
//     var clumright = document.getElementById("clumright");
//     var between = document.getElementById("between");

//     //thay doi tu subtak sang list
//     var inputsubtak = document.getElementsByClassName("seach7-2")[0];
//     inputsubtak.addEventListener("keyup", function(e){
//       if ( e.keyCode === 13 ) {
//         nhan.children[1].innerHTML = inputsubtak.value;
//       }
//     })

//   //thêm cmt
//   var addcmt = document.getElementById("addcmt");
//   addcmt.addEventListener("keyup",function(e){
//     if(e.keyCode==13){
//       if(document.getElementById("addcmt").value.trim().length > 0){
//         var addcmt1 = document.getElementsByClassName("test1")[0];
//         var clone = addcmt1.cloneNode(true);
//       var textcmt = document.getElementById("addcmt");
//       var con= document.getElementsByClassName("seach8-6");
//       con[0].appendChild(clone);
//       clone.children[1].innerHTML = textcmt.value;
//       clone.children[2].addEventListener("click", deletecmt);
//       textcmt.value = "";
//       }
//       else{
//         alert("Hay nhap noi dung");
//       }
//     }
//   })

//   //xóa cmt
//   function deletecmt(){
//     this.parentElement.remove();

//   }
//   document.getElementsByClassName("delete1")[0].addEventListener("click", deletecmt)

//   //sao do ở list
//   function chuyendo(){
//     if(this.children[1].style.display === "block"){
//       this.children[1].style.display = "none";
//       this.children[0].style.display = "block";
//       console.log("nhan su kien click sao")
//       if(nhan == this.parentElement){
//         saodoright.children[1].style.display = "none";
//         saodoright.children[0].style.display = "block";
//       }
//     }
//     else{
//       this.children[1].style.display = "block";
//       this.children[0].style.display = "none";
//       if(nhan == this.parentElement){
//         saodoright.children[1].style.display = "block";
//         saodoright.children[0].style.display = "none";
//       }
//     }
//   }
//   function chuyendoright(){
//     if(this.children[1].style.display === "none"){
//       this.children[1].style.display = "block";
//       this.children[0].style.display = "none";
//       nhan.children[3].children[1].style.display = "block";
//       nhan.children[3].children[0].style.display = "none";
//     }
//     else{
//       this.children[1].style.display = "none";
//       this.children[0].style.display = "block";
//       nhan.children[3].children[1].style.display = "none";
//       nhan.children[3].children[0].style.display = "block";
//     }
//   }

//   //check box right
//   var listduoi;
//   function clickboxcheckright() {
//     if( checkbox.children[1].style.display === "none" ) {
//       checkbox.children[1].style.display = "block";
//       checkbox.children[0].style.display = "none";
//       // console.log(nhan.children[2].innerHTML);
//       valuearry = nhan.children[2].innerHTML;
//       valuearry = +valuearry;
//       console.log(valuearry);
//       tasks = tasks.filter((task) => {
//           return task.id !== valuearry;
//       })
//       showTasks(tasks);
//       console.log(tasks);
//       var ndclumright = document.getElementsByClassName("seach7-2")[0]; 
      
//       console.log(tasks);
//       var conexted = document.getElementsByClassName("seach6-3")[0];
//       var clone = conexted.cloneNode(true);
//       var b = document.getElementsByClassName("prent-list-show-copleted-to-dos")[0].appendChild(clone);
//       console.log(ndclumright.value);
//       clone.children[1].innerHTML = ndclumright.value ;
//       clone.children[2].addEventListener("click", chuyendo);
//       clone.children[0].addEventListener("click", chuyenttdown);
//       clone.addEventListener("dblclick", dbl);
//       clone.addEventListener("contextmenu", listcomple );
//       listduoi=clone;
//       if( nhan.children[3].children[1].style.display == "block" ){
//         clone.children[2].children[1].style.display = "block";
//         clone.children[2].children[0].style.display = "none";
//       }else{
//         clone.children[2].children[1].style.display = "none";
//         clone.children[2].children[0].style.display = "block";
//       }
//     }else{
//       checkbox.children[1].style.display = "none";
//       checkbox.children[0].style.display = "block";
//       listduoi.remove();
//       var c = listduoi.children[1].innerHTML;
//       console.log(c);
//       var newItem = {id: maxInNumbers + 1, name : c};
//       tasks.push(newItem);
//       var idtItem = idt.length + 1;
//       idt.push(idtItem);
//       maxInNumbers = Math.max.apply( Number , idt );
//       console.log(maxInNumbers);
//       console.log(tasks);
//       console.log(maxInNumbers);
//       tasks.sort(function( a , b ) {
//         var n1 = a.name.toLowerCase();
//         var n2 = b.name.toLowerCase();
//           if( n1 < n2){
//             return -1;
//           }
//           if( n1 > n2 ){
//             return 1;
//           }
//           return 0;
//       })
//       showTasks(tasks);
//       if( listduoi.children[2].children[1].style.display == "block" ){

//         // clone.children[2].children[1].style.display = "block";
//         // clone.children[2].children[0].style.display = "none";
//       }else{
//         // clone.children[2].children[1].style.display = "none";
//         // clone.children[2].children[0].style.display = "block";
//       }
//     }
//   }

//   document.getElementsByClassName("seach7-1")[0].addEventListener("click", clickboxcheckright)

//   var saodo = document.getElementsByClassName("seach6-2-1-2");
//   // for( let i = 0; i < saodo.length; i++ ) {
//   //   document.getElementsByClassName("seach6-2-1-2")[i].addEventListener("click", chuyendo);
//   // }

//   var saodoright = document.getElementsByClassName("seach7-3")[0];
//   saodoright.addEventListener("click", chuyendoright);

//   //bat sao dong bo
//     var checkbox = document.getElementsByClassName("seach7-1")[0];
//     function chuyentt(){
//       var ndclumright = document.getElementsByClassName("seach7-2")[0]; 
//       chuyen=this.parentElement.parentElement;
//       console.log(tasks);
//       var conexted = document.getElementsByClassName("seach6-3")[0];
//       var clone = conexted.cloneNode(true);
//       var b = document.getElementsByClassName("prent-list-show-copleted-to-dos")[0].appendChild(clone);
//       clone.children[1].innerHTML=chuyen.children[0].children[1].innerHTML;
//       clone.children[2].addEventListener("click", chuyendo);
//       clone.children[0].addEventListener("click", chuyenttdown);
//       clone.addEventListener("dblclick", dbl);
//       clone.addEventListener("contextmenu", listcomple );
//       // clone.addEventListener("click", deletecompleted);
//       valuearry = this.parentElement.children[2].innerHTML;
//       valuearry = +valuearry;
//       console.log(valuearry);
//       tasks = tasks.filter((task) => {
//           return task.id !== valuearry;
//       })
//       showTasks(tasks);
//       console.log(tasks);
//       if(chuyen.children[0].children[3].children[1].style.display === "block"){
//         clone.children[2].children[1].style.display = "block";
//         clone.children[2].children[0].style.display = "none";
//         if(this.parentElement === nhan){
//           console.log("nhan sư kiện checkbox");
//           checkbox.children[1].style.display = "block";
//           checkbox.children[0].style.display = "none";
//         }
//       }
//       else{
//         clone.children[2].children[1].style.display = "none";
//         clone.children[2].children[0].style.display = "block";
//         console.log(nhan);
//         console.log(this.parentElement);
//         if(this.parentElement === nhan){
//           console.log("nhan sư kiện checkbox");
//           // console.log(document.getElementsByClassName("seach7-1")[0].ch)
//           checkbox.children[1].style.display = "block";
//           checkbox.children[0].style.display = "none";
//         }else{
//           checkbox.children[1].style.display = "none";
//           checkbox.children[0].style.display = "block";
//         }
//       }
//     }
//     function chuyenttdown(){
//       chuyen = this.parentElement;
//       chuyen.remove();
//       // var unconexted = document.getElementsByClassName("seach6-2-1")[0];
//       // var clone = unconexted.cloneNode(true);
//       // document.getElementsByClassName("seach6-2")[0].appendChild(clone);
//       // clone.children[1].innerHTML = chuyen.children[1].innerHTML;
//       // clone.children[0].addEventListener("click", chuyentt);
//       var c = chuyen.children[1].innerHTML;
//       console.log(c);
//       var newItem = {id: maxInNumbers + 1, name : c};
//       tasks.push(newItem);
//       var idtItem = idt.length + 1;
//       idt.push(idtItem);
//       maxInNumbers = Math.max.apply( Number , idt );
//       console.log(maxInNumbers);
//       console.log(tasks);
//       console.log(maxInNumbers);
//       tasks.sort(function( a , b ) {
//         var n1 = a.name.toLowerCase();
//         var n2 = b.name.toLowerCase();
//           if( n1 < n2){
//             return -1;
//           }
//           if( n1 > n2 ){
//             return 1;
//           }
//           return 0;
//       })
//       showTasks(tasks);

//       if( chuyen.children[2].children[1].style.display === "block" ) {
//         clone.children[2].children[1].style.display = "block";
//         clone.children[2].children[0].style.display = "none";
//       }
//     }

//   //chuyển trạng thái
//   var ovuong = document.getElementsByClassName("seach6-2-1-1");
//       for( let i=0; i < ovuong.length; i++ )
//       {
//         document.getElementsByClassName("seach6-2-1-1")[i].addEventListener("click",chuyentt)
//       }
//       // chuyen trang thai len tren
//       var ovuongup = document.getElementsByClassName("ovuongup");
//       for( let i = 0; i < ovuongup.length ; i ++ ){
//         document.getElementsByClassName("ovuongup")[i].addEventListener("click",chuyenttdown);
//       }
// //chuyển subtab
//     function deleteleftlist(){
//       var x = event.clientX;
//         var y = event.clientY;
//         event.preventDefault();
//         document.getElementsByClassName("search11")[0].style.display = "block";
//         document.getElementsByClassName("search10")[0].style.display = "none";
//         document.getElementsByClassName("search12")[0].style.display = "none";
//         document.getElementsByClassName("search13")[0].style.display = "none";
//         document.getElementsByClassName("search11")[0].style.top= y + "px";
//         document.getElementsByClassName("search11")[0].style.left= x + "px";
//         deleleft = this;
//     }
//     function deleleft1(){
//       deleleft.remove();
//     }
//     var deleleft;
//     var leftcrewlist = document.getElementsByClassName("inboxcopy");
//     for( let i = 0; i < leftcrewlist.length; i++ )
//     {
//       document.getElementsByClassName("inboxcopy")[i].addEventListener("contextmenu", deleteleftlist)
//       document.getElementsByClassName("search11-4-3")[0].addEventListener("click", deleleft1)
//     }

//   document.getElementsByClassName("seach3-1")[0].addEventListener("contextmenu",function(event){
//     var x = event.clientX;
//     var y = event.clientY;
//     event.preventDefault();
//     document.getElementsByClassName("search10")[0].style.display = "block";
//     document.getElementsByClassName("search11")[0].style.display = "none";
//     document.getElementsByClassName("search12")[0].style.display = "none";
//     document.getElementsByClassName("search13")[0].style.display = "none";
//     document.getElementsByClassName("search10")[0].style.top= y + "px"
//     document.getElementsByClassName("search10")[0].style.left= x + "px"
//   })
//   document.getElementsByClassName("prent-list-show-copleted-to-dos")[0].addEventListener("contextmenu",function(event){

//   })
//   //thay đổi cửa sổ
//   document.getElementById("inbox").addEventListener("click",function(){
//     document.getElementById("text-tuy-chon").innerHTML="InBox";
//   })
//   document.getElementById("starred").addEventListener("click",function(){
//     document.getElementById("text-tuy-chon").innerHTML="Starred";
//   })
//   document.getElementById("today").addEventListener("click",function(){
//     document.getElementById("text-tuy-chon").innerHTML="Today";
//   })
//   document.getElementById("week").addEventListener("click",function(){
//     document.getElementById("text-tuy-chon").innerHTML="Week";
//   })
// }//windown onload


