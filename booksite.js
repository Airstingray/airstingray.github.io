function novel(ID,Cover_IMG,Title,Genres, Description){
    this.ID = ID;
    this.Cover_IMG = Cover_IMG;
    this.Title = Title;
    this.Genres = Genres;
    this.Description = Description;
}

var novels = new Array();
//var bookmarked_novels = new Array();

novels.push(new novel(0,"Images/Cover-1.png","Tower Of The Void", "genres", "Growing up hearing stories of magicians and warriors, the main character's life suddenly changes when an invading force is amassed and launched into a wide scale attack by a feared dark lord; it casts doubt on their current situation.Unable to refuse, the main character, driven by in increasing hatred for a wrongdoer, that could turn the tides in their favour."));
novels.push(new novel(1,"Images/Cover-2.png","Songs Of The Dungeons", "genres", "A simple peasant with little knowledge of the world, the main character, after discovering a world of lies and betrayal, when they learn of the dark lord that steadily grows in power; it threatens their current situation.Desperate for normality, the main character, public enemy number one, attempts to rally others to join them in their cause.In the end, after managing to capture a key figure, the character turns down the opportunity to take a job solving similar problems in future."));
novels.push(new novel(2,"Images/Cover-3.png","Hurting The Demons", "genres", "Constantly plagued by nightmares from a young age, and in a race against time, the main character when the ruler, driven mad with power, begins to use their power and forces in a way; it threatens to destabilise their family.Determined to set things right, the main character, unsure of what it all means, gradually gets to the bottom of the issue.In the end, after standing up to a powerful figure, the main character now has the strength to deal with other problems in their life."));
novels.push(new novel(3,"Images/Cover-4.png","Prepare For The Ocean", "genres", "Having been warned of their future by a travelling stranger, the main character vows to do what it takes and accept their responsibilities when a long lost friend returns, asking them for help; it will eventually ruin someone's reputation.With their world gone crazy, the main character, taking advantage of the confusion, comes up with a cunning plan to find out the truth.In the end, after a close encounter with the enemy's forces, the main character's life returns to improved normality, though they retain a lust for adventure."));
novels.push(new novel(4,"Images/Cover-5.png","Guarded By Time", "genres", "Frequently the recipient of strange visions, the main character loses what's dearest to them when spies within the governing body initiate a coup; it casts doubt on their current situation.Determined to set things right, the main character, unsure of what it all means, manages to avoid a failed ambush which leaves them alone with their allies held captive."));
novels.push(new novel(5,"Images/Cover-6.png","Healing Dreams", "genres", "Bitter about life's cruel games, the main character is suddenly forced to leave their home and family when a mysterious character forces them into a situation well outside their control that results in the destruction of the city.Desperate for normality, the main character, after surviving a failed of assassination attempt, ends up putting their own personal needs before others.In the end, after having their relationships tested, the main character sacrifices themselves to stop someone else."));

function stuff(novel_ID){
   // bookmarked_novels.push(novel_ID);
    sessionStorage.setItem(novel_ID+"", novels[novel_ID].Description);
    //alert(sessionStorage.getItem(novel_ID+""));
    //alert(novels[novel_ID].ID);
}

function populateRead(novel_ID){
    sessionStorage.setItem("currentDesc", novels[novel_ID].Description);
    sessionStorage.setItem("currentTitle", novels[novel_ID].Title);
    sessionStorage.setItem("currentImg", novels[novel_ID].Cover_IMG)
}

function getNovels(){
    // for(let i=0; i < sessionStorage.length; i++){
    //     alert(sessionStorage.getItem(sessionStorage.key(i)) );
    //     alert(sessionStorage.getItem(sessionStorage.key(i)).indexOf(novels[parseInt(sessionStorage.key(i))].Description));
    //         if(sessionStorage.getItem(sessionStorage.key(i)).indexOf(novels[parseInt(sessionStorage.key(i))].Description) != -1){ //try ==0
    //             alert("found " + novels[parseInt(sessionStorage.key(i))].Cover_IMG); 
    //         } 
    // }
    // for(bookid in sessionStorage){
    //     alert(sessionStorage[bookid]);  use for testing session data
    // }
}

// function sessionNovels(){
//     for(let i=0; i < novels.length; i++){
//         sessionStorage.setItem("novel" + novels[i].ID, novels[i])
//     }
//     console.log("set")
// }

// sessionNovels();

