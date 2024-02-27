function validateform(){
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    if (!email  || !password){
        alert("Please fill email or password")
        return false
    }

    return true
}