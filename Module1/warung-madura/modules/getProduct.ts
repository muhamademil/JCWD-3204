import data from "../data.json"

export function getProduct() {
    const result = data.map((value) => value)
    return result
}

