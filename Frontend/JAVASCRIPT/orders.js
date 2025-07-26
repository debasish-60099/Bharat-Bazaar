document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const statusFilter = document.getElementById("statusFilter");
  const ordersTable = document.getElementById("ordersTable");
  const cancelButtons = document.querySelectorAll(".cancel-btn");

  // Search Filter
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    Array.from(ordersTable.querySelectorAll("tr")).forEach(row => {
      const text = row.innerText.toLowerCase();
      row.style.display = text.includes(query) ? "" : "none";
    });
  });

  // Status Filter
  statusFilter.addEventListener("change", () => {
    const selected = statusFilter.value;
    Array.from(ordersTable.querySelectorAll("tr")).forEach(row => {
      const status = row.getAttribute("data-status");
      row.style.display = (selected === "all" || status === selected) ? "" : "none";
    });
  });

  // Cancel Button
  cancelButtons.forEach(button => {
    button.addEventListener("click", () => {
      if (confirm("Are you sure you want to cancel this order?")) {
        alert("Order cancelled successfully!");
      }
    });
  });
});
