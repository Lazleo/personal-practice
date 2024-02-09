import getUsers from "../services/getUsers.js";

export default async function renderCards() {
    const userCardsUi = document.querySelector('.user-cards');
    const userCardTemplate = document.querySelector('.data-user-template');
    const searchInput = document.querySelector('.search-input');

    const data = await getUsers();

    searchInput.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase();
        users.forEach((user) => {
            const isVisible = user.userName.toLowerCase().includes(value) || user.userEmail.toLowerCase().includes(value);
            user.userEl.classList.toggle("hide", !isVisible);
        })
    })

    let users = [];

    users = data.map((user) => {
        const card = userCardTemplate.content.cloneNode(true).firstElementChild;
        const cardHeader = card.querySelector('.header');
        const cardBody = card.querySelector('.body');
        cardHeader.innerText = user.name;
        cardBody.innerText = user.email;
        userCardsUi.append(card);
        return { userName: user.name, userEmail: user.email, userEl: card }  
    })
}