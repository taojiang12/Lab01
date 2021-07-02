const app = Vue.createApp({
    data(){
        return {
            product:'Shoes',
            description:'This is boots description',
            image:'./assets/images/socks_green.jpg',
            link:'https://www.camt.cmu.ac.th/index.php/th/',
            inStock:true,
            inventory:10,
            onSale:false
        }
    }
})

