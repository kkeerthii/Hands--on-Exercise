import org.junit.Test;
import static org.junit.Assert.*;

public class Exercise3_AssertionsDemo {

    @Test
    public void checkAssertions() {

        assertEquals(8, 5 + 3);

        assertTrue(20 > 10);

        assertFalse(2 > 5);

        String text = null;
        assertNull(text);

        Object obj = new Object();
        assertNotNull(obj);
    }
}