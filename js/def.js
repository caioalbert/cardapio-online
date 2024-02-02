import { category, item, waAPI } from "./main.js";

waAPI.countryCode = 55; // COUNTRY CODE
waAPI.number = false; // PHONE NUMBER
item.currency = "pt-br"; // LOCALE CURRENCY

category.add("Lanches", "lanches");
item.add("X-Salada", "lorem ipsum dolor sit amet arcu.", 10.00, "xSalada.jpeg", "lanches");
item.add("X-Tudo", "lorem ipsum dolor sit amet arcu.", 18.00, "xSalada.jpeg", "lanches");
item.add("Especial da Casa", "lorem ipsum dolor sit amet arcu.", 20.00, "xSalada.jpeg", "lanches");
item.add("lanche do manoel", "teste", 50.00, "xSalada.jpeg", "lanches");
item.add("lanche do manoel", "teste", 50.00, "xSalada.jpeg", "lanches");
item.add("lanche do manoel", "teste", 50.00, "xSalada.jpeg", "lanches");

category.add("Lanches", "lanches2");
item.add("X-Salada", "lorem ipsum dolor sit amet arcu.", 10.00, "xSalada.jpeg", "lanches2");
item.add("X-Tudo", "lorem ipsum dolor sit amet arcu.", 18.00, "xSalada.jpeg", "lanches2");
item.add("Especial da Casa", "lorem ipsum dolor sit amet arcu.", 20.00, "xSalada.jpeg", "lanches2");

// Adicione esta função ao seu arquivo js/def.js

document.addEventListener('DOMContentLoaded', function () {
  const btnFinish = document.getElementById('list-btn');
  btnFinish.addEventListener('click', sendOrder);

  function sendOrder() {
    const listItems = document.getElementById('list-items');
    const listTotal = document.getElementById('list-total');
    const addressInput = document.getElementById('address');

    const items = Array.from(listItems.children).map(item => `${item.textContent} %0A %0A`);
    const total = listTotal.textContent;
    const address = addressInput.value;

    // Substitua 'seu_numero_whatsapp' pelo número de telefone para o qual deseja enviar o pedido
    const whatsappLink = `https://wa.me/5585991452514/?text=Pedido:%0A %0A${items} %0A Total: R$ ${total} %0A %0A endereço: ${address}`;

    // Abra o link do WhatsApp em uma nova janela/tab
    window.open(whatsappLink, '_blank');
  }
});
