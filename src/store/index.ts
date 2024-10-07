import { createStore } from "vuex";
import tracks from "../packages/tracks.json";

export default createStore({
    state: {
        isLoading: false,
        currentPackage: [],
    },
    getters: {
        GET_LOADING_STATUS: (state) => state.isLoading,
        GET_CURRENT_PACKAGE: (state) => state.currentPackage,
    },
    mutations: {
        SET_LOADING_STATUS: (state, payload) => (state.isLoading = payload),
        SET_CURRENT_PACKAGE: (state, payload) =>
            (state.currentPackage = payload),
    },
    actions: {
        getPackages({ commit }, payload) {
            commit("SET_LOADING_STATUS", true);
            commit("SET_CURRENT_PACKAGE", []);

            const res = tracks.trackingInformation.filter(
                (x) => x.trackingID == payload
            );

            if (res.length < 1) {
                console.log("No item");

                return;
            }

            setTimeout(() => {
                commit("SET_CURRENT_PACKAGE", res);
                commit("SET_LOADING_STATUS", false);
            }, Math.floor(Math.random() * 5 + 5) * 1000);
        },
    },
    modules: {},
});
