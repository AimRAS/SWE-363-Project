document.getElementById('searchField').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      document.getElementById('searchForm').submit();
    }
});

document.getElementById('deanBtn').addEventListener('click', function (event) {
    
    document.getElementById('searchForm').submit();
    
});