import { baseURL, imgesUrl } from "../jsLib/articles.js";
import { authorCard, createCard, render } from "../jsLib/createFunctions.js";
import { getCardMain } from "../jsLib/getItemFunctions.js";

const url1 = new URL(window.location.href);
let langId=url1.searchParams.get('langId');
const url2 = new URL(window.location.href);
let journalId=url2.searchParams.get('journalId');
const url3 = new URL(window.location.href);
let authorId=url3.searchParams.get('authorId');

fetch(`${baseURL}langId=${langId}&journalId=${journalId}&authorId=${authorId}&size=5&offset=0`)
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data)
  const  cardAuthor=authorCard(data,imgesUrl);
  render(cardAuthor,"rowMain")

  for(let index=0;index<data['length'];index++){
    const  cardMain=getCardMain(data,index,imgesUrl);
    const card=createCard(cardMain);
    render(card,"rowMain")
  }
  return data
});
