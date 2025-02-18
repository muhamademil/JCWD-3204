document.addEventListener("DOMContentLoaded", function () {

    // ambil id dari form dan table body
    const form = document.getElementById("warehouseForm")
    const tableBody = document.getElementById("tableBody")
    let itemList = []
    let editIndex = null

    // fungsi untuk menambahkan item ke table
    form.addEventListener("submit", function (e) {
        e.preventDefault() // -> untuk mencegah data terhapus ketika dirender

        // mengambil id dari masing masing elemen item
        const itemName = document.getElementById("itemName").value.trim()
        const itemQuantity = document.getElementById("itemQuantity").value.trim()
        const itemCategory = document.getElementById("itemCategory").value.trim()

        // fungsi untuk create item ke table
        if (itemName && itemQuantity && itemCategory) {
            if (editIndex === null) {
                itemList.push({ itemName, itemQuantity, itemCategory })
            } else {
                itemList[editIndex] = { itemName, itemQuantity, itemCategory }
                editIndex = null
            }
            renderTable()
        }

        // fungsi untuk render tabelnya
        function renderTable() {
            tableBody.innerHTML = ""
            itemList.forEach((item, index) => {
                const row = document.createElement("tr")
                row.innerHTML =
                    `<td>${index + 1}</td>
                    <td>${item.itemName}</td>
                    <td>${item.itemQuantity}</td>
                    <td>${item.itemCategory}</td>

                    <td class="action-buttons">
                        <button class="edit-btn" onclick="editItem(${index})">Edit<button/>
                        <button class="delete-btn" onclick="deleteItem(${index})">Delete<button/>
                    </td>
                    `
                tableBody.appendChild(row)
            })
        }

        // fungsi untuk edit item
        window.editItem = function (index) {
            const item = itemList[index]
            document.getElementById("itemName").value = item.itemName
            document.getElementById("itemQuantity").value = item.itemQuantity
            document.getElementById("itemCategory").value = item.itemCategory
            editIndex = index
        }

        // fungsi untuk hapus item
        window.deleteItem = function (index) {
            if (confirm("Are you sure you want to delete this item?")) {
                itemList.splice(index, 1)
                renderTable()
            }
        }
    })

})