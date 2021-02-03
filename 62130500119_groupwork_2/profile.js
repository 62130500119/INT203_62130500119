    const app = {
        data() {
            return {
                firstname: "Attapon",
                lastname: "Jeamjumroensuk",
                state: "ฺBangkok",
                followers: "69",
                projects: "14",
                ranks: "199",
                image: "images/profile.jpg",
                cover: "images/cover.jpg"
            }
        }
    }
    mountedApp = Vue.createApp(app).mount('#app') 