export const userInfoStorage = (id, userFirstName, userLastName, email, phone, avatar) => {
  return new Promise((resolve, reject) => {
    let usersList = JSON.parse(window.localStorage.getItem('newUser'));
    if (!usersList) usersList = {};
    usersList = {id, userFirstName, userLastName, email, phone, avatar};
    window.localStorage.setItem('newUser', JSON.stringify(usersList));
    resolve({data: id})
  })
}