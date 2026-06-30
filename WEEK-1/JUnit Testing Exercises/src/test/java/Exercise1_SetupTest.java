import org.junit.Test;
import static org.junit.Assert.*;

public class Exercise1_SetupTest {

    @Test
    public void verifyAddition() {
        BasicCalculator calculator = new BasicCalculator();
        int output = calculator.addNumbers(10, 20);
        assertEquals(30, output);
    }
}