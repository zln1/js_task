function menu() {
    if (document.getElementById('menu').style.display==="inline-block"){
        document.getElementById('menu').style.display = "none";
        document.getElementById('cont').style.transform="translate(0,0)";
    }else {
        document.getElementById('menu').style.display = "inline-block";
        document.getElementById('cont').style.transform="translate(50%,0)";
    }

}