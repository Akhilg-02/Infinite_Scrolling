let container = document.querySelector(".container");

let nums = document.querySelector(".nums");

//---------------------------------------------------------->
    
    function infiniteLoop(){
        var main = document.createElement("div");
        main.setAttribute("id","main");
        for (i=1; i<=50 ;i++) {
            main.innerHTML += ` <h3>Masai Student ${i}</h3>` + "<br/>";
        }
      
        nums.append(main);
    
        container.append(nums);

    }
    infiniteLoop()



    //----------------------------------------

    window.addEventListener("scroll",()=>{
        if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
            infiniteLoop()

        }
    })



