public class PangramChecker {
    public static void main(String[] args) {
        String input = "The quick brown fox jumps over the lazy dog";

        if (isPangram(input)) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String input) {
        // Remove spaces and convert input to lowercase
        input = input.replaceAll("\\s", "").toLowerCase();

        // Create an array to track the presence of each alphabet
        boolean[] alphabetPresent = new boolean[26];

        for (int i = 0; i < input.length(); i++) {
            char c = input.charAt(i);

            // Check if the character is an alphabet (a to z)
            if (c >= 'a' && c <= 'z') {
                alphabetPresent[c - 'a'] = true;
            }
        }

        // Check if all alphabet letters are present
        for (boolean letterPresent : alphabetPresent) {
            if (!letterPresent) {
                return false;
            }
        }

        return true;
    }
}