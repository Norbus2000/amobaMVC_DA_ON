class TicTacToe {
    constructor(){
        // letrehozunk egy listat aminek 9 eleme van 
        // a fill metodus feltolti nekunk indexekkel (0-8)
        // dokumentacio az arrayrol
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
        this.tabla = Array(9).fill()
        this.jatekos = 'X'
        this.vanNyertes = false
    }

    nyertesEldontes(){
    nyertesVariaciok = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];


    //a some metodus ellenorzi hogy legalabb egy feltetel teljesul e
    const nyertes = lines.some(l => this.board[l[0]]
        && this.board[l[0]] === this.board[l[1]]
        && this.board[l[1]] === this.board[l[2]]);

    if (nyertes){
        alert(this.jatekos+" nyert")
    }
    return nyertes
}

dontetlen (){
    // every metodus megnezi hogy az arraynek az osszes indexen van e elem
    const dontetlen = this.tabla.every(i => i)
    if (dontetlen){
        alert("Dontetlen")
    }
    return dontetlen
}

jatekosValtas(){
    this.jatekos = this.jatekos === 'X' ? 'O' : 'X'
}

}

export default TicTacToe