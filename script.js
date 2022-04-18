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

for(i = 0; i < 7;){
    for(j = 0; j < 8;){
        document.getElementById(`${i}${j}`)
        localStorage.getItem(`${i}${j}`)

    }
}
// }
// const arr = [];

// for(let i = 0; i < 2; i++){
//     const arr2 = [];
//     for(let j = 0; j < 3; j++){
//         arr2.push({name: 'shobhit', link: 'https://www.google.com'});
//     }
//     arr.push(arr2);
// }

// localStorage.setItem('timetable', JSON.stringify(arr));

// const arr = JSON.parse('timetable');
// arr[2][3] = {dfldf, dfdklflk};
// localStorage.setItem('timetable', JSON.stringify(fldfl))
