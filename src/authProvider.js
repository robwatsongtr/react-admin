
// For this tutorial, since there is no public authentication API, 
// we can use a fake authentication provider that accepts every login request,
// and stores the username in localStorage. 
// Each page change will require that localStorage contains a username item.

// The authProvider must expose 5 methods, each returning a Promise:
// 
// login, logout, checkError, checkAuth, getPermissions 


// in src/authProvider.js
const authProvider =  {
  // called when the user attempts to log in
  login: ({ username }) => {
    localStorage.setItem('username', username);
    // accept all username/password combinations
    return Promise.resolve(); // will return JWT payload
  },
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem('username');
    return Promise.resolve(); // will return acknowlegement or error 
  },
  // called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
        localStorage.removeItem('username');
        return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem('username')
      ? Promise.resolve()
      : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};

export default authProvider



