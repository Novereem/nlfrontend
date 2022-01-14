export const getGlobalState = store => store.global;

export const getAPI = store => getGlobalState(store).api;
export const getAPITUT = store => getGlobalState(store).apiTut;