import { defineStore } from 'pinia'
export const headerStore = defineStore('header', {
  state: () => {
    return { 
      isActive: [true, false, false, false, false, false],
      isFound: 1
    }
  },
  actions: {
    changeActive(id: string) {
      for (const key in this.isActive) {
        if (Object.prototype.hasOwnProperty.call(this.isActive, key)) {
          this.isActive[key] = false;
        }
      }
      if (id === "found") {
        this.isActive[0] = true;
        this.isFound = 1;
      } else if (id === "mymusic") {
        this.isActive[1] = true;
        this.isFound = 0;
      } else if (id === "focus") {
        this.isActive[2] = true;
        this.isFound = 0;
      } else if (id === "shop") {
      } else if (id === "musician") {
      } else if (id === "app") {
        this.isActive[5] = true;
        this.isFound = 0;
      }
    },
    
  }
})