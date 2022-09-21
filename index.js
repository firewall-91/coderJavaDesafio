/* Nota mental: dividir el problema en partes pequeñas */
document.addEventListener("DOMContentLoaded", () => {
  // Constantes
  const BASEDEDATOS = [
    {
      id: 1,
      nombre: "Ralph Lauren Polo Blue",
      precio: 6050,
      imagen: "./media/poloBlue.jpg",
    },
    {
      id: 2,
      nombre: "Carolina Herrera 212 Vip Men",
      precio: 5649,
      imagen: "./media/cH212VipMen.jpg",
    },
    {
      id: 3,
      nombre: "Carolina Herrera Good Girl",
      precio: 6990,
      imagen: "./media/cHGoodGirl.jpg",
    },
    {
      id: 4,
      nombre: "Lancome La Vie Est Belle",
      precio: 7890,
      imagen: "./media/laVieEstBelle.jpg",
    },
  ];

  /* Podria agregar mas elementos pero de momento voy a usar estos para Coderhouse */

  let carrito = [];
  const MONEDA = "$";
  const DOMITEMS = document.querySelector("#items");
  const DOMCARRITO = document.querySelector("#carrito");
  const DOMTOTAL = document.querySelector("#total");
  const DOMBOTONVACIAR = document.querySelector("#boton-vaciar");
  const LOCSTORAGE = window.localStorage;
  // Funciones
  /**
   * Sketch de todos los productos a partir de la base de datos. No confundir con el carrito
   */
  function imprimirProductos() {
    BASEDEDATOS.forEach((info) => {
      // Estructura
      const NODO = document.createElement("div");
      NODO.classList.add("card", "col-sm-4");
      // Body
      const NODOCARDBODY = document.createElement("div");
      NODOCARDBODY.classList.add("card-body");
      // Titulo
      const NODOTITULO = document.createElement("h5");
      NODOTITULO.classList.add("card-title");
      NODOTITULO.textContent = info.nombre;
      // Imagen
      const NODOIMAGEN = document.createElement("img");
      NODOIMAGEN.classList.add("img-fluid");
      NODOIMAGEN.setAttribute("src", info.imagen);
      // Precio
      const NODOPRECIO = document.createElement("p");
      NODOPRECIO.classList.add("card-text");
      NODOPRECIO.textContent = `${MONEDA}${info.precio}`;
      // Boton
      const NODOBOTON = document.createElement("button");
      NODOBOTON.classList.add("btn", "btn-primary");
      NODOBOTON.textContent = "+";
      NODOBOTON.setAttribute("marcador", info.id);
      NODOBOTON.addEventListener("click", aniadirProductoAlCarrito);
      // Insertamos
      NODOCARDBODY.appendChild(NODOIMAGEN);
      NODOCARDBODY.appendChild(NODOTITULO);
      NODOCARDBODY.appendChild(NODOPRECIO);
      NODOCARDBODY.appendChild(NODOBOTON);
      NODO.appendChild(NODOCARDBODY);
      DOMITEMS.appendChild(NODO);
    });
  }
  /**
   * Evento para añadir un producto al carrito de la compra
   */
  function aniadirProductoAlCarrito(evento) {
    // Añadimos el nodo a nuestro carrito
    carrito.push(evento.target.getAttribute("marcador"));
    // Actualizamos el carrito
    imprimirCarrito();
    // Actualizamos el LocalStorage
    guardarCarritoEnLocalStorage();
  }
  /**
   * Sketch de todos los productos guardados en el carrito
   */
  function imprimirCarrito() {
    // Vaciamos todo el html
    DOMCARRITO.textContent = "";
    // Quitamos los duplicados
    const SINDUPLICADOS = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    SINDUPLICADOS.forEach((item) => {
      // Obtenemos el item que necesitamos de la constante base de datos
      const ITEM = BASEDEDATOS.filter((itemBaseDatos) => {
        return itemBaseDatos.id === parseInt(item);
      });
      // Cuenta el número de veces que se repite el producto(aca me tranque)
      const UNIDADESITEM = carrito.reduce((total, itemId) => {
        return itemId === item ? (total += 1) : total;
      }, 0);
      // Creamos el nodo del item del carrito
      const NODO = document.createElement("li");
      NODO.classList.add("list-group-item", "text-right", "mx-2");
      NODO.textContent = `${UNIDADESITEM} x ${ITEM[0].nombre} - ${MONEDA}${ITEM[0].precio}`;
      // Boton de borrar
      const BOTON = document.createElement("button");
      BOTON.classList.add("btn", "btn-danger", "mx-5");
      BOTON.textContent = "X";
      BOTON.style.marginLeft = "1rem";
      BOTON.dataset.item = item;
      BOTON.addEventListener("click", borrarItemCarrito);
      // Mezclamos nodos
      NODO.appendChild(BOTON);
      DOMCARRITO.appendChild(NODO);
    });
    // Imprimimos el precio total en el HTML
    DOMTOTAL.textContent = calcularTotal();
  }
  /**
   * Evento para borrar un elemento del carrito
   */
  function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
      return carritoId !== id;
    });
    // volvemos a imprimir
    imprimirCarrito();
    // Actualizamos el LocalStorage
    guardarCarritoEnLocalStorage();
  }
  /**
   * Calcula el precio total teniendo en cuenta los productos repetidos
   */
  function calcularTotal() {
    // Recorremos el array del carrito
    return carrito
      .reduce((total, item) => {
        // De cada elemento obtenemos el precio
        const ITEM = BASEDEDATOS.filter((itemBaseDatos) => {
          return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        return total + ITEM[0].precio;
      }, 0)
      .toFixed(0);
  }

  function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    imprimirCarrito();
    // Borra LocalStorage
    localStorage.clear();
  }
  function guardarCarritoEnLocalStorage() {
    LOCSTORAGE.setItem("carrito", JSON.stringify(carrito));
  }
  function cargarCarritoDeLocalStorage() {
    // ¿Existe un carrito previo guardado en LocalStorage?
    if (LOCSTORAGE.getItem("carrito") !== null) {
      // Carga la información
      carrito = JSON.parse(LOCSTORAGE.getItem("carrito"));
    }
  }
  // Eventos
  DOMBOTONVACIAR.addEventListener("click", vaciarCarrito);

  cargarCarritoDeLocalStorage();
  imprimirProductos();
  imprimirCarrito();
});