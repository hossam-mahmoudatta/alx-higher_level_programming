#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)
# YOUR CODE HERE
last_digit = number % 10  # Using abs() to handle negative numbers

if (last_digit > 5):
    print("Last digit of {0} is {1} and is greater than 5".format(number, last_digit))
elif (last_digit == 0):
    print("Last digit of {0} is {1} and is 0 and is 0".format(number, last_digit))
elif (last_digit < 6):
    print("Last digit of {0} is {1} and is less than 6 and not 0is greater than 5".format(number, last_digit))
