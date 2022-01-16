let count = 0;
function selectButton(elem) {
    if (elem.classList.contains('unselected-tag')) {

        elem.classList.remove('unselected-tag');
        elem.classList.add('selected-tag');
        var icon = elem.getElementsByTagName("i")[0];
        icon.classList.remove('bi-plus');
        icon.classList.add('bi-check');
    }
    else {
        elem.classList.add('unselected-tag');
        elem.classList.remove('selected-tag');
        var icon = elem.getElementsByTagName("i")[0];
        icon.classList.remove('bi-check');
        icon.classList.add('bi-plus');
    }
}

// bi bi-plus"></i></button> <!-- bi-check-->

function foo(){
    console.log("fooo");
}