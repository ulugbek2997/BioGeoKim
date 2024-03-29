
function createCard(item1){
    const card= document.createElement('div');
    card.classList.add('card')
    card.href= "./html/paperPage.html?"+`langId=${item1['langId']}&id=${item1['id']}&journalId=${item1['journalId']}`;

    const cardImg=document.createElement('img');
    cardImg.classList.add('card-img');
    cardImg.src= item1['imgSrc'];
  
     const titleCard = document.createElement('h4');
     titleCard.innerText = item1['title'];
     titleCard.classList.add('card-title');
     
     const textCard = document.createElement('p');
     textCard.innerHTML = item1['body'];
     textCard.classList.add('card-text');
     
     const cardDate = document.createElement('p');
     cardDate.innerText = item1['dateStr'];
     cardDate.classList.add('card-date'); 
  
     card.append(cardImg,titleCard,textCard,cardDate);
     
     return card
   }

  function createShortNewsCard(item1){
    const shortNewsCard = document.createElement('div');
    shortNewsCard.classList.add('shortNewsCard');

    const allViewBtn=document.createElement('a');
    allViewBtn.href="../html/categoriesPage.html?"+`langId=${item1[0]['langId']}&journalId=${item1[0]['journalId']}`;
    allViewBtn.classList.add('allViewBtn')
    allViewBtn.innerText = "BARCHASI";

    const shortNewsCardTitle = document.createElement('h4');
    shortNewsCardTitle.innerText = 'Boshqa maqolalar';
    shortNewsCardTitle.classList.add('shortNewsCardTitle');
    shortNewsCard.append(allViewBtn,shortNewsCardTitle);

     for(let j=0;j<3;j++){
      const date = new Date(item1[j] ? item1[j] : null);  
      let dateStr = ("00" + date.getDate()).slice(-2) + "." + ("00" + (date.getMonth() + 1)).slice(-2) + "." + date.getFullYear();
      const shortNew =document.createElement('a');
      shortNew.classList.add('news','line-clamp');
      shortNew.innerText=item1[j]['title'];
      shortNew.href ="../html/paperPage.html?"+`langId=${item1[j]['langId']}&journalId=${item1[j]['journalId']}&id=${item1[j]['id']}`;
      const shortNewDate=document.createElement('p')
      shortNewDate.classList.add('newsDate');
      shortNewDate.innerText=item1[j]['dateStr'];
      shortNewsCard.append(shortNew,shortNewDate)
     }
     return shortNewsCard
    }

    function creatPaperCard(item1){
  
      const paper=document.createElement('div');
      paper.classList.add('paper');
  
      const title=document.createElement('h3');
      title.classList.add('paper-title');
      title.innerText=item1['title'];

      const text=document.createElement('p')
      text.classList.add('paper-text');
      text.innerHTML=item1['body'];
  
      const img=document.createElement('img');
      img.classList.add('paper-img');
      img.src=item1['imgSrc'];

      const paperFooter=document.createElement('div');
      paperFooter.classList.add('paper-footer');
  
      const authorUL=document.createElement('ul');
      const authorImgLi=document.createElement('li');
      authorImgLi.classList.add('author-img');
      const authorImg=document.createElement('img');
      authorImg.src=item1['authorImg'];
      authorImgLi.append(authorImg);
      const authorNameLi=document.createElement('li');
      authorNameLi.classList.add('author-name')
      const authorNameLink=document.createElement('a')
      authorNameLink.href=`./authorPage.html?langId=${item1['langId']}&journalId=${item1['journalId']}&authorId=${item1['authorId']}`;
      authorNameLink.innerText=item1['authorName'];
      authorNameLi.append(authorNameLink);
      authorUL.append(authorImgLi , authorNameLi);
  
      const hashtagsUL=document.createElement('ul');
      console.log(item1['hashTags'])
      for(let i=0;i<item1['hashTags'].length;i++){
          const hashtag=document.createElement('li');
          const hashtagLink=document.createElement('a');
          hashtag.classList.add('hashtags');
          if(i<4){
              hashtagLink.innerText= `#${item1['hashTags'][i]['tagName']}`;
              hashtagLink.href =`./heshtagsPage.html?langId=${item1['langId']}&journalId=${item1['journalId']}&tagId=${item1['hashTags'][i]['tagId']}&tagName=${item1['hashTags'][i]['tagName']}` 
          }else{
              break;
          };
          hashtag.append(hashtagLink);
          hashtagsUL.append(hashtag);
      }
      paperFooter.append(authorUL,hashtagsUL);
      paper.append(title,text,img,paperFooter);
      return paper
    }

    function createPaperBaner(item1){
      let paperBaner=document.createElement('div');
      paperBaner.classList='paperBaner';
      let img=document.createElement('img');
      img.src=item1['imageSrc'];
      // paperBaner.append(img);
      let title=document.createElement('h3');
      title.innerText=item1['title']
      title.classList.add('line-clamp')
      let mainText=document.createElement('p')
      mainText.innerHTML=item1['body'];
      mainText.classList.add('line-clamp')
      paperBaner.append(img , title , mainText);
      return paperBaner
    }

    function authorCard(item1,item2){

      const authorCard=document.createElement('div');
      authorCard.classList.add('author-card');
  
      const cardImg=document.createElement('img');
      cardImg.classList.add('author-card-img');
      cardImg.src=item2+ item1[0]['author']['image'];
  
      const cardTitle=document.createElement('h2');
      cardTitle.classList.add('author-card-name');
      cardTitle.innerText = item1[0]['author']['name']
  
      const cardText=document.createElement('p');
      cardText.classList.add("author-card-text")
      cardText.innerHTML= item1[0]['author']['bio'];
  
      const linksUl=document.createElement('ul');
      linksUl.classList.add('author-card-socialPageLinks')
  
      const instagramLink=document.createElement('li');
      instagramLink.classList.add('author-card-links');
      const instagramLinkA=document.createElement('a');
      const instagramLinkIcon=document.createElement('i');
      instagramLinkIcon.classList.add("ri-instagram-line");
      instagramLinkA.append(instagramLinkIcon);
      instagramLink.append(instagramLinkA);
      
      const twitterLink=document.createElement('li');
      twitterLink.classList.add('author-card-links');
      const twitterLinkA=document.createElement('a');
      const twitterLinkIcon=document.createElement('i');
      twitterLinkIcon.classList.add("ri-twitter-fill");
      twitterLinkA.append(twitterLinkIcon);
      twitterLink.append(twitterLinkA);
  
      const facebookLink=document.createElement('li');
      facebookLink.classList.add('author-card-links');
      const facebookLinkA=document.createElement('a');
      facebookLinkA.href=item1[0]['author']['facebook']
      const facebookLinkIcon=document.createElement('i');
      facebookLinkIcon.classList.add("ri-facebook-fill");
      facebookLinkA.append(facebookLinkIcon);
      facebookLink.append(facebookLinkA);
  
      linksUl.append(instagramLink,twitterLink,facebookLink);
      authorCard.append(cardImg,cardTitle,cardText,linksUl);
      return authorCard
  }



  function render(item1,item2){
    document.getElementById(item2).append(item1)
}

    function randomNumber(max){
        return Math.floor(Math.random() * max);
     }

    export {createCard , createShortNewsCard , creatPaperCard , createPaperBaner, render , randomNumber , authorCard}
