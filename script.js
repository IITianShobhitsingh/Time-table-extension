const delta=document.getElementsByClassName('buttons');
console.log(delta);
var neon=Array.from(delta);
console.log(neon)
console.log(Array.isArray(neon));
// var mainThing=neon.appendChild.createElement(div);
// var mainLink=neon.appendChild.createElement(div);
// var resetBtn=neon.appendChild.createElement(button)

// mainThing.innerHTML=fill;
// console.log(mainThing.innerHTML);
// mainLink.innerHTML=localStorage.getItem(link);
// console.log(mainLink.innerHTML);
// for(let i = 0; i < neon.length; i++){
//     const contentDiv = document.createElement('div');
//     contentDiv.innerText = localStorage.getItem();
//     neon[i].appendChild(contentDiv);
// }

// for(i = 0; i < 7){
//     for(j = 0; j < 8){
//         document.getElementById(`${i}${j}`)
//         localStorage.getItem(`${i}${j}`)

//     }
// }
                        /*
                        1) how will we add specific data storage indexes(by key and value of entered parameters)
                        2) also I have to do this specifically on that submit button which i have preseed so why do i need getElementById('$(i)$(j)')
                        3)** what if I add individual forms to open when a button is pressed and then take data from that and save that particular data in local Storage so that it doesnt changes when reloaded. and add a reset button with function to reset it or edit it?**
                        5) woiuld that be feasible?
                        6) explain the second method again in brief.
                        */


//
const arr = [];

for(let i = 0; i < 2; i++){
    const arr2 = [];
    for(let j = 0; j < 3; j++){
        arr2.push({name: 'shobhit', link: 'https://www.google.com'});
    }
    arr.push(arr2);
}

// localStorage.setItem('timetable', JSON.stringify(arr));

// const arr = JSON.parse('timetable');
// arr[2][3] = {dfldf, dfdklflk};
// localStorage.setItem('timetable', JSON.stringify(fldfl))






