document.addEventListener('DOMContentLoaded', () => {
  const productForm = document.getElementById('productForm');
  const productTable = document.getElementById('productTable').querySelector('tbody');
  const editIndex = document.getElementById('editIndex');

  let products = [];

  function renderTable() {
    productTable.innerHTML = '';
    products.forEach((p, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${p.name}</td>
        <td>₹ ${p.price}</td>
        <td>${p.stock}</td>
        <td>${p.category}</td>
        <td>
          <button class="action-btn edit-btn" data-index="${index}">Edit</button>
          <button class="action-btn delete-btn" data-index="${index}">Delete</button>
        </td>
      `;
      productTable.appendChild(row);
    });
  }

  productForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('productName').value;
    const price = document.getElementById('price').value;
    const stock = document.getElementById('stock').value;
    const category = document.getElementById('category').value;

    if (editIndex.value) {
      products[editIndex.value] = { name, price, stock, category };
      editIndex.value = '';
    } else {
      products.push({ name, price, stock, category });
    }

    productForm.reset();
    renderTable();
  });

  productTable.addEventListener('click', (e) => {
    const index = e.target.dataset.index;
    if (e.target.classList.contains('edit-btn')) {
      const product = products[index];
      document.getElementById('productName').value = product.name;
      document.getElementById('price').value = product.price;
      document.getElementById('stock').value = product.stock;
      document.getElementById('category').value = product.category;
      editIndex.value = index;
    } else if (e.target.classList.contains('delete-btn')) {
      if (confirm('Are you sure you want to delete this product?')) {
        products.splice(index, 1);
        renderTable();
      }
    }
  });
});
