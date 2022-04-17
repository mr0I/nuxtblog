import Vuex from 'vuex';
import User from './modules/user';

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      user: User,
    },
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit("setPosts", [
              {
                id: "1",
                title: "First Post",
                previewText: "This is our first post!",
                thumbnail:
                  "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
                date: "2022-4-7"
              },
              {
                id: "2",
                title: "Second Post",
                previewText: "This is our second post!",
                thumbnail:
                  "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
                date: "2021-2-03"
              }
            ]);
            resolve();
          }, 1000);
        });
      },
    },
  });
};

export default createStore;
