export const Actions = {
    setAPI:"[Global] API",
    setAPITUT:"[Global] APITUT"
}

export const setAPI = (api) => ({
    type: Actions.setAPI,
    payload: {
        api
    }
})

export const setAPITUT = (apiTut) => ({
    type: Actions.setAPITUT,
    payload: {
        apiTut
    }
})