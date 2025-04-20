// app.js

import { agregarProducto, eliminarProducto, mostrarLista } from './lista.js';

// Datos de prueba
agregarProducto("Manzanas");
agregarProducto("Pan");
agregarProducto("Huevos");
agregarProducto("Pan"); // Prueba duplicado

mostrarLista();

eliminarProducto("Pan");
eliminarProducto("Leche"); // Prueba no existente

mostrarLista();
