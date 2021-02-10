function init(){
  document.getElementById("awesomeForm").addEventListener("submit", f1);
    function f1() {
      alert("Thank you. See, nothing bad happened.");
    }
    window.addEventListener('load', init);
  }