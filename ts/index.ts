let name_user = document.getElementById("name_user")! as HTMLInputElement;
let email_user = document.getElementById("email_user")!  as HTMLInputElement;
let age_user = document.getElementById("age_user")!  as HTMLInputElement;
let country_user = document.getElementById("country_user")! as HTMLInputElement;
let add_btn = document.getElementById("add_btn") ! as HTMLInputElement;
let delete_btn = document.getElementById("delete")! as HTMLInputElement;
let update_btn = document.getElementById("update")! as HTMLInputElement;
let clear_btn = document.getElementById("clear_btn")! as HTMLInputElement; 
let current:number = 0;
let arr:User[]=[];
interface User 
{
    name:string;
    email:string;
    age:string;
    country:string;
}
add_btn!.addEventListener("click", () =>{
    if(add_btn.innerHTML == "update")
    {
        saveUser();      
        display();
        clear();
        add_btn.innerHTML = "submit" ;
    }
    else
    {
        submit();
        display();
        clear();
    }
})
clear_btn.addEventListener("click",()=>{
    clear();
    add_btn.innerHTML = "submit" ;
})
function submit()
{
    let infoUser:User = {
        name:name_user.value,
        email:email_user.value,
        age:age_user.value,
        country:country_user.value,
    }
    arr.push(infoUser); 
    localStorage.setItem("myinfo", JSON.stringify(arr));
}
function display()
{
    let infoUser = " ";
    for(let i = 0 ; i < arr.length; i++){
        infoUser+=`
            <tr>
                <td>${arr[i].name}</td>
                <td>${arr[i].email}</td>
                <td>${arr[i].age}</td>
                <td>${arr[i].country}</td>
                <td><button id="delete" onclick="deleteUser(${i})"   class="btn btn-info my-3">Delete</button></td>
                <td><button id="update" onclick="updateUser(${i})"   class="btn btn-info my-3">update</button></td>
            </tr>
`
    } 
    document.getElementById("tBody")!.innerHTML=infoUser;
}
function clear()
{
    name_user.value ="";
    email_user.value="";
    age_user.value="";
    country_user.value="";
}
function deleteUser(index:number)
{
    arr.splice(index, 1);
    localStorage.setItem("myinfo", JSON.stringify(arr));
    display();
}
function updateUser(index:number){
    current = index;
    name_user.value= arr[index].name
    email_user.value=arr[index].email
    age_user.value=arr[index].age
    country_user.value=arr[index].country
    add_btn.innerHTML ="update"
}
function saveUser(){
    let infoUser:User= {
        name:name_user.value,
        email:email_user.value,
        age:age_user.value,
        country:country_user.value,
    }
    arr[current] = infoUser
    localStorage.setItem("myinfo", JSON.stringify(arr))
}





























