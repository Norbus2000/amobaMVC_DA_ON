class Amoba {
    constructor(){
        this.tabla = Array(9).fill()
        this.jatekos = 'X'
        this.vanNyertes = false
    }

    jatekLepesek(lepes) {
        if (this.vanNyertes || lepes < 0 || lepes > 8 || this.tabla[lepes]){
          return false 
        }
    
        this.tabla[lepes] = this.jatekos
        
        this.vanNyertes = this.nyertes() || this.dontelen();
    
        if (!this.vanNyertes) {
             this.jatekosValtas() 
            }
    
        return true;
      }


    nyeresDontes() {
        const nyertesLepesek = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
    
        const nyertes = nyertesLepesek.some(i => this.tabla[i[0]]
          && this.tabla[i[0]] === this.tabla[i[1]]
          && this.tabla[i[1]] === this.tabla[i[2]]);

          if (nyertes){
            alert(this.jatekos+"nyert")
          }

        return victory;
      }

      dontetlen() {
        const dontetlen = this.tabla.every(i => i);
    
        if (dontetlen) {
          alert("dontetlen")
        }
    
        return draw;
}

jatekosValtas() {
    this.jatekos = this.jatekos === 'X' ? 'O' : 'X';
  }


}

export default Amoba