const tabitems = document.querySelectorAll('tab-items');
const tabcontentitems = document.querySelectorAll('tab-content-items');
function selectitem(e) {
    removeBorder();

    this.classlist.add('tab-border');
}

function removeBorder() {
    tabitems.forEach(item => item.classList.remove('tab-border'));
}
tabitems.forEach(item => item.addEventListener('click', selectitem));