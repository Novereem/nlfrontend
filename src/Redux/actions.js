export const Actions = {
    setAPI:"[Global] API"
}

export const setAPI = (api) => ({
    type: Actions.setAPI,
    payload: {
        api
    }
})