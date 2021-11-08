export const getGlobalState = store => store.global;

export const getAPI = store => getGlobalState(store).api;