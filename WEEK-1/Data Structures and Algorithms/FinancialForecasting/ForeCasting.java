public class ForeCasting {
    //recursive method
    public static double futureValue(double presentValue, double growthRate, int years) { 
        //base case
        if (years == 0) {
            return presentValue;
        }
        //recursive case
        return futureValue(presentValue, growthRate, years - 1) * (1 + growthRate);
    }
    public static void main(String[] args) {
        double presentValue = 10000;
        double growthRate = 0.10; // 10%
        int years = 4;

        double result = futureValue(presentValue, growthRate, years);

        System.out.println("Future Value after " + years + " years: " + result);
    }
}