function selectNewNovel(num){
  sessionStorage.setItem("currentNovel", num);
}

function selectNewChapter(num){
  sessionStorage.setItem("currentChapter", num);
  renderUser2();
}


async function fetchUser(){
    let url = 'https://raw.githubusercontent.com/Airstingray/ReadJsonFromJS/main/novels.json';
    try{
      let response = await fetch(url);
      if(response.status == 200){
        return await response.json();
      }
      
      //TODO
      //Break into the catch, throw an error
    } catch(error){
      console.log('error')
    }
    
  }
  
  
  async function renderUser(){
    let novels = await fetchUser();
    let selectNovel = sessionStorage.getItem("currentNovel");
    let selectChapter = sessionStorage.getItem("currentChapter");
    let novel = novels[selectNovel];
    let chapterAmount = novel.Chapters.Texts.length;
   
    let desc = document.querySelector('.text');
    let name = document.querySelector('.title');
    let image = document.querySelector('.bookImg');
    let currentChapterTitle = document.querySelector('.currChaptName');

    desc.innerHTML = novel.Description;
    name.innerHTML = novel.Title;
    image.src = novel.CoverIMG;
    
    for (let i = 0; i < 10; i++){
      let nameID = '.ld' + (1+i);
      let chapt = document.querySelector(nameID);
      chapt.innerHTML = "Chapter " + (chapterAmount-i) + ": " + novel.Chapters.Titles[chapterAmount-i-1];    
    }

    currentChapterTitle.innerHTML = novel.Chapters.Titles[chapterAmount-selectChapter-1];
  }

  async function renderUser2(){
    let novels = await fetchUser();
    let selectNovel = sessionStorage.getItem("currentNovel");
    let selectChapter = sessionStorage.getItem("currentChapter");
    let novel = novels[selectNovel];
    let chapterAmount = novel.Chapters.Texts.length;
    let chapterNum = chapterAmount-selectChapter;
  
    let currentChapterTitle = document.querySelector('.currChaptName');
    let currentChapterText = document.querySelector('.currChaptText');

    currentChapterTitle.innerHTML = "Chapter "+ chapterNum + ": "+novel.Chapters.Titles[chapterAmount-selectChapter-1];
    currentChapterText.innerHTML = "&emsp;" + novel.Chapters.Texts[chapterAmount-selectChapter-1];
  }
  
  
  renderUser();
  renderUser2();







// let cartTotal = 0

// function addToCart(){
//   cartTotal += 1;
//   sessionStorage.setItem("cartTot", cartTotal);
//   updateCart();
// }

// function updateCart(){
//   cartTotal = parseInt(sessionStorage.getItem("cartTot"));
//   document.getElementById("whatever you called the number").innerHTML = cartTotal;
// }

// updateCart();