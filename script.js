var addBtn=document.querySelectorAll("tr td .buttons");
//console.log(addBtn);
Array.from(addBtn).forEach(function(addBtn){
    addBtn.onClick=function(e){ 
        location.href="form.html"
    }
}