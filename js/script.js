function init(){
  document.getElementById("awesomeForm").addEventListener("submit", f1);
  function f1() {
    var name = document.getElementById("fName").value;
    alert("Thank you, " + name + ". See, nothing bad happened.");
  }
  window.addEventListener('load', init);
}