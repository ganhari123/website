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

function funct3() {
  window.open("Resume.pdf", "_blank");
}

function funct4() {
  window.open("newPage.html", "_self");
}
