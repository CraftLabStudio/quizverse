    const toggle =
    document.getElementById("themeToggle");

if(localStorage.getItem("theme")==="light"){
    document.body.classList.add("light-theme");
    toggle.classList.replace("fa-moon","fa-sun");
}

toggle.addEventListener("click",()=>{

    document.body.classList.toggle("light-theme");

    if(document.body.classList.contains("light-theme")){
        toggle.classList.replace("fa-moon","fa-sun");
        localStorage.setItem("theme","light");
    }
    else{
        toggle.classList.replace("fa-sun","fa-moon");
        localStorage.setItem("theme","dark");
    }

});