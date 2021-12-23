const handleScroll=(e)=>{
    const scrollY = window.scrollY;
    const navBar = document.getElementsByClassName("main-navigation")[0];

    if(scrollY > 20){
        navBar.classList.add("main-navigation-with-background");
    } else {
        navBar.classList.remove("main-navigation-with-background");
    }
}

export default handleScroll;