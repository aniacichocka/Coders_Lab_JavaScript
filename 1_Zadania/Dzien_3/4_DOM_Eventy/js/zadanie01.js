/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener('DOMContentLoaded', function() {
var menu = document.querySelector("#menu");
var paragraf = document.querySelector("p");

menu.classList.add("menu");
paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
}

//1. plik js wczytał się wcześniej niż html
//2. wszystko działa poprawnie, plik js wczytuje się dopiero po załadowaniu html
//3.wszystko działa poprawnie
