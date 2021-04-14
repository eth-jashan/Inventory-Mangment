class ItemModel {
    constructor(id,catId,sellPrice, costPrice, open, reorder, productName, productUnit, sku, imageUri){
        this.id = id;
        this.catId = catId;
        this.sellPrice=sellPrice;
        this.costPrice = costPrice;
        this.open = open;
        this.reorder = reorder;
        this.productName = productName;
        this.productUnit = productUnit;
        this.sku = sku;
        this.imageUri = imageUri
    }
}

export default ItemModel