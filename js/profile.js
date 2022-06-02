const displayName = document.getElementById("displayName");

// get user (signed in user)
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    displayName.innerText = `welcome ${user.email}`;
  } else {
    console.log("user not signed in");
  }
});

// sign out
document.getElementById("logout").onclick = function () {
  firebase.auth()
    .signOut()
    .then(() => {
      window.location.href = "/views/login.html";
    })
    .catch((err) => console.log(err));
};
