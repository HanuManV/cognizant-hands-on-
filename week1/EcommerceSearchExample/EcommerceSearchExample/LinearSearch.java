public class LinearSearch {

    public static Product search(Product[] products, int id) {
        for (Product product : products) {
            if (product.getProductId() == id) {
                return product;
            }
        }
        return null;
    }
}
