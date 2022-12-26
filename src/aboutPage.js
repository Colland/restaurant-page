import Image1 from './about-us-image.jpg';

function loadAboutPage()
{
    const pageContent = document.querySelector("#content");

    const aboutMain = document.createElement('div');
    aboutMain.setAttribute('id', "about-main");

    pageContent.appendChild(aboutMain);

    const aboutTitle = document.createElement('h2');
    aboutTitle.textContent = "About us";
    aboutMain.appendChild(aboutTitle);

    const aboutCard = document.createElement('div');
    aboutCard.setAttribute('id', "about-card");
    aboutMain.appendChild(aboutCard);

    const infoBlock = document.createElement('div');
    infoBlock.setAttribute('id', 'info-block');
    aboutCard.appendChild(infoBlock);

    const cardHeader = document.createElement('h3');
    cardHeader.textContent = "Our story";
    infoBlock.appendChild(cardHeader);

    const restaurantStory = document.createElement('p');
    restaurantStory.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    infoBlock.appendChild(restaurantStory);

    const aboutUsImage = new Image();
    aboutUsImage.src = Image1;
    aboutUsImage.width = 612;
    aboutUsImage.height = 408;
    aboutUsImage.setAttribute('id', 'about-image');
    infoBlock.appendChild(aboutUsImage);
}

export {loadAboutPage};