// Classe pour représenter un produit
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// Classe pour représenter un élément du panier d'achat
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product; // instance de Product
        this.quantity = quantity;
    }

    // Méthode pour calculer le prix total de l'élément
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

// Classe pour représenter le panier d'achat
class ShoppingCart {
    constructor() {
        this.items = []; // tableau pour stocker les instances de ShoppingCartItem
    }

    // Méthode pour obtenir le total des éléments dans le panier
    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    // Méthode pour ajouter un élément au panier
    addItem(product, quantity) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity; // Met à jour la quantité si le produit existe déjà
        } else {
            const newItem = new ShoppingCartItem(product, quantity);
            this.items.push(newItem); // Ajoute le nouvel élément au panier
        }
    }

    // Méthode pour supprimer un élément du panier
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // Méthode pour afficher les éléments du panier
    displayItems() {
        if (this.items.length === 0) {
            console.log("Le panier est vide.");
            return;
        }

        console.log("Contenu du panier :");
        this.items.forEach(item => {
            console.log(`${item.product.name} (x${item.quantity}): $${item.getTotalPrice().toFixed(2)}`);
        });
    }

    // Méthode pour obtenir le total général du panier
    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
}

// Test des capacités des objets
// Créer des produits
const product1 = new Product(1, "Chaussures", 49.99);
const product2 = new Product(2, "T-shirt", 19.99);
const product3 = new Product(3, "Pantalon", 39.99);

// Créer un panier d'achat
const cart = new ShoppingCart();

// Ajouter des éléments au panier
cart.addItem(product1, 2); // Ajoute 2 paires de chaussures
cart.addItem(product2, 1); // Ajoute 1 T-shirt
cart.addItem(product3, 3); // Ajoute 3 pantalons

// Afficher le panier
cart.displayItems();
console.log(`Total des éléments : ${cart.getTotalItems()}`);
console.log(`Prix total du panier : $${cart.getTotalPrice().toFixed(2)}`);
// suprimer les paniers totals

   