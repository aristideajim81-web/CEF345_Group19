let expenses = [];

document.getElementById("add-btn").addEventListener("click", () => {
    const name = document.getElementById("expense-name").value;
    const amount = Number(document.getElementById("expense-amount").value);
    const category = document.getElementById("expense-category").value;

    if (name === "" || amount <= 0) {
        alert("Please enter valid expense details.");
        return;
    }

    const expense = { name, amount, category };
    expenses.push(expense);

    updateTable();
    updateTotal();

    document.getElementById("expense-name").value = "";
    document.getElementById("expense-amount").value = "";
});

function updateTable() {
    const table = document.getElementById("expense-table");
    table.innerHTML = "";

    expenses.forEach(exp => {
        const row = `
            <tr>
                <td>${exp.name}</td>
                <td>${exp.amount} FCFA</td>
                <td>${exp.category}</td>
            </tr>
        `;
        table.innerHTML += row;
    });
}

function updateTotal() {
    const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    document.getElementById("total").textContent = total;
}