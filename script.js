arr = [];
const add = () => {
    i = arr.length;
    arr[i] = prompt("Add a bookmark");
}
const view = () => {
    alert(`The bookmarks are ` + arr + ` . `);
}
const remove = () => {
    r = prompt("Which bookmark do you want to remove? Type a number. ");
    r = Number.parseInt(r);
    arr.splice(r - 1, 1);
    alert("The bookmark is deleted successfully. ");
}
document.getElementById("view").addEventListener('click', view);
document.getElementById("add").addEventListener('click', add);
document.getElementById("remove").addEventListener('click', remove);
