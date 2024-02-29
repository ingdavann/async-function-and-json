'user strict';

import { getData } from "../store/fetchApi.js"
import { userCard } from "../components/userCard.js";

const userArea = document.querySelector('#user-area');
const users = await getData("users");
users.map((user) => {
    userArea.innerHTML += userCard(user);
})