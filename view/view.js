class View {
    constructor(){
        this.jatekTerulet=[]
    }

    palya(jatekosCella){
            const tabla = document.createElement('div');
            tabla.className = 'tabla';
        
            this.cellak = Array(9).fill().map((_, i) => {
              const cella = document.createElement('div');
              cella.className = 'cella';
              cella.addEventListener('click', () => {
                this.jatekTerulet.push(jatekosCella)
              });
              tabla.appendChild(cella);
        
              return cella;
            });
    }

}