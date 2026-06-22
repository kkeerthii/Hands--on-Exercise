import java.util.Arrays;
import java.util.Comparator;

public class Search {
    // Linear Search
    public static Product linearSearch(Product[] products, int id) {
        for (Product product : products) {
            if (product.productId == id) {
                return product;
            }
        }
        return null;
    }
    // Binary Search
    public static Product binarySearch(Product[] products, int id) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;

            if (products[mid].productId == id) {
                return products[mid];
            }

            if (products[mid].productId < id)
                left = mid + 1;
            else
                right = mid - 1;
        }
        return null;
    }

    public static void main(String[] args) {

        Product[] products = {
            new Product(103, "Laptop", "Electronics"),
            new Product(101, "Shoes", "Fashion"),
            new Product(104, "Phone", "Electronics"),
            new Product(102, "Watch", "Accessories")
        };
        // Linear Search
        System.out.println("Linear Search:");
        Product p1 = linearSearch(products, 101);
        if (p1 != null)
            p1.display();
        // Sort array for Binary Search
        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));
        // Binary Search
        System.out.println("Binary Search:");
        Product p2 = binarySearch(products, 103);
        if (p2 != null)
            p2.display();
    }
}