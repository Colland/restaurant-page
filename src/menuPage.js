function loadMenuPage()
{
    const contentBox = document.querySelector("#content");

    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'menu-container')
    contentBox.appendChild(menuContainer);

    const menuTitle = document.createElement('h2');
    menuTitle.textContent = "Menu";
    menuContainer.appendChild(menuTitle);

    const menuForm = document.createElement('div');
    menuForm.setAttribute('id', 'menu-main')

    menuContainer.appendChild(menuForm);

    const menuHeader1 = document.createElement('div');
    menuHeader1.setAttribute('id', "menu-header-1");

    const header1Text = document.createElement('p');
    header1Text.textContent = "Pasta";

    menuHeader1.appendChild(header1Text);
    menuForm.appendChild(menuHeader1);

    const menuList1 = document.createElement("ul");
    menuList1.setAttribute('id', 'menu-list')

    const menuItem1 = document.createElement('li');
    const menuItem1Name = document.createElement('p');
    const menuItem1Desc = document.createElement('p');
    menuItem1Name.textContent = "Fettuccine Di Pollo";
    menuItem1Desc.textContent = "pan fried chicken strips and sliced button mushrooms finished in Marsala Cream Sauce."
    menuItem1Name.classList.add("dish-title");
    menuItem1Desc.classList.add("dish-description");
    menuItem1.appendChild(menuItem1Name);
    menuItem1.appendChild(menuItem1Desc);
    menuList1.appendChild(menuItem1);

    const menuItem2 = document.createElement("li");
    const menuItem2Name = document.createElement("p");
    const menuItem2Desc = document.createElement("p");
    menuItem2Name.textContent = "Fettuccine Verdi";
    menuItem2Desc.textContent = "stir fried seasonal vegetables, herbs and garlic in fresh tomato sauce";
    menuItem2Name.classList.add("dish-title");
    menuItem2Desc.classList.add("dish-description");
    menuItem2.appendChild(menuItem2Name);
    menuItem2.appendChild(menuItem2Desc);
    menuList1.appendChild(menuItem2);

    menuForm.appendChild(menuList1);
}

export {loadMenuPage};