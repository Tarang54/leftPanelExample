function showContent(id) {
    var content = document.getElementById(id + '-content');
    var allContent = document.getElementsByClassName('content');

    for (var i = 0; i < allContent.length; i++) {
        allContent[i].classList.remove('show');
    }

    content.classList.add('show');
}