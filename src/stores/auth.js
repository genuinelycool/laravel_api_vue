import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", {
  state: () => {
    return {
      user: null,
      errors: {},
    };
  },
  actions: {
    /***************** Get authenticated user *****************/
    async getUser() {
      if (localStorage.getItem("token")) {
        const res = await fetch("/api/user", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await res.json();
        if (res.ok) {
          this.user = data;
        }
        console.log(data);
      }
    },

    /***************** Login or Register user *****************/
    async authenticate(apiRoute,formData) {
      const res = await fetch(`/api/${apiRoute}`, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.errors) {
        this.errors = data.errors;
      } else {
        localStorage.setItem('token', data.token);
        this.user = data.user;
        this.router.push({ name: "home" });
      }
    },
  },
});
