var name_user = document.getElementById("name_user");
var email_user = document.getElementById("email_user");
var age_user = document.getElementById("age_user");
var country_user = document.getElementById("country_user");
var add_btn = document.getElementById("add_btn");
var delete_btn = document.getElementById("delete");
var update_btn = document.getElementById("update");
var clear_btn = document.getElementById("clear_btn");
var current = 0;
var arr = [];
add_btn.addEventListener("click", function () {
    if (add_btn.innerHTML == "update") {
        saveUser();
        display();
        clear();
        add_btn.innerHTML = "submit";
    }
    else {
        submit();
        display();
        clear();
    }
});
clear_btn.addEventListener("click", function () {
    clear();
    add_btn.innerHTML = "submit";
});
function submit() {
    var infoUser = {
        name: name_user.value,
        email: email_user.value,
        age: age_user.value,
        country: country_user.value,
    };
    arr.push(infoUser);
    localStorage.setItem("myinfo", JSON.stringify(arr));
}
function display() {
    var infoUser = " ";
    for (var i = 0; i < arr.length; i++) {
        infoUser += "\n            <tr>\n                <td>".concat(arr[i].name, "</td>\n                <td>").concat(arr[i].email, "</td>\n                <td>").concat(arr[i].age, "</td>\n                <td>").concat(arr[i].country, "</td>\n                <td><button id=\"delete\" onclick=\"deleteUser(").concat(i, ")\"   class=\"btn btn-info my-3\">Delete</button></td>\n                <td><button id=\"update\" onclick=\"updateUser(").concat(i, ")\"   class=\"btn btn-info my-3\">update</button></td>\n            </tr>\n");
    }
    document.getElementById("tBody").innerHTML = infoUser;
}
function clear() {
    name_user.value = "";
    email_user.value = "";
    age_user.value = "";
    country_user.value = "";
}
function deleteUser(index) {
    arr.splice(index, 1);
    localStorage.setItem("myinfo", JSON.stringify(arr));
    display();
}
function updateUser(index) {
    current = index;
    name_user.value = arr[index].name;
    email_user.value = arr[index].email;
    age_user.value = arr[index].age;
    country_user.value = arr[index].country;
    add_btn.innerHTML = "update";
}
function saveUser() {
    var infoUser = {
        name: name_user.value,
        email: email_user.value,
        age: age_user.value,
        country: country_user.value,
    };
    arr[current] = infoUser;
    localStorage.setItem("myinfo", JSON.stringify(arr));
}
