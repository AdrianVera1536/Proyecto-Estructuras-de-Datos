// lista.js

const listaDeCompras = [];

// Agregar producto (sin duplicados)
const agregarProducto = (producto) => {
    if (!listaDeCompras.includes(producto)) {
        listaDeCompras.push(producto);
        console.log(`✅ "${producto}" agregado a la lista.`);
    } else {
        console.log(`⚠️ El producto "${producto}" ya está en la lista.`);
    }
};

// Eliminar producto
const eliminarProducto = (producto) => {
    const index = listaDeCompras.indexOf(producto);
    if (index !== -1) {
        listaDeCompras.splice(index, 1);
        console.log(`🗑️ "${producto}" eliminado de la lista.`);
    } else {
        console.log(`❌ El producto "${producto}" no está en la lista.`);
    }
};

// Mostrar lista completa
const mostrarLista = () => {
    console.log("🛒 Lista de Compras:");
    if (listaDeCompras.length === 0) {
        console.log("La lista está vacía.");
    } else {
        listaDeCompras.forEach((producto, i) => {
            console.log(`${i + 1}. ${producto}`);
        });
    }
};

export { agregarProducto, eliminarProducto, mostrarLista };
