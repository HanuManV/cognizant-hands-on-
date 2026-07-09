import java.util.Arrays;
import java.util.Comparator;

public class SearchTest {

    public static void main(String[] args) {

        Product[] products = {
                new Product(105, "Laptop", "Electronics"),
                new Product(102, "Shoes", "Fashion"),
                new Product(108, "Phone", "Electronics"),
                new Product(101, "Book", "Education"),
                new Product(104, "Watch", "Accessories")
        };

        System.out.println("Linear Search");

        Product linearResult = LinearSearch.search(products, 108);

        if (linearResult != null)
            linearResult.display();
        else
            System.out.println("Product Not Found");

        Arrays.sort(products, Comparator.comparingInt(Product::getProductId));

        System.out.println();

        System.out.println("Binary Search");

        Product binaryResult = BinarySearch.search(products, 108);

        if (binaryResult != null)
            binaryResult.display();
        else
            System.out.println("Product Not Found");
    }
}
