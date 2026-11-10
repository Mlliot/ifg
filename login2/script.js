let user = [{"username":"admin", "password":"1234"}]; 

//main
document.addEventListener("DOMContentLoaded", () => {
        document.getElementById('login_form')
        .addEventListener("submit", async (e) => {

                e.preventDefault();

                if(await login()){
                        localStorage.setItem("username", "admin");
                        window.location.assign("products.html");
                }

        });

})

//pulls username and password from form
function login(){
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        document.getElementById("username").value = '';
        document.getElementById("password").value = '';
        if(username == user[0].username && password == user[0].password){
                console.log("Logged in as: " + username);
                return true;
        }

}
