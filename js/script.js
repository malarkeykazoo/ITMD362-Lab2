function init(){
  function f1() {
    event.preventDefault()
    var name = document.getElementById("fName").value;
    alert("Thank you, " + name + ". See, nothing bad happened.");
  }
  document.getElementById("awesomeForm").addEventListener("submit", f1);
  window.addEventListener('load', init);
}