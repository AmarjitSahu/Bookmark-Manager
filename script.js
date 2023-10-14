arr = [];
const add = () => {
    i = arr.length;
    arr[i] = prompt("Add a bookmark");
}
const view = () => {
    alert(`The bookmarks are ` + arr + ` . `);
}
const remove = () => {
    do {
        r = prompt("Which bookmark do you want to remove? Type a number. ");
        r = Number.parseInt(r);
        if (arr[r - 1] == undefined) {
            alert("The bookmark does not exist. Try again");
        }
    } while (arr[r - 1] == undefined);
    arr.splice(r - 1, 1);
    if (arr[r - 1] == undefined) {
        alert("The bookmark is deleted successfully. ");
    }
    else {
        alert("The bookmark could not be removed. Please try again. ")
    }
}
document.getElementById("view").addEventListener('click', view);
document.getElementById("add").addEventListener('click', add);
document.getElementById("remove").addEventListener('click', remove);
