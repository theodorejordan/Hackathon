let selectedTags = []; // where we will store the selected tags

function selectButton(elem) {
    var icon = elem.getElementsByTagName("i")[0];

    // if tag was selected
    if (elem.classList.contains('unselected-tag')) {
        elem.classList.remove('unselected-tag');
        elem.classList.add('selected-tag');
        icon.classList.remove('bi-plus');
        icon.classList.add('bi-check');

        addTag(getTagText(elem));
    }
    // else was unselected
    else {
        elem.classList.add('unselected-tag');
        elem.classList.remove('selected-tag');
        icon.classList.remove('bi-check');
        icon.classList.add('bi-plus');

        removeTag(getTagText(elem));
    }
}

function foo(){
    console.log("fooo");
}


function openPreviewPanel(){
    document.getElementById("preview-panel").style.width = "100%";
    document.getElementById("main-content").style.marginRight = "100%";
}

function closePreviewPanel(){
    document.getElementById("preview-panel").style.width = "0%";
    document.getElementById("main-content").style.marginRight = "0%";
}

function selectButtonQuiz(elem) {
    var icon = elem.getElementsByTagName("i")[0];

    // if tag was selected
    if (elem.classList.contains('unselected-tag-quiz')) {
        elem.classList.remove('unselected-tag-quiz');
        elem.classList.add('selected-tag-quiz');
        icon.classList.remove('bi-plus');
        icon.classList.add('bi-check');

        addTag(getTagText(elem));
    }
    // else was unselected
    else {
        elem.classList.add('unselected-tag-quiz');
        elem.classList.remove('selected-tag-quiz');
        icon.classList.remove('bi-check');
        icon.classList.add('bi-plus');

        removeTag(getTagText(elem));
    }

    console.log(selectedTags);
}

function addTag(tag){
    selectedTags.push(tag);
}
function removeTag(tag){
    selectedTags = selectedTags.filter(function(item) {
        return item !== tag
    });
}
function getTagText(elem){
    return elem.textContent.trim();
}