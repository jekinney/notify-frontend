export const getListings = ({commit}, limit) => {
    return axios.get('/list?limit='+ limit).then( response => {
        return commit('setListings', response.data.data)
    })
}

export const getShowListing = ({commit}, listId) => {
    return axios.get('list/show/' + listId).then( response => {
        return commit('setShowListing', response.data.data)
    })
}

export const getEditListing = ({ commit }, listId) => {
    return axios.get('list/edit/' + listId).then(response => {
        return commit('setEditListing', response.data.data)
    })
}

export const postNewListing = ({ commit }, {list, context}) => {
    return axios.post('list', list).then( response => {
        return context.errors = []
    }).catch( errors => {
        return context.errors = errors.response.data
    })
}

export const patchUpdatListing = ({ commit }, {list, context}) => {
    return axios.patch('list/' + list.id,  list).then( response => {
        return context.errors = []
    }).catch( errors => {
        return context.errors = errors.response.data
    })
}