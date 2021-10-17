var game_stop = false;
var counter = 0;


function generate() {
    document.body.insertAdjacentHTML('beforeend', '<div class="count">0</div>')
    document.body.insertAdjacentHTML('beforeend', '<div class="container">')
    for (let i = 1; i < 26; ++i) {
        let html_ = `<div class="box-${i}">${i}</div>`
        document.body.getElementsByClassName('container')[0].insertAdjacentHTML('beforeend', html_);
    }
}

function get_random_index() {
    return Math.floor(Math.random() * 25);
}

function get_counter() {
    return document.body.getElementsByClassName('count')[0]
}

function clear(i) {
    document.body.getElementsByClassName(`box-${i}`)[0].innerHTML = i;
}

function set_mole() {
    let index_ = get_random_index()
    let elem = document.body.getElementsByClassName(`box-${index_}`)[0];
    elem.innerHTML = "КРОТ";
    elem.onclick = function () {
        if (this.innerHTML === 'КРОТ') {
            counter++;
            get_counter().innerHTML = counter;
            this.innerHTML = this.className.toString().slice(4, this.className.toString().length);
        }
        return false;
    }
    setTimeout(clear, 1500, index_);

}

function is_win() {
    return counter === 10;

}

function main() {
    if (game_stop) {
        return false;
    }
    if (is_win()) {
        counter = 0;
        game_stop = true;
        alert('You win');
        return;
    }
    set_mole();
}

generate();
setInterval(main, 2000);