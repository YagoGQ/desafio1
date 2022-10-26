let producto = parseInt(prompt(`Elije el producto que desea comprar 1.botas de esqui - 2.velas - 3.coctelera - 4.olla para hacer fondiue`));

let seguirComprando = true;
let totalCompra = 0;
let decision;

class Product {
    constructor (id, name, price) {
        this.id = id
        this.name = name
        this.price = price
    }
};

const botas = new Product(1, `botas`, 2000);
const velas = new Product(2 , `velas`, 300);
const coctelera = new Product(3, `coctelera`, 890);
const fondiue = new Product(4, `fondiue`, 4500);

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

function descuento(totalCompra) {
    let descuento = 0
    if (totalCompra >= 5000) {
        descuento = 10
    } else {
        descuento = 0
    }

    let valorDescuento = totalCompra * (descuento / 100)
    let valorFinal = totalCompra - valorDescuento
    return valorFinal
};

const totalCompraDescuento = descuento(totalCompra);

alert (`El total de su compra es ${totalCompraDescuento}`)