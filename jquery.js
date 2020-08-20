$(document).ready(function(){
    $("#seach1-1").click(function(){
        console.log("nhan sư kien");
        $(".hide").toggle();
        $("#clumleft").toggleClass("clumlefthide");
    })

    $("#seach4").click(function(){
        $(".create-new-list").show(500);
        $(".background-color-black").show();
    })

    $("#seach2-1").click(function(){
        $(".list-menu").toggle();
    })

    $(".show-account").click(function(){
        $(".account-setting").show(500);
        $(".list-menu").hide();
        $(".background-color-black").show();
    })

    $(".hide-account").click(function(){
        $(".account-setting").hide(500);
        $(".background-color-black").hide();
    })

    $(".seach3-1-1").click(function () { 
        layidlist = $(this).children(".idlist").text();
        layidlist = +layidlist;
        tasksid = tasks;
        tasksid = tasksid.filter((task) => {
            return task.idL === layidlist;
        })
        showtaskbyid(tasksid);
        showtaskcomple();
        $(this).toggleClass("background-blue");
        $(this).siblings().removeClass("background-blue");
        $(".inboxcopy").removeClass("background-blue");
        //----------------thay đổi giá trị-----------------
        var texttask = $(this.children[1]).text();
        $("#text-tuy-chon").children().text(texttask);

    });

        $('.lists').on('click', '.inboxcopy', function(){
        layidlist = $(this).children(".idlist").text();
        layidlist = +layidlist;
        // console.log(layidlist);
        $(this).toggleClass("background-blue");
        $(this).siblings().removeClass("background-blue");
        $(".seach3-1-1").removeClass("background-blue");
        // var c = $(this).children(".idlist").text();

        tasksid = tasks;
        tasksid = tasksid.filter((task) => {
            return task.idL === layidlist;
        })

        showtaskbyid(tasksid);
        showtaskcomple();
        // showtask();
        //-----------------thay doi gia tri-------------
        var texttask = $(this.children[1]).text();
        $("#text-tuy-chon").children().text(texttask);
    })

    // $(".seach6-2-1").click(function(){
        $(".seach6-2").on("click", ".seach6-2-1", function () {
        $(this).toggleClass("background-blue");
        $(this).siblings().removeClass("background-blue");
        $(".list-show-copleted-to-dos").removeClass("background-blue");
        $(".seach7-1").children("#checkboxright").hide();
        nhan =this;
        var id = $(this).children(".idarry").text();
        var idL = $(this).children(".idlist").text();
        var star = $(this).children(".star").text();
        var ndlist = $(this.children[1]).text();
        console.log(ndlist);
        $(".seach7-2").val(ndlist);
        $(".seach7").children(".idarry").text(+id);
        $(".seach7").children(".idlist").text(+idL);
        $(".seach7").children(".star").text(+star);
        
        subtak1 = subtak;
        subtak1 = subtak1.filter((task)=>{
            return task.idtask === +$(".seach7").children(".idarry").text();
        })
        showsubtakbyid(subtak1);
        shownodebyid();
        showcmtbyid();

        if(this.children[7].children[1].style.display === "inline" ){
            $(".seach7-3").children(".star-subtak").show();
            $(".seach7-3").children(".staright").hide();
        }else{
            $(".seach7-3").children(".star-subtak").hide();
            $(".seach7-3").children(".staright").show();
        }

    })
        $(".prent-list-show-copleted-to-dos").on("click", ".list-show-copleted-to-dos", function(){
        $(this).toggleClass("background-blue");
        $(this).siblings().removeClass("background-blue");
        $(".seach6-2-1").removeClass("background-blue");
        $(".seach7-1").children("#checkboxright").show();
        nhancom = this;
        var id = $(this).children(".idarry").text();
        var idL = $(this).children(".idlistscompleted").text();
        var star = $(this).children(".star").text();
        var ndlist = $(this.children[1]).text();
        console.log(ndlist);
        $(".seach7-2").val(ndlist);
        $(".seach7").children(".idarry").text(+id);
        $(".seach7").children(".idlist").text(+idL);
        $(".seach7").children(".star").text(+star);
        
        subtak1 = subtak;
        subtak1 = subtak1.filter((task)=>{
            return task.idtask === +$(".seach7").children(".idarry").text();
        })
        showsubtakbyid(subtak1);
        shownodebyid();
        showcmtbyid();

        if(this.children[5].children[1].style.display === "inline" ){
            $(".seach7-3").children(".star-subtak").show();
            $(".seach7-3").children(".staright").hide();
        }else{
            $(".seach7-3").children(".star-subtak").hide();
            $(".seach7-3").children(".staright").show();
        }

    })
    // $(".seach6-2-1").dblclick(function(){
        $(".seach6-2").on("dblclick",".seach6-2-1", function(){
        $("#between").addClass("betweenshow");
        $("#clumright").show();
    })

    // $(".list-show-copleted-to-dos").dblclick(function(){
        $(".prent-list-show-copleted-to-dos").on("click", ".list-show-copleted-to-dos", function(){
        $("#between").addClass("betweenshow");
        $("#clumright").show();
    })

    $(".seach10-1").click(function () { 
        $(".betweenshow").removeClass();
        $("#clumright").hide();
    });
    var maxnumberlistid = 0
    var lists = [];
    var idlist = [];
    $(".text-crew-list").keyup(function (e) { 
        if(e.keyCode === 13 ){
            if($(".text-crew-list").val().trim().length > 0 ) {
                var a = $(this).val();
                var newidlist = idlist.length + 1;
                var newlist = {idL: maxnumberlistid + 1 , name: a};
                lists.push(newlist);
                idlist.push(newidlist);
                maxnumberlistid = Math.max.apply( Number , idlist );
                console.log(lists);
                var clr = $($(".inboxcopy")[0]).clone();
                clr.removeClass("background-blue");
                clr.children("#text-inboxcopy").text(a);
                clr.children(".idlist").text(newidlist);
                clr.clone().appendTo(".lists");
                $(this).val("");
                $(".create-new-list").hide(200);
                $(".background-color-black").hide(200);
            }else{
                alert("Hãy Nhâp Nội Dung");
                $(this).val("");
            }
        }
    });

    $(".bottom-create-new-list-save").click(function(){
        if($(".text-crew-list").val().trim().length > 0 ) {
            var a = $(".text-crew-list").val();
            console.log(a);
            // var html = $(".inboxcopy").html();
            // $(".inboxcopy").clone().appendTo(".lists");
            var clr = $($(".inboxcopy")[0]).clone();
            clr.removeClass("background-blue");
            clr.children("#text-inboxcopy").text(a);
            // console.log(clr.children("#text-inboxcopy").text());
            clr.clone().appendTo(".lists");
            $(".text-crew-list").val("");
            $(".create-new-list").hide(200);
            $(".background-color-black").hide(200);
        }else{
            alert("Hãy Nhâp Nội Dung");
            $(this).val("");
        }
    })

    $(".bottom-create-new-list-cancle").click(function(){
        $(".create-new-list").hide(500);
        $(".background-color-black").hide();
    })

    // $(".seach6-2-1-2").click(function(){
        $("body").on("click", ".seach6-2-1-2", function() {
            // console.log(this);
            // $(this.children[1]).toggle();
            // $(this.children[0]).toggle();
            var a = $(this.parentElement).children(".idarry").text();
            var b = $(this.parentElement).children(".star").text();
            if( +b === 0 ){
                tasks.forEach((task) => {
                if (task.id === +a) {
                    task.star = 1;
                    // $(".seach7"),children(".star").text("1");
                    }
                })
                $(".seach7").children(".star").text("1");
            }else{
                tasks.forEach((task) => {
                    if (task.id === +a) {
                        task.star = 0;
                        // $(".seach7"),children(".star").text("0");
                        }
                    })
                    $(".seach7").children(".star").text("0");
            }
            console.error(tasks)

            tasksid = tasks;
            tasksid = tasksid.filter((task) => {
                return task.idL === layidlist;
            })

            showtaskbyid(tasksid);
            // console.log(tasks3=[id]);
            if(nhan === this.parentElement){
                if(this.children[1].style.display === "none" ) {
                    $(".seach7-3").children(".star-subtak").show();
                    $(".seach7-3").children(".staright").hide();
                    console.log("dsadasdas");
                }else{
                    $(".seach7-3").children(".star-subtak").hide();
                    $(".seach7-3").children(".staright").show();
                    console.log("nhan viec tat");
                }
            }
        // else{
        //     $(".seach7-3").children().toggle();
        // }
        console.log(this.parentElement);
    })

    $("body").on("click", ".rightcomple",function(){
        var a = $(this.parentElement).children(".star").text();
        console.log("da nhan su kien click sao  o duoi");
        if(+a === 0){
            $(this.parentElement).children(".star").text("1");
            $(this).children(".star-dd").show();
            $(this).children(".starwhite").hide();
            $(".seach7-3").children(".star-subtak").show();
            $(".seach7-3").children(".staright").hide();
        }else{
            $(this.parentElement).children(".star").text("0");
            $(this).children(".star-dd").hide();
            $(this).children(".starwhite").show();
            $(".seach7-3").children(".star-subtak").hide();
            $(".seach7-3").children(".staright").show();
        }
    })

    $(".seach7-2").keyup(function(e){
        if( e.keyCode === 13 ) {

            var a = $(this).val();
            console.log(a);
            console.log($(nhan).children(".sapxep1").html());
            $(nhan).children(".sapxep1").text(a);
        }
    })

    $(".seach3-1-1").contextmenu(function(e){
        console.log(e.pageX);
        e.preventDefault();
        $(".search10").show();
        $(".search10").css({
            'left': e.pageX + "px",
            'top': e.pageY + "px",
            'display': 'block',
        });
        $(".search11").hide();
        $(".search12").hide();
        $(".search13").hide();
    })

    $(".lists").on("contextmenu", ".inboxcopy" ,function(e){
        xoa = this;
        e.preventDefault();
        $(".search11").show();
        $(".search11").css({
            'left': e.pageX + "px",
            'top': e.pageY + "px",
            'display': 'block',
        });
        $(".search10").hide();
        $(".search12").hide();
        $(".search13").hide();    
        
    })

    $("body").click(function(){
        $(".search10").hide();
        $(".search11").hide();
        $(".search12").hide();
        $(".search13").hide(); 
    })

    $(".search11-4-3").click(function(){
        xoa.remove();
        $(".search11").hide();
        
        tasks = tasks.filter((task) => {
        return task.idL !== layidlist;
        })
        showtaskbyid(tasks);
        showtaskcomple();
        
    })
    var maxInNumbers = 0;
    var ids = [];
    var tasks = [];
    $(".seach6-1-2").keyup(function(e){
        if(e.keyCode === 13 ) {
            if($(".seach6-1-2").val().trim().length > 0){
                var a = $(this).val();
                console.log(a);
                var newItem = { id: maxInNumbers + 1 , name: a, idL: layidlist, status: 0, star: 0 }
                tasks.push(newItem);
                var idtItem = ids.length + 1;
                ids.push(idtItem);
                maxInNumbers = Math.max.apply( Number , ids );
                // tasks.sort(sapxep);

                tasksid = tasks;
                tasksid = tasksid.filter((task) => {
                    return task.idL === layidlist;
                })

                showtaskbyid(tasksid);
                console.log(tasks);
                // var clr = $($(".seach6-2-1")[0]).clone();
                // clr.children(".sapxep1").text(a);
                // clr.children(".idarry").text(newItem.id);
                // clr.children(".idlists").text(layidlist);
                // clr.clone().appendTo(".seach6-2 ");
                $(this).val("");
            }else{
                alert("chua co noi dung");
            }
        }
    })

    $(".starred").click(function(){
        if($(".seach6-1-2").val().trim().length > 0){
        var a = $(".seach6-1-2").val();
        var newItem = { id: maxInNumbers + 1 , name: a, idL: layidlist, status: 0, star: 1 }
        tasks.push(newItem);
        var idtItem = ids.length + 1;
        ids.push(idtItem);
        maxInNumbers = Math.max.apply( Number , ids );
        $(".seach6-1-2").val("");

        tasksid = tasks;
        tasksid = tasksid.filter((task) => {
            return task.idL === layidlist;
        })

        showtaskbyid(tasksid);
        }else{
            alert("chua nhap doi dung");
        }
    })

    function sapxep( a , b ) {
        var n1 = a.name.toLowerCase();
        var n2 = b.name.toLowerCase();
          if( n1 < n2){
            return -1;
          }
          if( n1 > n2 ){
            return 1;
          }
          return 0;
      }

    //   $(".sort").click(function(){
    //       tasks1 = tasks;
    //       console.log(tasks1)
    //   })

      function showtaskcomple(){
        //   console.log($(".list-show-copleted-to-dos").length);
          for( let i = 0; i < $(".list-show-copleted-to-dos").length; i ++ ){
              if( +$(".list-show-copleted-to-dos").eq(i+1).children(".idlistscompleted").text() === layidlist ){
                console.log(+$(".list-show-copleted-to-dos").eq(i+1).children(".idlistscompleted").text());
                $(".list-show-copleted-to-dos").eq(i+1).show();

              }else{
                $(".list-show-copleted-to-dos").eq(i+1).hide();
              }
          }
        // var a = $(comple).children(".idlistscompleted").text();
        // console.log(a);
        // if( +a === layidlist ){
        //     console.log("da nhan");
        //     $(".prent-list-show-copleted-to-dos").children().show();
        // }else{
        //     console.log($(".prent-list-show-copleted-to-dos").children());
        //     $(".prent-list-show-copleted-to-dos").children().hide();
        // }
      }

    function showtaskbyid(tasksid){
        // tasksid = tasks;
        // tasksid = tasksid.filter((task) => {
        //     return task.idL === layidlist;
        // })
        $(".seach6-2").html('');
        console.log(tasksid);
        tasksid.forEach((item) => {
            var element = ` <div class="seach6-2-1">
            <div class="seach6-2-1-1">
                  <svg class="task-check" width="10px" height="10px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg>
            </div>
            <text class="sapxep1">` + item.name + `</text>
            <span class="time"> </span>
            <span class="date"> </span>
            <span class= "idarry idtask" >`+ item.id +`</span>
            <span class= "idlist" >`+ item.idL +`</span>
            <span class= "star" >`+ item.star +`</span>
            <div class="seach6-2-1-2 star-red"> 
                  <svg width="18px" height="18px" class="starwhite" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"> <g> <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path> </g> </svg>
                  <svg width="36px" height="44px" fill="red" class="star-dd" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path> </g> </svg>
            </div>
        </div>`;
      
            $(".seach6-2").append(element);

        })
        for(let i =0; i < $(".seach6-2").children().length; i ++ ){
            console.log("1111111111111111111111");
            console.log($(".seach6-2-1").eq(i).children(".star").text());
            if(+$(".seach6-2-1").eq(i).children(".star").text() === 1 ){
                console.log("2222222222222222222");
                $(".seach6-2-1").eq(i).children(".seach6-2-1-2").children(".star-dd").show();
                $(".seach6-2-1").eq(i).children(".seach6-2-1-2").children(".starwhite").hide();
            }else{
                $(".seach6-2-1").eq(i).children(".seach6-2-1-2").children(".star-dd").hide();
                $(".seach6-2-1").eq(i).children(".seach6-2-1-2").children(".starwhite").show();
            }
        }
        }
    
    // $(".bell").click(function(){
    //     alert($.now());
    // })

    $(".sort").click(function(){
        var tasks1 = tasks;
        tasks1 = tasks1.filter((task) => {
            return task.idL === layidlist;
        })
        tasks1.sort(sapxep);
        showtaskbyid(tasks1);
    })
    // function showtask(tasks2) {
    //     tasks1 = tasks2;
    //     tasks1 = tasks1.filter((task) => {
    //         return task.idL === layidlist;
    //     })
    //     tasks1.sort(sapxep);
    //     $(".seach6-2").html('');
    //             tasks1.forEach( (item) => {
    //                 var element = ` <div class="seach6-2-1">
    //                 <div class="seach6-2-1-1">
    //                       <svg class="task-check" width="10px" height="10px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg>
    //                 </div>
    //                 <text class="sapxep1">` + item.name + `</text>
    //                 <span class= "idarry" >`+ item.id +`</span>
    //                 <span class= "idlist" >`+ layidlist +`</span>
    //                 <div class="seach6-2-1-2 star-red"> 
    //                       <svg width="18px" height="18px" class="starwhite" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"> <g> <path d="M3.74,18 C3.64,18 3.54,17.96 3.46,17.9 C3.28,17.76 3.2,17.54 3.28,17.34 L5.16,11.5 L0.2,7.9 C0.04,7.78 -0.04,7.56 0.02,7.34 C0.1,7.14 0.28,7 0.5,7 L6.64,7 L8.52,1.16 C8.66,0.76 9.34,0.76 9.48,1.16 L11.38,7 L17.5,7 C17.72,7 17.9,7.14 17.98,7.34 C18.04,7.56 17.96,7.78 17.8,7.9 L12.84,11.5 L14.72,17.34 C14.8,17.54 14.72,17.76 14.54,17.9 C14.38,18.02 14.14,18.02 13.96,17.9 L9,14.3 L4.04,17.9 C3.96,17.96 3.84,18 3.74,18 L3.74,18 Z M9,13.18 C9.1,13.18 9.2,13.2 9.3,13.28 L13.3,16.18 L11.78,11.46 C11.7,11.26 11.78,11.04 11.96,10.92 L15.96,8 L11,8 C10.8,8 10.6,7.86 10.54,7.66 L9,2.94 L7.46,7.66 C7.4,7.86 7.22,8 7,8 L2.04,8 L6.04,10.92 C6.22,11.04 6.3,11.26 6.22,11.46 L4.7,16.18 L8.7,13.28 C8.8,13.2 8.9,13.18 9,13.18 L9,13.18 Z"></path> </g> </svg>
    //                       <svg width="36px" height="44px" fill="red" class="star-dd" viewBox="0 0 22 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M0,0l0,40.5c0,0.28 0.22,0.42 0.48,0.32l10.04,-3.64c0.28,-0.1 0.7,-0.1 0.96,0l10.04,3.64c0.28,0.1 0.48,-0.04 0.48,-0.32l0,-40.5l-22,0ZM14.46,24.08l1.68,5.26c0.08,0.18 0,0.38 -0.16,0.5c-0.14,0.1 -0.36,0.1 -0.52,0l-4.46,-3.24l-4.46,3.24c-0.08,0.06 -0.18,0.1 -0.28,0.1c-0.08,0 -0.18,-0.04 -0.24,-0.1c-0.16,-0.12 -0.24,-0.32 -0.16,-0.5l1.68,-5.26l-4.46,-3.24c-0.14,-0.12 -0.22,-0.32 -0.16,-0.52c0.08,-0.18 0.24,-0.32 0.44,-0.32l5.52,0l1.68,-5.24c0.14,-0.36 0.74,-0.36 0.88,0l1.7,5.24l5.5,0c0.2,0 0.36,0.14 0.44,0.32c0.06,0.2 -0.02,0.4 -0.16,0.52l-4.46,3.24Z"></path> </g> </svg>
    //                 </div>
    //             </div>`;
    //                 $(".seach6-2").append(element);
    //             })
    //             console.log(tasks1);
    //             console.log("đâsd");
    //     }
    $("body").on("click", ".seach6-2-1-1", function(){
        var c = $(this.parentElement).children(".idarry").text();
        console.log("đâsd");
        $(this.parentElement).remove();
        var a = $(this.parentElement).children(".sapxep1").text();
        var b = $($(".list-show-copleted-to-dos")[0]).clone();
        var d = $(this.parentElement).children(".idlist").text();
        var e = $(this.parentElement).children(".star").text();
        console.log(d);
        b.children(".ndcompleted").text(a);
        b.children(".idarry").text(c);
        b.children(".idlistscompleted").text(d);
        b.children(".star").text(e);
        b.appendTo(".prent-list-show-copleted-to-dos");
        comple = b;
        c =+c;
        tasks = tasks.filter((task) => {
            return task.id !== c;
        })
        console.log(+$(".seach7").children(".idarry").text());
        if(+$(".seach7").children(".idarry").text() === +d){
            console.log("nhan vong lap if");
            $(".seach7-1").children("#checkboxright").show();
        }
        if(+e === 1 ){
            $(b).children(".rightcomple").children(".star-dd").show();
            $(b).children(".rightcomple").children(".starwhite").hide();
        }else{
            $(b).children(".rightcomple").children(".star-dd").hide();
            $(b).children(".rightcomple").children(".starwhite").show();
        }
        // showtask(tasks);
        console.log(tasks);
    })

    // $(".seach6-2-1-1").click(function(){
    //     // $(this.parentElement).children(".sapxep1").text()
    //     // alert($(this.parentElement).children(".sapxep1").text());
    //     var a = $(this.parentElement).children(".sapxep1").text();
    //     $(this.parentElement).remove();
    //     var b = $($(".list-show-copleted-to-dos")[0]).clone();
    //     b.children(".ndcompleted").text(a);
    //     b.appendTo(".prent-list-show-copleted-to-dos");
    // })

    // $(".ovuongup").click(function(){
        $("body").on("click", ".ovuongup", function(){
        var a = $(this.parentElement).children(".ndcompleted").text();
        var id = $(this.parentElement).children(".idarry").text();
        var idL = $(this.parentElement).children(".idlistscompleted").text();
        var star = $(this.parentElement).children(".star").text();
        // console.log(id);

        var newItem = { id: +id , name: a, idL: +idL, status: 0, star: +star  }
        tasks.push(newItem);
        if(+$(".seach7").children(".idarry").text() === +id ){
            $(".seach7-1").children("#checkboxright").hide();
        }

        var tasksid = tasks;
        tasksid = tasksid.filter((task) => {
            return task.idL === layidlist;
        })

        showtaskbyid(tasksid); 

        $(this.parentElement).remove();
            // console.log($(".seach6-2").children().length);
        // for(let i = 0; i < $(".seach6-2").children().length; i ++){
        //     console.log("49999999999999999999999999");
        //     console.log(+$(".seach6-2-1").eq(i).children(".idarry"));
        //     if(+$(".seach6-2-1").eq(i).children(".idarry").text() === +$(this.parentElement).children(".idarry").text() ){
        //         console.log("312312312312312321");
        //         $(".seach6-2-1").eq(i).children(".seach6-2-1-2").children(".star-dd").show();
        //     }
        // }
        // var b = $($(".seach6-2-1")[0]).clone();
        // b.children(".sapxep1").text(a);
        // b.children(".idarry").text(id);
        // b.appendTo(".seach6-2 ");
    })
    // var b1;
    // $(".seach7-1").click(function(){
    //     if(this.children[1].style.display === "none" ){
    //     $(this.children[1]).show();
    //     console.log("hellooooooooooooo");
    //     var c = $(nhan).children(".idarry").text();
    //     var d = $(nhan).children(".star").text();
    //     var e = $(nhan).children(".idlist").text();
    //     console.log(d);
        
    //     var a = $(nhan).children(".sapxep1").text();
    //     b = $($(".list-show-copleted-to-dos")[0]).clone();
    //     b.children(".ndcompleted").text(a);
    //     b.children(".idarry").text(+c);
    //     b.children(".star").text(+d);
    //     b.children(".idlistscompleted").text(+e);
    //     b.appendTo(".prent-list-show-copleted-to-dos");
    //     nhan.remove();
    //     // console.log(b);
    //     nhan1 = b;
    //     tasks = tasks.filter((task) => {
    //         return task.id !== +c;
    //     })
    //     console.log(tasks);
    //     showtaskbyid();
    //     showstarcomple();
    //     console.log($(".prent-list-show-copleted-to-dos").children().length);
    //     b1.remove();
        
    //     }else{
    //         $(this.children[1]).hide();
    //         b.remove();
    //         // console.log(nhan);
                
    //         b1 = $($(".seach6-2-1")[0]).clone();
    //         console.log(nhan1);
    //         var a = $(nhan1).children(".ndcompleted").text();
    //         console.log(a);
    //         var c = $(nhan1).children(".star").text();
    //         console.log(c);
    //         b1.children(".sapxep1").text(a);
    //         b1.appendTo(".seach6-2");
    //         // console.log(b)
    //         console.log(nhan1);
    //         var d = $(b).children(".idarry").text();
    //         $(b1).children(".idarry").text(+d);
    //         var newItem = { id: +d , name: a, idL: layidlist, status: 0, star: c }
    //         tasks.push(newItem);
    //         showtaskbyid();
    //         nhancom.remove();
    //     }
    // })

    $(".seach7-1").click(function(){
        if(this.children[1].style.display === "none"){
            $(this.children[1]).show();
            var id = $(this.parentElement).children(".idarry").text();
            var name = $(this.parentElement).children(".seach7-2").val();
            var idL = $(this.parentElement).children(".idlist").text();
            var star = $(this.parentElement).children(".star").text();
            console.log(+star);

            b = $($(".list-show-copleted-to-dos")[0]).clone();
            b.children(".ndcompleted").text(name);
            b.children(".idarry").text(+id);
            b.children(".star").text(+star);
            b.children(".idlistscompleted").text(+idL);
            b.appendTo(".prent-list-show-copleted-to-dos");


            tasks = tasks.filter((task) => {
                return task.id !== +id;
            })
            var tasksid = tasks;
            tasksid = tasksid.filter((task) => {
                return task.idL === layidlist;
            })
            showtaskbyid(tasksid);
            showstarcomple();
        }else{
            $(this.children[1]).hide();
            var id = $(this.parentElement).children(".idarry").text();
            var name = $(this.parentElement).children(".seach7-2").val();
            var idL = $(this.parentElement).children(".idlist").text();
            var star = $(this.parentElement).children(".star").text();
            for( let i = 0; i < $(".list-show-copleted-to-dos").length; i ++ ){
                if(+$(".list-show-copleted-to-dos").eq(i+1).children(".idarry").text() === +id ){
                    console.log("nhan vc xoa");
                    $(".list-show-copleted-to-dos").eq(i+1).remove();
                }
            }

            var newItem = { id: +id , name: name, idL: +idL, status: 0, star: +star }
            tasks.push(newItem);
            // showstarcomple();
            var tasksid = tasks;
            tasksid = tasksid.filter((task) => {
                return task.idL === layidlist;
            })
            showtaskbyid(tasksid);
        }
    })

    function showstarcomple(){
        console.log("nhan funciton show star comple");
        for( let i = 0; i < $(".list-show-copleted-to-dos").length; i ++ ){
            if( +$(".list-show-copleted-to-dos").eq(i+1).children(".star").text() === 1 ){
                console.log("111111111111111111111111111");
                console.log(+$(".list-show-copleted-to-dos").eq(i+1).children(".star").text());
                $(".list-show-copleted-to-dos").eq(i+1).children(".rightcomple").children(".star-dd").show();
                $(".list-show-copleted-to-dos").eq(i+1).children(".rightcomple").children(".starwhite").hide();
            }else{
                $(".list-show-copleted-to-dos").eq(i+1).children(".rightcomple").children(".star-dd").hide();
                $(".list-show-copleted-to-dos").eq(i+1).children(".rightcomple").children(".starwhite").show();
            }
        }
    }

    $(".seach7-3").click(function(){
        if(this.children[1].style.display === "inline"){
            $(this).children(".star-subtak").hide();
            $(this).children(".staright").show();
            console.log("da nhan kick sapo right");
            // console.log($(nhan).children(".star").text());
            var b = $(this.parentElement).children(".star").text();
            var a = $(this.parentElement).children(".idarry").text();
            console.log($(nhan).children(".star").text());
            if( +b === 1 ){
                tasks.forEach((task) => {
                    console.log("nhan su kien tahy doi");
                if (task.id === +a) {
                    task.star = 0;
                    }
                })
            }
            $(this.parentElement).children(".star").text("0");

            var tasksid = tasks;
            tasksid = tasksid.filter((task) => {
                return task.idL === layidlist;
            })

            showtaskbyid(tasksid);
        }else{
            $(this).children(".star-subtak").show();
            $(this).children(".staright").hide();
            console.log("da nhan kick sapo right");
            var b = $(this.parentElement).children(".star").text();
            var a = $(this.parentElement).children(".idarry").text();
            if( +b === 0 ){
                tasks.forEach((task) => {
                if (task.id === +a) {
                    task.star = 1;
                    }
                })
            }
            $(this.parentElement).children(".star").text("1");

            var tasksid = tasks;
            tasksid = tasksid.filter((task) => {
                return task.idL === layidlist;
            })

            showtaskbyid(tasksid);
            // console.log($(nhan).children(".star").text());
            // $(nhan).children(".rightcomple").children(".starwhite").hide();
            // $(nhan).children(".rightcomple").children(".star-dd").show();
        }
    })

    $(".seach6-2").on("contextmenu", ".seach6-2-1" ,function(e){
        xoatask = this; 
        e.preventDefault();
        $(".search12").show();
        $(".search12").css({
            'left': e.pageX + "px",
            'top': e.pageY + "px",
            'display': 'block',
        });
        $(".search10").hide();
        $(".search11").hide();
    })
    
    $(".deletelistbody").click(function(){
        // xoatask.remove();
        $(".search12").hide();
        var a = $(xoatask).children(".idarry").text();
        tasks = tasks.filter((task) => {
            return task.id !== +a;
        })
        showtaskbyid(tasks);
        $(".betweenshow").removeClass();
        $("#clumright").hide(); 
    })

    $(".seach10-2").click(function(){
        var a = $(".seach7").children(".idarry").text();
        tasks = tasks.filter((task) => {
            return task.id !== +a;
        })
        showtaskbyid(tasks);

        for( let i = 0; i < $(".list-show-copleted-to-dos").length; i ++ ){
            if( +$(".list-show-copleted-to-dos").eq(i+1).children(".idlistscompleted").text() === layidlist ){
            //   console.log(+$(".list-show-copleted-to-dos").eq(i+1).children(".idlistscompleted").text());
              $(".list-show-copleted-to-dos").eq(i+1).remove();

            }
        }

        $(".betweenshow").removeClass();
        $("#clumright").hide(); 
    })

    $(".prent-list-show-copleted-to-dos").on("contextmenu", ".list-show-copleted-to-dos" ,function(e){
        xoacompleted = this; 
        e.preventDefault();
        $(".search13").show();
        $(".search13").css({
            'left': e.pageX + "px",
            'top': e.pageY + "px",
            'display': 'block',
        });
        $(".search10").hide();
        $(".search11").hide();
        $(".search12").hide();
    })

    $(".deletelistcompleted").click(function(){
        xoacompleted.remove();
        $(".search13").hide();
    })

    $(".show-copleted-to-dos").click(function(){
        $(".prent-list-show-copleted-to-dos").toggle(500);
    })

    $(".date").change(function(){
        console.log($(this).val());
        // $(".date").text($(this).val());
        for(let i = 0; i < $(".seach6-2").children().length; i++ ){
            if( +$(".seach6-2-1").eq(i).children(".idarry").text() === +$(".seach7").children(".idarry").text() ){
                $(".seach6-2-1").eq(i).children(".date").text($(this).val());
            }
        }
    })

    $(".time").change(function(){
        console.log($(this).val());
        // $(".date").text($(this).val());
        for(let i = 0; i < $(".seach6-2").children().length; i++ ){
            if( +$(".seach6-2-1").eq(i).children(".idarry").text() === +$(".seach7").children(".idarry").text() ){
                $(".seach6-2-1").eq(i).children(".time").text($(this).val());
                $(".seach6-2-1").eq(i).children(".time").css({'height' : '20px',
                'margin': '10px'})
            }
        }
    })

    $(window).resize(function () { 
        console.log("nhan su thay doi man hinh");
        console.log(window.innerWidth);
        if(window.innerWidth < 700 ){
            $("#clumleft").addClass("clumlefthide");
            $(".hide").hide();
        }
        if(window.innerWidth < 650 ){
            if($("#clumright").show()){
                console.log("ADasdasdasdasd");
                $("#between").addClass("betweenshow");
                $("#clumright").addClass("clumrigthshow");
            }
        }else{
            $("#clumright").removeClass("clumrigthshow");
        }
    });

    // function starTime() {
    //     var today = new Date();
    //     console.error(today);
    //     var date = today.getFullYear()+'-'+("0"+(today.getMonth()+1))+'-'+today.getDate();
    //     var h = today.getHours();
    //     var m = today.getMinutes();
    //     var s = today.getSeconds();

    //     m = checkTime(m);
    //     s = checkTime(s);

        
    //     $("#text-tuy-chon").text(h + ":" + m + ":" + s);
    //     $("#seach1-2").val(date);

    setInterval(function(){
        var today = new Date();
        console.error(today);
        if(today.getMonth() < 9){
            date = today.getFullYear()+'-'+("0"+(today.getMonth()+1))+'-'+today.getDate();
        }else{
            date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        }
        date = today.getFullYear()+'-'+("0"+(today.getMonth()+1))+'-'+today.getDate();
        h = today.getHours();
        m = today.getMinutes();
        var s = today.getSeconds();

        // m = checkTime(m);
        // s = checkTime(s);

        if (h < 10) {
            h = "0" + h;
        }
        // return h;

        if (m < 10) {
            m = "0" + m;
        }
             
            
        // var a = $(".seach8-4-3").children(".note").children(".valuenote").text();
        var a = $(".seach7").children(".seach7-2").text();
        // $("#text-tuy-chon").text(h + ":" + m );
        // $("#seach1-2").val(date);
        console.log(h + ":" + m );
        for(let i = 0; i < $(".seach6-2").children().length; i ++){
            console.log(date);
            if(date === $(".seach6-2-1").eq(i).children(".date").text() ){
                if( h + ":" + m === $(".seach6-2-1").eq(i).children(".time").text() ){
                    console.log("nhan ngay trung");

                    alert("đã thành công" + a);
            }
        }
        };
     }, 30000);
     
    // }
    
    var note = [];
    var idnote = [];
    var maxidnote = 0;
    $(".addnote").keyup(function(e){
        if(e.keyCode === 13 ){
            if($(this).val().trim().length > 0){
                var nd = $(this).val();
                var b = $(".seach7").children(".idarry").text();

                var newnote = {name: nd, idnote: maxidnote + 1 , idtask: +b }
                note.push(newnote);

                var idnewnote = idnote.length + 1;
                idnote.push(idnewnote);
                maxidnote = Math.max.apply( Number , idnote );

                console.log(note);
                shownodebyid();
                $(this).val("");
            }else{
                alert("nhap noi dung can note");
            }
        }
    })

    $(".deletenote").click(function(){
        $(this.parentElement).remove();
    })
    var subtak = [];
    var idsubtak = [];
    maxsubtak = 0;
    $(".seach8-3-1").keyup(function(e){
        if(e.keyCode === 13 ){
            if($(this).val().trim().length > 0){
                var nd = $(this).val();
                var a = $(".seach7").children(".idarry").text();
                
                var newsubtak = {status: 0 ,name: nd, id: maxsubtak + 1 , idtask: +a  };
                subtak.push(newsubtak);
                console.log(newsubtak);

                var newidsubtak = idsubtak.length +1;
                idsubtak.push(newidsubtak);
                maxsubtak = Math.max.apply( Number , idsubtak );
                subtak1 = subtak;
                subtak1 = subtak1.filter((task)=>{
                    return task.idtask === +$(".seach7").children(".idarry").text();
                })
                showsubtakbyid(subtak1);
                $(this).val("");
            }else{
                alert("Hay nhap noi dung can nhap");
            }
        }
    })

    var cmt = [];
    var idcmt = [];
    var maxidcmt = 0;
    $("#addcmt").keyup(function(e){
        if(e.keyCode === 13 ){
            if($("#addcmt").val().trim().length > 0 ){
                var a = $(this).val();
                var b = $(".seach7").children(".idarry").text();

                var newcmt = {name: a, idcmt: maxidcmt + 1, idtask: +b };
                cmt.push(newcmt);

                var newidcmt = idcmt.length + 1;
                idcmt.push(newidcmt);
                maxidcmt = Math.max.apply( Number , idcmt );
                showcmtbyid();
                $(this).val("");
            }else{
                alert("Hay nhap noi dung");
            }
        }
    })

    function shownodebyid(){
        note1 =note;
        note1 = note1.filter((notes) => {
            return notes.idtask === +$(".seach7").children(".idarry").text();
        })
        $(".seach8-4-3").html("");
        note1.forEach((item) =>{
            var element = `<div class = "note">
                <div class = "valuenote" > ` + item.name + `</div>
                <div class = "idtask">` + item.idnote + `</div>
                <div class= "deletenote">
                    <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="delete"> <path d="M10.72,9.9975 L13.86,6.8575 C14.04,6.6575 14.04,6.3375 13.86,6.1375 C13.66,5.9575 13.34,5.9575 13.14,6.1375 L10,9.2775 L6.86,6.1375 C6.66,5.9575 6.34,5.9575 6.14,6.1375 C5.96,6.3375 5.96,6.6575 6.14,6.8575 L9.28,9.9975 L6.14,13.1375 C5.96,13.3375 5.96,13.6575 6.14,13.8575 C6.24,13.9575 6.38,13.9975 6.5,13.9975 C6.62,13.9975 6.76,13.9575 6.86,13.8575 L10,10.7175 L13.14,13.8575 C13.24,13.9575 13.38,13.9975 13.5,13.9975 C13.62,13.9975 13.76,13.9575 13.86,13.8575 C14.04,13.6575 14.04,13.3375 13.86,13.1375 L10.72,9.9975 Z" id="4"></path> </g> </g> </svg>
                </div>
            </div>`;
            $(".seach8-4-3").append(element);
        })
    }

    function showsubtakbyid(subtak1){
        // subtak1 = subtak;
        // subtak1 = subtak1.filter((task)=>{
        //     return task.idtask === +$(".seach7").children(".idarry").text();
        // })
        console.log(subtak1);
        $(".seach8-3-2").html("");
        $(".seach8-3-3").html("");
        subtak1.forEach((item) => {
            if(item.status === 0 ){
            var element = `<div class="seach8-3-2-1">
            <div class="ovuongsbutak">
                <svg class="task-check" id="checkrong" width="10px" height="10px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg>
                <svg class="task-checked" id="checksubtak" left="15px" top="16px" posposition="absolute" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 1.41421; display: none "> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path> <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path> </g> </svg>
            </div>
            <div class = "status" >` + item.status + `</div>
            <div class="textsubtaks">`+ item.name +`</div>
            <div class="idarrysubtak">`+ item.id +`</div>
            <div class = "idtakss" >`+ item.idtask +`</div>
            <div class="delesubtak">
                <svg  width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="delete"> <path d="M10.72,9.9975 L13.86,6.8575 C14.04,6.6575 14.04,6.3375 13.86,6.1375 C13.66,5.9575 13.34,5.9575 13.14,6.1375 L10,9.2775 L6.86,6.1375 C6.66,5.9575 6.34,5.9575 6.14,6.1375 C5.96,6.3375 5.96,6.6575 6.14,6.8575 L9.28,9.9975 L6.14,13.1375 C5.96,13.3375 5.96,13.6575 6.14,13.8575 C6.24,13.9575 6.38,13.9975 6.5,13.9975 C6.62,13.9975 6.76,13.9575 6.86,13.8575 L10,10.7175 L13.14,13.8575 C13.24,13.9575 13.38,13.9975 13.5,13.9975 C13.62,13.9975 13.76,13.9575 13.86,13.8575 C14.04,13.6575 14.04,13.3375 13.86,13.1375 L10.72,9.9975 Z" id="4"></path> </g> </g> </svg>
            </div>
        </div>`;
      
            $(".seach8-3-2").append(element);
            }else{
                var element = `<div class="seach8-3-3-1">
            <div class="ovuongsbutak">
                <svg class="task-check" id="checkrong" width="10px" height="10px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <g> <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z" style="fill:none;stroke-width:1px"></path> </g> </svg>
                <svg class="task-checked" id="checksubtak" left="15px" top="16px" posposition="absolute" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 1.41421; display: none "> <g> <path d="M9.5,14c-0.132,0 -0.259,-0.052 -0.354,-0.146c-1.485,-1.486 -3.134,-2.808 -4.904,-3.932c-0.232,-0.148 -0.302,-0.457 -0.153,-0.691c0.147,-0.231 0.456,-0.299 0.69,-0.153c1.652,1.049 3.202,2.266 4.618,3.621c2.964,-4.9 5.989,-8.792 9.749,-12.553c0.196,-0.195 0.512,-0.195 0.708,0c0.195,0.196 0.195,0.512 0,0.708c-3.838,3.837 -6.899,7.817 -9.924,12.902c-0.079,0.133 -0.215,0.221 -0.368,0.24c-0.021,0.003 -0.041,0.004 -0.062,0.004"></path> <path d="M15.5,18l-11,0c-1.379,0 -2.5,-1.121 -2.5,-2.5l0,-11c0,-1.379 1.121,-2.5 2.5,-2.5l10,0c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0c-0.827,0 -1.5,0.673 -1.5,1.5l0,11c0,0.827 0.673,1.5 1.5,1.5l11,0c0.827,0 1.5,-0.673 1.5,-1.5l0,-9.5c0,-0.276 0.224,-0.5 0.5,-0.5c0.276,0 0.5,0.224 0.5,0.5l0,9.5c0,1.379 -1.121,2.5 -2.5,2.5"></path> </g> </svg>
            </div>
            <div class = "status" >` + item.status + `</div>
            <div class="textsubtaks">`+ item.name +`</div>
            <div class="idarrysubtak">`+ item.id +`</div>
            <div class = "idtakss" >`+ item.idtask +`</div>
            <div class="delesubtak">
                <svg  width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="delete"> <path d="M10.72,9.9975 L13.86,6.8575 C14.04,6.6575 14.04,6.3375 13.86,6.1375 C13.66,5.9575 13.34,5.9575 13.14,6.1375 L10,9.2775 L6.86,6.1375 C6.66,5.9575 6.34,5.9575 6.14,6.1375 C5.96,6.3375 5.96,6.6575 6.14,6.8575 L9.28,9.9975 L6.14,13.1375 C5.96,13.3375 5.96,13.6575 6.14,13.8575 C6.24,13.9575 6.38,13.9975 6.5,13.9975 C6.62,13.9975 6.76,13.9575 6.86,13.8575 L10,10.7175 L13.14,13.8575 C13.24,13.9575 13.38,13.9975 13.5,13.9975 C13.62,13.9975 13.76,13.9575 13.86,13.8575 C14.04,13.6575 14.04,13.3375 13.86,13.1375 L10.72,9.9975 Z" id="4"></path> </g> </g> </svg>
            </div>
        </div>`;
      
            $(".seach8-3-3").append(element);
            }
        })
        console.log(subtak);
        for(let i =0; i < $(".seach8-3-2").children().length; i++){
            console.log(i);
            console.log("1111111111111111111111");
            if(+$(".seach8-3-2-1").eq(i).children(".status").text() === 0 ){
                console.log("2222222222222222222");
                $(".seach8-3-2-1").eq(i).children(".ovuongsbutak").children(".task-checked").hide();
                $(".seach8-3-2-1").eq(i).children(".ovuongsbutak").children(".task-check").show();
            }
            // }else{
            //     $(".seach8-3-2-1").eq(i).children(".ovuongsbutak").children(".task-checked").show();
            //     $(".seach8-3-2-1").eq(i).children(".ovuongsbutak").children(".task-check").hide();
                
            // }
        }
        for( let i = 0; i < $(".seach8-3-3").children().length; i++){
            if(+$(".seach8-3-3-1").eq(i).children(".status").text() === 1 ){
                $(".seach8-3-3").css({'border-top': '#afafaf solid 1px'})
                $(".seach8-3-3-1").eq(i).children(".ovuongsbutak").children(".task-checked").show();
                $(".seach8-3-3-1").eq(i).children(".ovuongsbutak").children(".task-checked").css({'position': 'absolute', 'top' : '-2px', 'left' : '-2px' })
                $(".seach8-3-3-1").eq(i).children(".ovuongsbutak").children(".task-check").hide();
            }
        }

    }

    function showcmtbyid(){
        cmt1 = cmt;
        cmt1 = cmt1.filter((cmt2) => {
            return cmt2.idtask === +$(".seach7").children(".idarry").text();
        })
        $(".seach8-6").html("");
        cmt1.forEach((item) => {
            var element = `<div class= "test1"><img style="border-radius: 100%" src='E:\\phim\\a7602e58-5707-4ca9-8a6e-8d980c667f5e.png' height="32px"; width="32px";>
            <div class="test">
                ` + item.name + `
            </div>
            <span class="idtaks">` + item.idcmt + `</span>
            <div class= "delete1">
            <svg class="delete" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill-rule="evenodd"> <g id="delete"> <path d="M10.72,9.9975 L13.86,6.8575 C14.04,6.6575 14.04,6.3375 13.86,6.1375 C13.66,5.9575 13.34,5.9575 13.14,6.1375 L10,9.2775 L6.86,6.1375 C6.66,5.9575 6.34,5.9575 6.14,6.1375 C5.96,6.3375 5.96,6.6575 6.14,6.8575 L9.28,9.9975 L6.14,13.1375 C5.96,13.3375 5.96,13.6575 6.14,13.8575 C6.24,13.9575 6.38,13.9975 6.5,13.9975 C6.62,13.9975 6.76,13.9575 6.86,13.8575 L10,10.7175 L13.14,13.8575 C13.24,13.9575 13.38,13.9975 13.5,13.9975 C13.62,13.9975 13.76,13.9575 13.86,13.8575 C14.04,13.6575 14.04,13.3375 13.86,13.1375 L10.72,9.9975 Z" id="4"></path> </g> </g> </svg>
            </div>
        </div>`;
        $(".seach8-6").append(element);
        })
    }

        $("body").on("click", ".delesubtak", function(){
        console.log("da nhan xoa subtak");
        var a = $(this.parentElement).children(".idarrysubtak").text();
        subtak = subtak.filter((subtak1) => {
            return subtak1.id !== +a;
        })
        subtak = subtak.filter((task)=>{
            return task.idtask === +$(".seach7").children(".idarry").text();
        })
        
        showsubtakbyid(subtak);
    })

        $("body").on("click", ".deletenote", function(){
        var a = $(this.parentElement).children(".idtask").text();
        note = note.filter((note2) => {
            return note2.idnote !== +a;
        })
        shownodebyid();
        console.log("nhan suwj kien xoa note");
    })

    $(".seach8-6").on("click", ".delete1", function(){
        console.log("da nahn xoa");
        var a = $(this.parentElement).children(".idtaks").text();
        cmt = cmt.filter((cmt2) => {
            return cmt2.idcmt !== +a;
        })
        showcmtbyid();
        // $(this.parentElement).remove();
    })

    $("body").on("click", ".ovuongsbutak", function(){
        var a = $(this.parentElement).children(".idarrysubtak").text();
        var b = $(this.parentElement).children(".status").text();
        if( +b === 0 ){
            subtak.forEach((subtak1) => {
            if (subtak1.id === +a) {
                subtak1.status = 1;
                }
            })
        }else{
            subtak.forEach((subtak1) => {
                if (subtak1.id === +a) {
                    subtak1.status = 0;
                    }
                })
        }
        var subtak1 = subtak;
        subtak1 = subtak1.filter((task)=>{
            return task.idtask === +$(".seach7").children(".idarry").text();
        })
        showsubtakbyid(subtak1);
        })

        // var task2 = tasks;

        // $("#seach1-2").click(function(){
        //     task4 = tasks;
        //     tasks4 = tasks4.filter((task) => {
        //         return task.idL === layidlist;
        //     })
        // })
        
        $("#seach1-2").keyup(function(e){
            if( e.keyCode === 13 ) {
                if($("#seach1-2").val().trim().length > 0){
                    
                    console.log("nhan suwj kien tim kiem");
                    var a = $("#seach1-2").val();
                    console.log(a);
                    // var task4 = tasks;
                    // tasks4 = tasks4.filter((task) => {
                    //     return task.idL === layidlist;
                    // })
                    var task3 = tasks;
                    task3 = task3.filter((task) => {
                        return task.name.indexOf(a) >= 0;
                    })
                    // console.log(tasksfind);
                showtaskbyid(task3);
                }else{
                    tasksid = tasks;
                    tasksid = tasksid.filter((task) => {
                        return task.idL === layidlist;
                    })
                    showtaskbyid(tasksid);
                }
            }
        })

});