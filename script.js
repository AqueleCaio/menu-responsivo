function clickContent(){
    if (content_menu.style.display == 'block'){
        content_menu.style.display = 'none'
    }

    else {
        content_menu.style.display = 'block'
    }
}

function keepMenu(){
    if (window.innerWidth >= 760){
        content_menu.style.display = 'block'
    } else {
        content_menu.style.display = 'none'
    }
}