class Solution {
public:
    #include <stdio.h>
    #include <string>
    #include <cctype>
    bool isPalindrome(string s) {
        // create strings to store lower cased "s" and the reverse of that string
        string reverse;
        string ss;
        // loop through s and store lower cased characters in another string
        for(int i = 0; i < s.length(); i++) {
            if (isspace(static_cast<unsigned char>(s[i])) ||
            ispunct(static_cast<unsigned char>(s[i]))) {
            continue;
        }
        s[i] = tolower(static_cast<unsigned char>(s[i]));
        ss += s[i];
        }
        // insert ss into reverse in reverse order
        for(int i = ss.length()-1; i >= 0; i--) {
            reverse += ss[i];
        }
        cout << reverse << endl;
        cout << ss << endl;
        // comparison
        if (ss == reverse) {
            return true;
        }
        return false;
    }
};
