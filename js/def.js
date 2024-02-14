import { category, item, waAPI } from "./main.js";

waAPI.countryCode = 55; // COUNTRY CODE
waAPI.number = false; // PHONE NUMBER
item.currency = "pt-br"; // LOCALE CURRENCY

category.add("Pasteis", "lanches");
/*Carne de Sol,frango,carne moida,presunto,calabresa,catupiry,cheddar,crêem chesse,mussarela,coalho,bacon*/ 
item.add("Pastel 3 Sabores", "Carne de Sol, Frango, Carne Moida, Presunto, Calabresa, Catupiry, Cheddar, Crêem Chesse, Mussarela, Coalho, Bacon.", 7.00, "Principal.jpeg", "lanches");
item.add("Pastel 5 Sabores", "Carne de Sol, Frango, Carne Moida, Presunto, Calabresa, Catupiry, Cheddar, Crêem Chesse, Mussarela, Coalho, Bacon.", 9.00, "Principal.jpeg", "lanches");
item.add("Pastel 7 Sabores", "Carne de Sol, Frango, Carne Moida, Presunto, Calabresa, Catupiry, Cheddar, Crêem Chesse, Mussarela, Coalho, Bacon.", 12.00, "Principal.jpeg", "lanches");
item.add("Pastel de Vento", "Só a Massa do Pastel.", 4.00, "Principal.jpeg", "lanches");

category.add("Salgados", "lanches2");
item.add("Coxinha", "Massa de Batata, Frango.", 5.00, "Coxinha.jpeg", "lanches2");
item.add("Cachorro Quente", "Salsinha, Carnê Moída, ketchup ,Maionese, Mostarda, Cebola, Tomate, Batata Palha, Queijo Ralado, Milho, Ervilha.", 6.00, "cachorro quente.jpeg", "lanches2");
/*Salsinha,Carnê moída,ketchup,Maionese,Mostarda,Cebola,Tomate,Batata palha,Queijo ralado,Milho e ervilha*/
item.add("Empada de Frango", "Frango, Catupiry.", 5.00, "Empada de frango.jpeg", "lanches2");
item.add("Tapioca 2 Sabores", "Carne de Sol, Frango, Carne Moida, Presunto, Calabresa, Catupiry, Cheddar, Crêem Chesse, Mussarela, Coalho, Bacon.", 6.00, "tapioca.jpeg", "lanches2");
/*Carne de Sol,frango,carne moida,presunto,calabresa,catupiry,cheddar,crêem chesse,mussarela,coalho,bacon*/
item.add("Tapioca 3 Sabores", "Carne de Sol, Frango, Carne Moida, Presunto, Calabresa, Catupiry, Cheddar, Crêem Chesse, Mussarela, Coalho, Bacon.", 7.00, "tapioca.jpeg", "lanches2");

category.add("Sopas", "lanches3");
item.add("Sopa de Carne P", "Carne, Caldo de Carne, Legumes, Vegetais, Temperos, e Adicionais (Macarrão, Arroz).", 6.00, "sopa de carne.jpeg", "lanches3");
item.add("Sopa de Frango P", "Frango, Caldo de Frango, Legumes, Vegetais, Temperos, e Adicionais (Macarrão, Arroz).", 6.00, "sopa de frango.jpeg", "lanches3");
item.add("Sopa de Carne G", "Carne, Caldo de Carne, Legumes, Vegetais, Temperos, e Adicionais (Macarrão, Arroz).", 12.00, "sopa de carne.jpeg", "lanches3");
item.add("Sopa de Frango G", "Frango, Caldo de Frango, Legumes, Vegetais, Temperos, e Adicionais (Macarrão, Arroz).", 12.00, "sopa de frango.jpeg", "lanches3");

category.add("Batata Frita", "lanches4");
item.add("Batata Frita P", "Queijo Ralado, Ketchup, Maionese, Mostarda, Cheddar.", 6.00, "batata frita.jpeg", "lanches4"); /* Queijo ralado
ketchup, Maionese,Mostarda,Cheddar*/
item.add("Batata Frita G", "Queijo Ralado, Ketchup, Maionese, Mostarda, Cheddar.", 12.00, "batata frita.jpeg", "lanches4");

category.add("Açaí", "lanches5");
/* Banana,Leite em pó,Leite condensado,M&M,Chocobol,Farinha de amendoim,Granola,Paçoca*/
item.add("Açaí Pequeno", "Banana,Leite em Pó,Leite Condensado,M&M,Chocobol,Farinha de Amedoim,Granola,Paçoca.", 6.00, "acai.jpeg", "lanches5");
item.add("Açaí Medio", "Banana,Leite em Pó,Leite Condensado,M&M,Chocobol,Farinha de Amedoim,Granola,Paçoca.", 8.00, "acai.jpeg", "lanches5");
item.add("Açaí Grande", "Banana,Leite em Pó,Leite Condensado,M&M,Chocobol,Farinha de Amedoim,Granola,Paçoca.", 12.00, "acai.jpeg", "lanches5");

// Adicione esta função ao seu arquivo js/def.js

document.addEventListener('DOMContentLoaded', function () {
  const btnFinish = document.getElementById('list-btn');
  btnFinish.addEventListener('click', sendOrder);

  function sendOrder() {
    const listItems = document.getElementById('list-items');
    const listTotal = document.getElementById('list-total');
    const addressInput = document.getElementById('address');
    const nameclientInput = document.getElementById('nameclient');

    const items = Array.from(listItems.children).map(item => `${item.textContent} %0A`);
    const total = listTotal.textContent;
    const address = addressInput.value;
    const nameclient = nameclientInput.value;
    // Substitua 'seu_numero_whatsapp' pelo número de telefone para o qual deseja enviar o pedido
    const whatsappLink = `https://wa.me/5581996791112/?text= %0A *Cliente:* ${nameclient} %0A *Endereço:* ${address} _______________________  %0A *Pedido:* %0A ${items} %0A *Total:* R$ ${total}`;

    // Abra o link do WhatsApp em uma nova janela/tab
    window.open(whatsappLink, '_blank');
  }
});
