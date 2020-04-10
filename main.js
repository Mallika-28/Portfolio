function toggleDrop(){
    let navtoggle=document.getElementById("navtoggle");
    if(navtoggle.className === 'topnav'){
        navtoggle.className += ' responsive';
    }
    else{
        navtoggle.className='topnav';
    }
}
