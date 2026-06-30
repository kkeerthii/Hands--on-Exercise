import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class Exercise4_AAAPatternTest {

    BasicCalculator calculator;

    @Before
    public void initialize() {
        calculator = new BasicCalculator();
        System.out.println("Before Test Execution");
    }

    @Test
    public void testUsingAAA() {

        // Arrange
        int expectedValue = 50;

        // Act
        int actualValue = calculator.addNumbers(20, 30);

        // Assert
        assertEquals(expectedValue, actualValue);
    }

    @After
    public void cleanUp() {
        System.out.println("After Test Execution");
    }
}