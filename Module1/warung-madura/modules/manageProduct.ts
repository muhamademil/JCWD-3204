import data from "../data.json"

// -- manage product menggunakan class
export class ManageProduct {

    filterProduct(filterBy: "Bahan Pokok" | "Minuman" | "Makanan Instan" | "Kebutuhan Rumah Tangga") {
        let result = data.filter((value) => value.category === filterBy)
        return result
    }

    searchProduct(keyword: string) {
        let result = data.filter((value) => value.title.toLowerCase().includes(keyword.toLowerCase()))
        return result
    }

    sortingPrice(sortBy: "Termurah" | "Termahal") {
        let result = data.slice().sort((low, high) => {
            return sortBy === "Termurah" ? low.price - high.price : high.price - low.price
        })
        return result
    }

    getProductById(id: number) {
        let result = data.find((value) => value.id === id)
        console.log('check ', result)
        if (result === undefined) {
            return "Data tidak ditemukan"
        }
        return result
    }

    getProduct() {
        const result = data.map((value) => value)
        return result
    }
}