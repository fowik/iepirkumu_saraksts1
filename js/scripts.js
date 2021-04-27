const POP_UP = document.getElementById('popUp');
const iepirkumaList = document.getElementById('iepirkumaList');
let iepirkumi = [];


window.addEventListener('load', () => {
    iepirkumi = JSON.parse(localStorage.getItem("iepirkumi") || "[]");
    console.log(iepirkumi)
    render();
});

document.getElementById('newPurchase').addEventListener('click', () => {
    POP_UP.style.display = 'block';
})

document.getElementById('x').addEventListener('click', () => {
    POP_UP.style.display = 'none';
})

document.getElementById('addPurchase').addEventListener('click', () => {
    POP_UP.style.display = 'none';

    let purchases = {purchase: purchase.value, daudzums: daudzums.value};
     
    purchase.value = "";
    daudzums.value = "";

    iepirkumi.push(purchases);

    render();
})

function render() {
    iepirkumaList.innerHTML = "";

    for(let i = 0; i < iepirkumi.length; i++) {
        let iepirkumiS = `        
        <div class="iepirkumiS">
            <h3>Iepirkums: ${iepirkumi[i].purchase}</h3>
            <h3>Daudzums: ${iepirkumi[i].daudzums}</h3>
            <button id="deleteBtn">Dzēst</button>
        </div>`;
        iepirkumaList.innerHTML += iepirkumiS;
    }

    localStorage.setItem('iepirkumi', JSON.stringify(iepirkumi));

}

document.getElementById('deleteBtn').addEventListener('click', () => {
    
    iepirkumaList.style.display = 'none';

})