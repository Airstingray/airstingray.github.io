let bookmarkedNovel = [];
function setBookmarked(){
  if(sessionStorage.getItem(bookmarked) != null){
    let bookmarkedNovel = sessionStorage.getItem(bookmarked);
  }
}



function selectNewNovel(num){
 sessionStorage.setItem("currentNovel", num);
}

function selectNewChapter(num){
  currentChapt = sessionStorage.getItem("currentChapter");
  if(num > -1){
    sessionStorage.setItem("currentChapter", num);
  }else if(num == -1){
     previousChapt = parseInt(currentChapt)+1;
     sessionStorage.setItem("currentChapter", previousChapt);
  }else if(num == -2){
     nextChapt = parseInt(currentChapt)-1;
     sessionStorage.setItem("currentChapter", nextChapt);
  }
  
  updateArrowButtons();
  renderUser2();
}


async function fetchUser(){
    let url = 'https://raw.githubusercontent.com/Airstingray/ReadJsonFromJS/main/novels.json';
    try{
      let response = await fetch(url);
      if(response.status == 200){
        return await response.json();
      } else{
        console.log(response.status);
        window.location = 'https://github.com/Airstingray/airstingray.github.io/blob/main/bad.html'
      }
      
      //TODO
      //Break into the catch, throw an error
    } catch(error){
      console.log('error');
      
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
  
  function updateArrowButtons(){
    
  }
  
  renderUser();
  renderUser2();
  setBookmarked();


  function bookmarkItem(num){
    if(bookmarkedNovel.includes(num) == False){
      bookmarkedNovel.push(num);
    }else{
      tempBook =[];
      for(i = 0; i < bookmarkedNovel.length; i++){
         
      }
    }
    
    sessionStorage.setItem("bookmarked", bookmarkedNovel);
    alert(bookmarkedNovel);
    updatebookmarkNovelsPage();
  }

  function updatebookmarkNovelsPage(){
     
  }
  // var x=document.getElementById("book-preview-bookmarked");
  // x.style.visibility="visible";




