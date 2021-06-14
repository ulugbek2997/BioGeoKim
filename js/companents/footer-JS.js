window.addEventListener('load' , ()=>{

    const pageLangId=definitionLangId()
    selectCategory(pageLangId)


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
    let bioCtg=document.getElementById('footerBioLink');
    let geoCtg=document.getElementById('footerGeoLink');
    let kimCtg=document.getElementById('footerKimLink');

    bioCtg.href=`../html/categoriesPage.html?langId=${item}&journalId=${1}`;
    geoCtg.href=`../html/categoriesPage.html?langId=${item}&journalId=${2}`;
    kimCtg.href=`../html/categoriesPage.html?langId=${item}&journalId=${3}`;
}