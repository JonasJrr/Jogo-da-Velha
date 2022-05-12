document.addEventListener('DOMContentLoaded', () => {

    var squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event) {

    var square = event.target;
    var position = square.id;

    if(handleMove(position)) {  

       setTimeout(() => {
            alert("O jogo acabou!");

        }, 10);

    };
    updateSquares();

}

function updateSquares() {

    var squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        var position = square.id;
        var symbol = board[position];

        if (symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`
        }

    })
}