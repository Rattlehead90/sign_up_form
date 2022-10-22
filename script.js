function compareInputs() {
  let pwd_init = document.getElementById('password').value;
  let pwd_conf = document.getElementById('conf_password').value;
  const pwd_input = document.getElementById('password');
  const pwd_conf_input = document.getElementById('conf_password');

  if (pwd_conf === pwd_init) {
    pwd_input.classList.remove("no_match");
    pwd_input.classList.add("matching_passwords");
    pwd_conf_input.classList.remove("no_match")
    pwd_conf_input.classList.add("matching_passwords");
  } else {
    pwd_input.classList.remove("matching_passwords");
    pwd_input.classList.add("no_match");
    pwd_conf_input.classList.remove("matching_passwords");
    pwd_conf_input.classList.add("no_match");
  }
}
