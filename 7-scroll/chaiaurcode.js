// use indicator width
// create a scroll indecator in js ;


window.onscroll = function () {
    scroll();
}

function scroll (){
    var windowScrollPosition = window.scrollY || document.documentElement.scrollTop;
    var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // console.log("windowScrollPosition:-", windowScrollPosition)
    // console.log("scrollableHeight:-", scrollableHeight)
    // console.log("window.scrollY:-", window.scrollY)
    // console.log("document.documentElement.scrollTop:-", document.documentElement.scrollTop)
    // console.log("document.documentElement.scrollHeight:-", document.documentElement.scrollHeight)
    // console.log("document.documentElement.clientHeight:-", document.documentElement.clientHeight)

    // document.documentElement.scrollHeight :- It includes the height of the entire content, both visible and hidden.
    // document.documentElement.clientHeight :- It essentially tells you how much of the document is currently visible in the browser window.

    var scrolled = (windowScrollPosition / scrollableHeight) * 100;
    document.querySelector('.progress').style.width = scrolled + '%';
    document.querySelector('h5').innerHTML = Math.round(scrolled) + '%';
}