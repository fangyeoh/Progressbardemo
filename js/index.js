function move2(value) {
var bar = document.getElementById("select1").value;
  var barstatus = bar +'status';
  var width = document.getElementById(bar).value;
  var newwidth = parseInt(value) + parseInt(width);
  var elem = document.getElementById(barstatus); 
 
  elem.style.backgroundColor = "#25F";
  elem.style.width = parseInt(newwidth) + '%'; 
  elem.innerHTML = parseInt(newwidth) * 1  + '%';
  document.getElementById(bar).value = newwidth;
  
  if (newwidth > 100)
  {
    elem.style.backgroundColor = "red";
    elem.style.width = '100' + '%'; 
    
    if (newwidth >= 190)
    { 
    elem.innerHTML = 190 * 1  + '%';
    document.getElementById(bar).value = 190;
    }
    
  }
  else if (newwidth < 0)
  {
    elem.style.width = '0' + '%'; 
    elem.innerHTML = 0 * 1  + '%';
    document.getElementById(bar).value = 0;
  }
}