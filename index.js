window.addEventListener('load', function() {
    var modal = document.getElementById('myModal');
    var btn = document.getElementById("openModalBtn");
    var closeBtn = document.getElementsByClassName("close")[0];
  
    btn.onclick = function() {
      modal.style.display = "block";
    }
  
    closeBtn.onclick = function() {
      modal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });
  window.addEventListener('load', function() {
    var modal = document.getElementById('myModal');
    var btn = document.getElementById("openModalBtn1");
    var closeBtn = document.getElementsByClassName("close")[0];
  
    btn.onclick = function() {
      modal.style.display = "block";
    }
  
    closeBtn.onclick = function() {
      modal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });
  window.addEventListener('load', function() {
    var modal = document.getElementById('myModal');
    var btn = document.getElementById("openModalBtn2");
    var closeBtn = document.getElementsByClassName("close")[0];
  
    btn.onclick = function() {
      modal.style.display = "block";
    }
  
    closeBtn.onclick = function() {
      modal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });