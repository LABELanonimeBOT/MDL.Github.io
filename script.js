function authenticate() {
    var password = document.getElementById("passwordInput").value;
    if (password === "MDL") {
        document.getElementById("mainContent").style.display = "block";
        document.getElementById("loginArea").style.display = "none";
        document.getElementById("mdlLogo").style.animation = "colorChange 3s forwards";
    } else {
        alert("Password errata!");
    }
}

@keyframes colorChange {
    0% { color: #333; }
    100% { color: #e74c3c; }
}
