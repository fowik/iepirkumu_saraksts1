const POP_UP = document.getElementById('popUp');

document.getElementById('newPurchase').addEventListener('click', () => {
    POP_UP.style.display = 'block';
})

document.getElementById('addPurchase').addEventListener('click', () => {
    POP_UP.style.display = 'none';

    let iepirkums = {purchase: purchase.value, daudzums: daudzums.value};
     
    purchase.value = ""
    daudzums.value = ""

    console.log(iepirkums);
})

