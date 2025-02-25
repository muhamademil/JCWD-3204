type Action = { type: "increment" } | { type: "decrement" }

export function productReducer(state: number, action: Action) {
    switch (action.type) {
        case "increment":
            return state + 1
        case "decrement":
            return state - 1
        default:
            return state
    }
}