let form = document.querySelector("form");


form.addEventListener("submit", (event)=>{
    event.preventDefault();

    let inputs = document.querySelectorAll("input");
    let users = JSON.parse(localStorage.getItem("users"));


    let findUser = users.find(user=> user.username == inputs[0].value && user.password==inputs[1].value);

    if (findUser) {
        alert("giris ugurludur!");
        window.location.href = "index.html"
    } else {
        alert("user tapilmadi!")
    }
    inputs[0].value = "";
    inputs[1].value = "";
})