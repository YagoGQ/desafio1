let producto = parseInt(prompt(`Elije el producto que desea comprar 1.botas de esqui - 2.velas - 3.coctelera - 4.olla para hacer fondiue`));

let seguirComprando = true;
let totalCompra = 0;
let decision;

class newProduct {
    constructor (id, name, price) {
        this.id = id
        this.name = name
        this.price = price
    }
};

const botas = new newProduct(1, botas, 2.000);
const velas = new newProduct(2 , velas, 300);
const coctelera = new newProduct(3, coctelera, 890);
const fondiue = new newProduct(4, fondiue, 4.500);

// 1.botas de esqui - 2.velas - 3.coctelera - 4.olla para hacer fondiue

while (seguirComprando === true) {
    if (producto === botas.id){
        totalCompra = totalCompra + botas.price
    } else if (producto === velas.id) {
        totalCompra = totalCompra + velas.price
    } else if (producto === coctelera.id) {
        totalCompra = totalCompra + coctelera.price
    } else if (producto === fondiue.id) {
        totalCompra = totalCompra + fondiue.price
    }

    decision = parseInt(prompt(`¿Quiere seguir comprando? 1.Si - 2.No`))
    if (decision === 1) {
        producto = parseInt(prompt(`Elije el producto que desea comprar 1.botas de esqui - 2.velas - 3.coctelera - 4.olla para hacer fondiue`));
    } else { seguirComprando = false}
};

