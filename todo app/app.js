var inputForm = document.getElementById('item-list');
var ol = document.getElementById('list-item');
var addBtn = document.getElementById('addList');
var editElement;

function addInList() {

    var list = document.createElement('LI');
    var listText = document.createTextNode(inputForm.value);

    var delBtn = document.createElement('button');
    var delText = document.createTextNode('Delete');
    delBtn.appendChild(delText);
    delBtn.setAttribute('onclick', 'deleteElement(this)')

    var editBtn = document.createElement('button');
    var editText = document.createTextNode('Edit');
    editBtn.appendChild(editText);
    editBtn.setAttribute('onclick', 'editElementFunc(this)');


    list.appendChild(listText);
    list.appendChild(editBtn);
    list.appendChild(delBtn);

    ol.appendChild(list);
    inputForm.value = '';
}

function deleteElement(element) {
    ol.removeChild(element.parentNode);
}

function editElementFunc(element) {
    editElement = element.parentNode;
    addBtn.innerHTML = "Update";
    inputForm.value = editElement.firstChild.nodeValue;
    addBtn.onclick = updateList;
}

function updateList() {
    editElement.firstChild.nodeValue = inputForm.value;
    inputForm.value =   '  '  ;
    addBtn,innerHTML = "Add in List";
    addBtn.onclick = addInList;
    editElement = undefined;
}
