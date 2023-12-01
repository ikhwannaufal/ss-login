function login() {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const result = document.getElementById("result");

  const isCorrectUsername = usernameInput.value === 'prettyuser';
  const isCorrectPassword = passwordInput.value === 'dorwssap';

  if (isCorrectPassword && isCorrectUsername) {
    result.innerHTML = `Welcome User!`;
  } else if (isCorrectUsername) {
    result.innerHTML = `Wrong password`;
  } else {
    result.innerHTML = `Wrong username/password`;
  }
}