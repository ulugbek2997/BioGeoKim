window.addEventListener("load",()=>{
 
    const pageLangId=definitionLangId()
    selectCategory(pageLangId)
 
    // let langUz=document.getElementById('uzbek')
    //   langUz.addEventListener('click',()=>{
    //   langUz.href = selectLanguage(1);
    // })

    // let langRu=document.getElementById('russian')
    //   langRu.addEventListener('click',()=>{
    //   langRu.href = selectLanguage(2);
    // })

    // let langEn=document.getElementById('english')
    //   langEn.addEventListener('click',()=>{
    //   langEn.href = selectLanguage(3);
    // })

})

function definitionLangId(){
    const url = new URL(window.location.href);
    let langId=url.searchParams.get('langId');
    if(!langId){
        langId=1;
    }
    return langId
}


function selectCategory(item){
    let bioCtg=document.getElementById('bio');
    let geoCtg=document.getElementById('geo');
    let kimCtg=document.getElementById('kim');

    bioCtg.href=`../html/categoriesPage.html?langId=${item}&journalId=${1}`;
    geoCtg.href=`../html/categoriesPage.html?langId=${item}&journalId=${2}`;
    kimCtg.href=`../html/categoriesPage.html?langId=${item}&journalId=${3}`;
}

function selectLanguage(item){
    
    String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
      }

    let url = new URL(window.location.href)
    let langIdUrl = url.href
    const langIdIndex = langIdUrl.indexOf("langId")+7;
    const newUrl = langIdUrl.replaceAt(langIdIndex, `${item}`)
    
    console.log(langIdUrl.replaceAt(langIdIndex, `${item}`))
    return newUrl
}
    


