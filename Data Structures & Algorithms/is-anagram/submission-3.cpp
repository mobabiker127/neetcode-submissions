class Solution {
public:
    bool isAnagram(string s, string t) {
        // sort both strings
        std::sort(s.begin(), s.end());
        std::sort(t.begin(), t.end());
        // compare lengths of strings
        if(s.length() != t.length()) {
            return false;
        }
        // iterate through and compare strings
        for(int i = 0; i < s.length(); i++) {
            if(s[i] != t[i]) {
                return false;
            }
        }
        return true;
    }
};
