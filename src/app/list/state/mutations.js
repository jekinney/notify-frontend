export const setListings = (state, listings) => {
    return state.listings = listings
}

export const setEditList = (state, list) => {
    return state.editList = list
}

export const setShowList = (state, List) => {
    return state.showList = list
}

export const clearEditLsit = (state) => {
    return state.editList = null
}

export const clearShowLsit = (state) => {
    return state.showList = null
}