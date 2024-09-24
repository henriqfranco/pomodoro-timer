const bgSelector = document.getElementById('bgs');
const body = document.querySelector('body');
const main = document.querySelector('main');

function applyBackground(selectedBg) {
    if (selectedBg === 'your-name') {
        body.style.backgroundImage = 'url(./imgs/f5f27448c036af645c27467c789ad759.gif)';
        main.style.background = 'rgba(48, 55, 216, 0.39)';
        main.style.border = '1px solid rgba(48, 55, 216, 1)';
    } else if (selectedBg === 'anime-girl') {
        body.style.backgroundImage = 'url(./imgs/6bjrT2y.gif)';
        main.style.background = 'rgba(245, 197, 63, 0.37)';
        main.style.border = '1px solid rgba(245, 197, 63, 1)';
    } else if (selectedBg === 'tongue'){
        body.style.backgroundImage = 'url(./imgs/NxjWrSr.gif)';
        main.style.background = 'rgba(243, 245, 63, 0.37)';
        main.style.border = '1px solid rgba(243, 245, 63, 1)';
    } else if (selectedBg === 'surprise'){
        body.style.backgroundImage = 'url(./imgs/f91669844da772dc0c00e9f627d2fd7e.gif)';
        main.style.background = 'rgba(237, 117, 239, 0.37)';
        main.style.border = '1px solid rgba(237, 117, 239, 1)';
    }
}

bgSelector.addEventListener('change', function () {
    const selectedBg = bgSelector.value;
    localStorage.setItem('selectedBg', selectedBg);
    applyBackground(selectedBg);
});

window.addEventListener('DOMContentLoaded', function () {
    const savedBg = localStorage.getItem('selectedBg');
    if (savedBg) {
        bgSelector.value = savedBg;
        applyBackground(savedBg);
    }
});
