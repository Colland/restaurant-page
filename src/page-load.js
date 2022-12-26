function loadInitialPage()
{
    const contentBox = document.querySelector("#content");

    const header = document.createElement('div');
    header.setAttribute('id', 'header');

    const headerButton1 = document.createElement('div');
    const headerButton2 = document.createElement('div');
    const headerButton3 = document.createElement('div');
    headerButton1.setAttribute('id', 'header-button-1');
    headerButton2.setAttribute('id', 'header-button-2');
    headerButton3.setAttribute('id', 'header-button-3');

    const menuText1 = document.createElement('h2');
    const menuText2 = document.createElement('h2');
    const menuText3 = document.createElement('h2');
    menuText1.textContent = "Main";
    menuText2.textContent = "Menu";
    menuText3.textContent = "About";

    headerButton1.appendChild(menuText1);
    headerButton2.appendChild(menuText2);
    headerButton3.appendChild(menuText3);

    header.appendChild(headerButton1);
    header.appendChild(headerButton2);
    header.appendChild(headerButton3);

    const main = document.createElement('div');
    main.classList.add('main');

    const mainText = document.createElement('div');
    mainText.setAttribute('id', 'main-text');

    const mainTitle = document.createElement('p');
    mainTitle.setAttribute('id', 'main-title');
    mainTitle.textContent = "Bella Italia";

    const mainFlavorText = document.createElement('p');
    mainFlavorText.textContent = "An authentic Italian cuisine experience.";

    const mainCard = document.createElement('div');
    mainCard.setAttribute('id', 'main-card');

    const mainCardDiv1 = document.createElement('div');
    const mainCardDiv2 = document.createElement('div');

    const addressText = document.createElement('p');
    addressText.textContent = "86/88 Railside Avenue, Henderson, Auckland 0612";
    const storeHours1 = document.createElement('p');
    storeHours1.textContent = "Mon-Thursday 4pm-9pm";
    const storeHours2 = document.createElement('p');
    storeHours2.textContent = "Fri-Sunday 4pm 11pm";

    mainCardDiv1.appendChild(addressText);
    mainCardDiv2.appendChild(storeHours1);
    mainCardDiv2.appendChild(storeHours2);

    mainCard.appendChild(mainCardDiv1);
    mainCard.appendChild(mainCardDiv2);

    mainCard.appendChild(mainText);
    mainText.appendChild(mainTitle);
    mainText.appendChild(mainFlavorText);

    main.appendChild(mainText);
    main.appendChild(mainCard);

    contentBox.appendChild(header);
    contentBox.appendChild(main);
}

function loadHomePage()
{
    const contentBox = document.querySelector("#content");

    const main = document.createElement('div');
    main.classList.add('main');

    const mainText = document.createElement('div');
    mainText.setAttribute('id', 'main-text');

    const mainTitle = document.createElement('p');
    mainTitle.setAttribute('id', 'main-title');
    mainTitle.textContent = "Bella Italia";

    const mainFlavorText = document.createElement('p');
    mainFlavorText.textContent = "An authentic Italian cuisine experience.";

    const mainCard = document.createElement('div');
    mainCard.setAttribute('id', 'main-card');

    const mainCardDiv1 = document.createElement('div');
    const mainCardDiv2 = document.createElement('div');

    const addressText = document.createElement('p');
    addressText.textContent = "86/88 Railside Avenue, Henderson, Auckland 0612";
    const storeHours1 = document.createElement('p');
    storeHours1.textContent = "Mon-Thursday 4pm-9pm";
    const storeHours2 = document.createElement('p');
    storeHours2.textContent = "Fri-Sunday 4pm 11pm";

    mainCardDiv1.appendChild(addressText);
    mainCardDiv2.appendChild(storeHours1);
    mainCardDiv2.appendChild(storeHours2);

    mainCard.appendChild(mainCardDiv1);
    mainCard.appendChild(mainCardDiv2);

    mainCard.appendChild(mainText);
    mainText.appendChild(mainTitle);
    mainText.appendChild(mainFlavorText);

    main.appendChild(mainText);
    main.appendChild(mainCard);

    contentBox.appendChild(header);
    contentBox.appendChild(main);
}

export {loadInitialPage, loadHomePage};