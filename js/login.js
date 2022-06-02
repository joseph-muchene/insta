const loginBtn = document.getElementById("loginBtn");

loginBtn.onclick = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // register user

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
       window.location.href = "/views/profile.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
};
