export class Product {
    id;
    title: string;
    description: string;
    price: number;
    image: string;
    category: string;
    originalPrice: number;

    constructor(id,title: string,description: string,price: number, image: string, category: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.image = image;
        this.category = category;
        this.originalPrice =  Number(( Number(price) * 49/100 + Number(price)).toFixed(3));
    }

    // static create(title: string,description: string,price: number, image: string, category: string){
    //     return new Product(title,description,price,image,category);
    // }
}