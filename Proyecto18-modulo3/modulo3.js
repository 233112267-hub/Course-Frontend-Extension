// referencia a https://gist.github.com/heladio-devf-mx/2c120188609907595b51ed30d5f3f2d0
const lista = document.getElementById('milista');
const ordennn = document.getElementById('pedido');

let orderId = 1; // Para identificar los pedidos

ordennn.addEventListener('click', () => {
    const order = { id: orderId++, status: 'En Proceso' };
    addOrder(order);
    processOrder(order);
});

function addOrder(order) {
    const listItem = document.createElement('li');
    listItem.id = `order-${order.id}`;
    listItem.textContent = `Pedido #${order.id}: ${order.status}`;
    lista.appendChild(listItem);
}

function updateOrderStatus(order, status) {
    const listItem = document.getElementById(`order-${order.id}`);
    if (listItem) {
        listItem.textContent = `Pedido #${order.id}: ${status}`;
    }
}

async function processOrder(order) {
    // TODO: Simular la preparación del pedido usando setTimeout y Promise
    // Promise se uso para simular un retraso en la preparación del pedido
    // await se uso para esperar a que la promesa se resuelva antes de continuar con la ejecución del código y parece mas asincrona 
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simula un retraso de 2 segundos
    updateOrderStatus(order, 'Completado');
}