

// function setBookmarked(){
//   array = sessionStorage.getItem("bookmarked")
//   newBookmarked = [];
//   array.forEach(item => {
//     newBookmarked.push(item);
//   });
//   alert(newBookmarked)
//   return newBookmarked;
// }

let bookmarkedNovel = [];
let novels = [];




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
    //let url = 'https://raw.githubusercontent.com/Airstingray/ReadJsonFromJS/main/novels.json';
    let url = '/novel.json';
    try{
      let response = await fetch(url);
      if(response.status == 200){
  
          response.json().then(json => {
            //console.log(JSON.parse(json[2].json));
            novelsFromJson = JSON.parse(json[2].json);
            //console.log(novelsFromJson[0])
            for(i=0;i<6;i++){
              novels.push(novelsFromJson[i]);
            }
            
          });
          
          
        
        return await response.json();
      } else{
        console.log(response.status);
        window.location = 'https://airstingray.github.io/bad.html'
      }
      
      //TODO
      //Break into the catch, throw an error
    } catch(error){
      console.log('error');
      
    }
    
  }
  
  
  async function renderUser(){
    debugger;
    novels = await fetchUser();
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
    novels = await fetchUser();
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
  updatebookmarkNovelsPage();



  function bookmarkItem(num){
    let alreadyIncludes = bookmarkedNovel.includes(num);
    if(alreadyIncludes == false){
      bookmarkedNovel.push(num);
    }else{
      tempBook =[];
      for(i = 0; i < bookmarkedNovel.length; i++){
         if(bookmarkedNovel[i] != num){
          tempBook.push(bookmarkedNovel[i]);
         }
      }
      bookmarkedNovel = tempBook;
    }
    
    sessionStorage.setItem("bookmarked", bookmarkedNovel);
    console.log(sessionStorage.getItem("bookmarked"));
    
  }

  function updatebookmarkNovelsPage(){
    
    //  if(bookmarkedNovel.length > 5){

    //   for(i=0; i<5; i++){
        
    //       var x=document.getElementById("bpb" +(1+i));
    //       x.style.visibility="visible";
        
    //    }


    //  }else {


    //   for(i=0; i<bookmarkedNovel.length; i++){
    //     path = "bpb" +(1+i);
    //     var x=document.getElementById(path);
    //     x.style.visibility="visible";
    //    }
    //    for(i=bookmarkedNovel.length; i<5; i++){
    //     path = "bpb" +(1+i);
    //     var x=document.getElementById(path);
    //     x.style.visibility="hidden";
    //    }


    //  }
  }
  //  var x=document.getElementById("bpb1");
  //  x.style.visibility="visible";

  console.log(sessionStorage.getItem("bookmarked"));



