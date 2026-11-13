#include <unordered_map>
#include <iostream>

class Solution {
public:
    bool hasDuplicate(vector<int>& nums) {
        // create hash map
        unordered_map<int, int> checkDuplicate;
        // loop through array and check hash map for element
        for(int i = 0; i < nums.size(); i++) {
            if(checkDuplicate.find(nums[i]) == checkDuplicate.end()) {
                checkDuplicate[nums[i]] = i;
            } else {
                // duplicate found
                cout << "Duplicate detected" << endl;
                return true;
            }
        }
        // no duplicate found
        return false;
    }
};