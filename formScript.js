const addForm=document.getElementById('form');
addForm.addEventListener('submit',function(e){
    e.preventDefault();
    //taking value from input
    var fill=addForm.querySelector('input[type="text"]').value;
    var hill=addForm.querySelector('input[type="url"]').value;
    console.log(fill);
    console.log(hill);
    //storing the value in local storage
    localStorage.setItem('topic',fill);
    localStorage.setItem('url',hill);
    location.href="index.html";
});