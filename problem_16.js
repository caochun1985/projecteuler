/* java code
 public static void main(String[] p) {
 BigDecimal b = new BigDecimal(Math.pow(2, 1000));
 String n = b.toString();
 int result = 0;

 for (int i = 0; i < n.length(); i++) {
 result = result + Integer.parseInt(String.valueOf(n.charAt(i)));
 }

 System.out.println(result);

 }*/
