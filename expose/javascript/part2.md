# Part 2

1. it will print i, which is equal to 3 due to the array length of prices being 3.
2. the final iteration of the loop would leave discountedPrice = 300 / (1 - 0.5) = 150. it will print 150.
3. finalPrice is the rounded number of discounted price which at the least iteration is 150. since 150 is already rounded, it will print 150.
4. it will return an array with values 50, 100, 150
5. i has a block scope, thus i is not defined in that part, throwing an error
6. discountedPrice is in block scope, thus it is not defined, throwing an error
7. finalPrice will print the value of 150 since the let is within the main body of the function, which gives it function scope (as a block)
8. since the return statement is within the same indent as the variable (array) its calling, it will return an array with values 50, 100, 150
9. i is still undefined at that level, it will throw an error
10. length is set to prices.length is the size of the array and cannot change, thus it would print 3
11. discounted points to an empty array and const doesn't stop the manipulation of where the variables point to; therefore, the push function for arrays still work since it's not re-assigning or re-declaring. function will still return an array with values 50, 100, 150 (const has block scope)
12. 
    - student.name
    - student['Grad Year']
    - student.greeting()
    - student['Favorite Teacher'].name
    - student.courseLoad[0];
13. 
    - '32' since '3' is a char it added 2 by string logic
    - 1, subtraction is not used in char so it assumed to be a number
    - 3, 3 + 0 = 3 (null is false)
    - '3null', since it was addition by string logic
    - 4, true default value is 1
    - 0, false and null are both false values which is 0, 0 + 0 = 0
    - '3undefined' due to string addition
    - NaN since both parts are treated as a number and undefined is NaN
14. 
    - true, '2' is converted to a number and is larger than 1
    - false, it uses string comparison and thus compares '2' < '1' first
    - true, converts '2' into a number which is loosely equal to 2
    - false, strict equality does not convert types thus '2' is different than 2
    - false, true is defaulted to 1, and 1 != 2
    - true, Boolean(2) asks 2 if its a truthy value and returns true; true === true is true
15. ==: loose equality, auto converts type if different while ===: strict equality, return false if differing types
17. modifyArray:
    - empty newArr
    - iterate through array argument { push arr[i] * 2 into newArr }
    - return newArr, now with values 2, 4, 6;
18. 1
    3
    4
    2