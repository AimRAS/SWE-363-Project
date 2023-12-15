document.getElementById('searchField').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      document.getElementById('searchForm').submit();
    }
});

const deanBtn = document.getElementById('deanBtn')
const allBtn = document.getElementById('allBtn')

deanBtn.addEventListener('click', function (event) {
 
    
    if (deanBtn.classList.contains("Selected")) {
      // If the current value is "On", change it to "Off"
      deanBtn.value = "";
    } else {
      // If the current value is "Off", change it to "On"
      deanBtn.value = "Dean";
    }

  document.getElementById('searchForm').submit();
    
});