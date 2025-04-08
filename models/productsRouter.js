import fs from "fs/promises"
// const path = './users.json';

export default class ProductManger{
    products = [];
    constructor(products=[]){
        this.products = products
    }
    randomID(){
        return crypto.randomUUID();
    }
    async addProduct(product){
        // Antes de agregar leemos el json, y agregamos la información
        await this.getProducts();
        product.id = this.randomID();
        this.products.push( product);
        
        // formateamos los datos de los productos
        const data = JSON.stringify( this.products, null, 2);
        try {
            await fs.writeFile( path, data );
            return data;
        } catch (error) {
            console.error(error);
        }
    }
    async getProducts(){
        try {
            const data = await fs.readFile(path);
            this.products = JSON.parse( data);
            return this.products;
        } catch (error) {
            console.error(error);
        }
    }

    async getProductById(id){
        const products = await this.getProducts();
        const product = products.find(  item => item.id == id  );
        return product ? product : {};
    }
}