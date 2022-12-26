import reset from "./reset.css";
import css from "./styles.css";
import {loadInitialPage, loadHomePage} from "./page-load";
import {loadMenuPage} from "./menuPage";
import {loadAboutPage} from "./aboutPage";

loadInitialPage();

const pageContent = document.querySelector("#content");

let currentPage = "main";

const mainPage = document.querySelector(".main");
const homeButton = document.querySelector("#header-button-1");
const menuButton = document.querySelector("#header-button-2");
const aboutButton = document.querySelector("#header-button-3")

homeButton.addEventListener('click', swapToHomePage);
menuButton.addEventListener('click', swapToMenuPage);
aboutButton.addEventListener('click', swapToAboutPage);

function swapToHomePage()
{
    pageContent.removeChild(pageContent.lastChild);
    loadHomePage();
}

function swapToMenuPage()
{
    pageContent.removeChild(pageContent.lastChild);
    loadMenuPage()
}

function swapToAboutPage()
{
    pageContent.removeChild(pageContent.lastChild);
    loadAboutPage();
}