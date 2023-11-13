const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            message: "Questo è il mio messaggio!",
            colorTitle: "red",

            image: "https://img.wallpapic.it/i2955-731-515/medium/montagne-natura-svizzera-prato-sfondo.jpg",

        }
    },
    methods: {
        newColour: function() {
            if (this.colorTitle === "red") {
                this.colorTitle = "green"; 
            }else {
                this.colorTitle = "red";
            }
            
        }
    }
});

app.mount("#app");