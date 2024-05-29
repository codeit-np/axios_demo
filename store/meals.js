import { defineStore } from "pinia";
import axiosApi from "~/config/axios";
export const useMealStore = defineStore("meal", {
  state: () => {
    meals: null;
    loading: false;
  },

  actions: {
    async fetchMeals() {
      try {
        this.loading = true;
        const response = await axiosApi.get("filter.php?c=Seafood");
        if (response.status == 200) {
          this.meals = response.data.meals;
        }
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },
  },
});
