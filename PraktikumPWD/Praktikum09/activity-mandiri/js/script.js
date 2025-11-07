function fn_ValForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name == "" || email == "" || message == "") {
        alert("Anda belum mengisikan nama, email, message!");
        return false;
    }

    var pattern = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;
    if (!pattern.test(email)) {
        alert("Format email tidak valid!");
        return false;
    }

    return true;
}