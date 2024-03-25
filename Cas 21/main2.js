class Product {
    constructor(name, category, price) {
        this.id = Math.floor(Math.random() * 1000)
        this.name = name || '---'
        this.category = category || '---'
        this.price = Number(price) || 0
    }
}