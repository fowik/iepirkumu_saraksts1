const POP_UP = document.getElementById('popUp');
const IEPIRKUMALIST = document.getElementById('iepirkumaList');
const list = document.querySelector('#iepirkumaList')
let iepirkumi = [];


window.addEventListener('load', () => {
    iepirkumi = JSON.parse(localStorage.getItem("iepirkumi") || "[]");
    console.log(iepirkumi)
    render();
});

//Izdēs lapiņas
list.addEventListener('click', (e) => {
    if(e.target.className == 'del'){
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
      iepirkumi.splice(li, 1);
      localStorage.setItem('iepirkumi',JSON.stringify(iepirkumi));
    };
});

//Pievieno pop_up, kurā var rakstīt inputā.
document.getElementById('newPurchase').addEventListener('click', () => {
    POP_UP.style.display = 'block';
})

//Poga, ar kuru var aizstaisit ciet pop_up'u
document.getElementById('x').addEventListener('click', () => {
    POP_UP.style.display = 'none';
})

//Pievieno jaunu iepirkumu
document.getElementById('addPurchase').addEventListener('click', () => {
    POP_UP.style.display = 'none';

    let purchases = {purchase: purchase.value, daudzums: daudzums.value};
     
    purchase.value = "";
    daudzums.value = "";

    iepirkumi.push(purchases);

    render();
})

function render() {
    IEPIRKUMALIST.innerHTML = "";

    for(let i = 0; i < iepirkumi.length; i++) {
        let iepirkumiS = `        
        <li class="iepirkumiS">
            <h3>Iepirkums: ${iepirkumi[i].purchase}</h3>
            <h3>Daudzums: ${iepirkumi[i].daudzums}</h3>
            <button class="del">Delete</button>
        </li>`;
        IEPIRKUMALIST.innerHTML += iepirkumiS;
    }

    localStorage.setItem('iepirkumi', JSON.stringify(iepirkumi));

}