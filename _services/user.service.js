export const userService = {
    login,
    logout,
    isLogged,
	getUsername
};

function login(username, password) {
    let user = {};
    user.authdata = window.btoa(username + ':' + password);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('username', username);
	
	return user;  
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function isLogged() {
  return localStorage.getItem('user');
}

function getUsername(username) {
	return localStorage.getItem('username');
}