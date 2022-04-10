const addForm=document.getElementById('form');
console.log(addForm);
addForm.addEventListener('submit',function(e){
    e.preventDefault();
    var fill=addForm.querySelector('input[type="text"]').value;
    var hill=addForm.querySelector('input[type="url"]').value;
    console.log(fill);
    console.log(hill);
    
})






