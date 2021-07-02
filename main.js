const app = Vue.createApp({
    data(){
        return {
            product:'Shoes',
            description:'This is boots description',
            image:'./assets/images/socks_green.jpg',
            link:'https://www.camt.cmu.ac.th/index.php/th/',
            inStock:true,
            inventory:10,
            onSale:false,
            details:['50% cotton','30% wool','20% polyester'],
            variants:[
                {id : 2234,color: 'green', image: './assets/images/socks_green.jpg'},
                {id : 2235,color: 'blue' , image: './assets/images/socks_blue.jpg'}
            ],
            sizes:[
                {id : 2236,size: 'S'},
                {id : 2237,size: 'M'},
                {id : 2238,size: 'L'}
            ],
            cart:0        
        }
        
    },
    methods:{
        addToCart(){
            this.cart += 1
        },
        updateImage(variantImage){
            this.image = variantImage
        },
        changeStatus(){
            this.inStock=false
        }
    }
})


