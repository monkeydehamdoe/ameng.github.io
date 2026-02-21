function login() {
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;

  if (user === "ameng" && pass === "opengsukaameng") {
    document.getElementById("pesan").innerHTML =
      "Login berhasil! Mengalihkan...";
    document.getElementById("pesan").style.color = "green";

    // redirect setelah 1 detik
    setTimeout(function () {
      window.location.href = "story/index.html";
    }, 1000);
  } else {
    document.getElementById("pesan").innerHTML =
      "PW nya aku ganti, agak malu sikit anjayy, tanya openg lagi eee";
    document.getElementById("pesan").style.color = "red";
  }
}
