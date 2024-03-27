// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('item');
const container = document.querySelector('list');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const product = form.elements.product;
    const quantity = form.elements.qty;
    addList(product.value, quantity.value);
    product.value = "";
    quantity.value = "";
    
})

const addList = (product, quantity) => {
    const newLi = document.createElement('li');
    newLi.append(`${quantity} ${product}`);
    container.append(newLi);
}