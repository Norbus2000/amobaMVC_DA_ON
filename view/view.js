class View {
    constructor() {
        this.jatekTerulet = []
    }

    palya(){

        const palya = document.createElement('div')
        palya.className = 'palya'
        this.cellak = Array(9).fill().map((_,i)=> {
            const cella = document.createElement('div')
            cella.className = 'cella'
            cella.addEventListener('click', () =>{
                this.jatekTerulet(i)
            })
            palya.appendChild(cella)
            return cella
        })
    }

    cellaBeir(adat){
        this.cella[adat.move].innerHTML = adat.jatekos
    }

}

export default View