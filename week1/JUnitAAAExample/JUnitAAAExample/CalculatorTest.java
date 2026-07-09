import static org.junit.Assert.assertEquals;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator();
    }

    @Test
    public void testAdd() {
        int expected = 5;
        int actual = calculator.add(2, 3);
        assertEquals(expected, actual);
    }

    @After
    public void tearDown() {
        calculator = null;
    }
}
