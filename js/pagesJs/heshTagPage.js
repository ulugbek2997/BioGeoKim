import { baseURL, imgesUrl } from "../jsLib/articles.js";
import { createCard, render } from "../jsLib/createFunctions.js";
import { getCardMain } from "../jsLib/getItemFunctions.js";

const url1 = new URL(window.location.href);
let langId=url1.searchParams.get('langId');
const url2 = new URL(window.location.href);
let journalId=url2.searchParams.get('journalId');
const url3 = new URL(window.location.href);
let tagId=url3.searchParams.get('tagId');
const url4 = new URL(window.location.href);
let tagName=url4.searchParams.get('tagName');

fetch(`${baseURL}langId=${langId}&journalId=${journalId}&tagId=${tagId}&size=6&offset=0`)
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data)
  innerTitle(tagName);
  
  for(let index=0;index<6;index++){
    const  cardMain=getCardMain(data,0,imgesUrl);
    const card=createCard(cardMain);
    render(card,"rowMain")
  }

  return data
});

function innerTitle(item){
    document.getElementById('hashtagName').innerText = `#${item}`;
}



