public class TestLogger {
    public static void main(String[] args) {

        Logger logger1 = Logger.getInstance();
        logger1.log("1st message");

        Logger logger2 = Logger.getInstance();
        logger2.log("2nd message");

        if (logger1 == logger2) {
            System.out.println("Only one instance exists. Singleton is working!");
        } else {
            System.out.println("Multiple instances are existing.");
        }
    }
}