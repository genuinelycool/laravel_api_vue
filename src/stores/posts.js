import { defineStore } from "pinia";

export const usePostsStore = defineStore("postsStore", {
  state: () => {
    return {
      errors: {},
    };
  },
  actions: {
    /***************** Get all posts  *****************/
    async getAllPosts() {
        const res = await fetch("/api/posts");
        const data = await res.json();

        console.log(data);
        
        return data;
    },

    /***************** Create a post *****************/
    async createPost(formData) {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.errors) {
        this.errors = data.errors;
      } else {
        this.router.push({ name: "home" });
      }
    },
  },
});
