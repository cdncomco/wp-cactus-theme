const welcomes = [
    "Welcome",
    "Selamat Datang",
    "いらっしゃいませ",
    "Добро пожаловать",
    "Bienvenido",
    "Bienvenue",
    "أهلا بك",
];
var no = 0;
function sayWelcome() {
    $("#hello").html(welcomes[no]);
    if (no < welcomes.length - 1) {
        no++;
    } else {
        no = 0;
    }
}
setInterval(sayWelcome, 2000);
