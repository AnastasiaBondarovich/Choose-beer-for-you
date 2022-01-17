import './styles/style.scss';
import {addBeerImg, getBeerInfo, getUserInfo} from './api/instance';
import { userInfoStorage } from './api/localStorageUser';

const addUser = (id, userFirstName, userLastName, email, phone, avatar) => {
  userInfoStorage(id, userFirstName, userLastName, email, phone, avatar).then(({ data }) =>
  {console.log('addUser', data)}
)}

getUserInfo(). then((response) => {
  let userInfo = response.data;
  addUser(userInfo.id, userInfo.first_name, userInfo.last_name, userInfo.email, userInfo.phone_number, userInfo.avatar)
})

const showUserInfo = () => {
  let user = JSON.parse(localStorage.newUser);
  document.querySelector('.user-firstName').innerHTML = `First name: ${user.userFirstName}`;
  document.querySelector('.user-lastName').innerHTML = `Last name: ${user.userLastName}`;
  document.querySelector('.user-email').innerHTML = `Email: ${user.email}`;
  document.querySelector('.user-phone').innerHTML = `Phone number: ${user.phone}`;
  let img = document.createElement('img');
  document.querySelector('.user-avatar').appendChild(img).src = `${user.avatar}`;
}


const changeBeer = () => {
  getBeerInfo(). then((response) => {
  let beerInfo = response.data;
  document.querySelector('.beer-item-title').innerHTML = `We have selected a beer especially for you!`;
  document.querySelector('.beer-title').innerHTML = `Beer: ${beerInfo.name}`;
  document.querySelector('.beer-brand').innerHTML = `Brand: ${beerInfo.brand}`;
  document.querySelector('.beer-style').innerHTML = `Style: ${beerInfo.style}`;
  document.querySelector('.beer-alcohol').innerHTML = `Alcohol: ${beerInfo.alcohol}`;
}) 
  addBeerImg(). then((response) => {
    const arr = response.data.hits;
    let picture = arr[Math.floor(Math.random()*arr.length)];
    console.log('random', picture);
    document.querySelector('.beer-img').src = `${picture.largeImageURL}`;    
})}

window.onload = showUserInfo(), changeBeer();

document.querySelector('.beer-change').addEventListener('click', changeBeer);



