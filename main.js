function hideShowFunction(anyID) {
    if (document.getElementById(anyID).style.display == "none"
         || document.getElementById(anyID).style.display == "") {
      document.getElementById(anyID).style.display = "inline";
    } else {
      document.getElementById(anyID).style.display = "none";
    }
}
function funct2() {
  window.open("index.html", "_self");
}
