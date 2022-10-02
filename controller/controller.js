import TicTacToe from "../model/model.js";
import View from "../view/view.js";

class Controller{
    constructor(){
        this.model = new TicTacToe()
        this.view = new View()    
    }

    jatek(){
        this.view.palya()
    }

}

export default Controller