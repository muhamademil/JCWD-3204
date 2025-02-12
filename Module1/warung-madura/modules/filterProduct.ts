import data from "../data.json"

export function filterProduct(filterBy: "Bahan Pokok" | "Minuman" | "Makanan Instan" | "Kebutuhan Rumah Tangga") {
    let result = data.filter((value) => value.category === filterBy)
    return result
}