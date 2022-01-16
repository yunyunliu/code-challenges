/*
given a string representing a grid, with rows indicated by semicolons, find the distance between
square O and square T. square X represents an obstachle
example:
input: 'O__;_XT;___'
string respresenting this map: O _ _
                               _ X T
                               _ _ _
output: 3  -> distance is 3 because O needs to move 2 squares right and then 1 square down to meet T
to reach T

probably something with dynamic programming aka changing things in place and 2-D arrays
after converting input string into 2d array matrix:
1. check at each square if value is T: check the adjacent squares (sides and diagonals) for whether they exist, and if they exist if
one of them is O, if yes change current square to 1...a

*/
