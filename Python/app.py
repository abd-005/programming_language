# ---Variables---


# python is case sensitive

student_count = 1000 # Integer
rating = 4.9 #
is_published = False # Boolean. 
course_name = "Python Programming"
# print(student_count)



# ---String---


course = "Python Programming"
# print(len(course)) # print: length of the String
# print(course[0]) # print: 1st word of the String
# print(course[-1]) # print: last word of the String
# print(course[0:3]) # print: first 4 words of the String
# print(course[0:]) # print: till the last word of the String
# print(course[:3]) # print: first 4 words of the String
# print(course[:]) # print: whole String


# ---Escape Syntax---


course = "Python \"Programming\" \\ \'Coding\'\n"
# print(course)


# \' will print: '
# \" will print: "
# \\ will print: \
# \n will print: new line

# ---Formatted String---

first = "Abdul"
last = "Ahad"
full = f"{first} {last}"

# print(full) # output: Abdul Ahad


# ---String Methods---


course = "  Python programming"
# print(course.upper()) # Will print: All Upper Case 
# Output: (  PYTHON PROGRAMMING)
# print(course.lower()) # Will print: All Lower Case 
# Output: (  Python Programming)
# print(course.title()) # Will print: First letter capital
# Output: (  Python Programming)
# print(course.strip()) # Will print: Removes white spaces
# Output: (Python programming)
# print(course.lstrip()) # Will print: Removes white spaces at the beginning
# Output: (Python programming)
# print(course.rstrip()) # Will print: Removes white spaces at the end
# Output: (  Python programming)
# print(course.find("pro")) # Will print: finds the first index
# Output: 9
# print(course.replace("pro", "mri")) # Will print: replaces the string
# Output: (  Python mrigramming)
# print("pro" in course) # Will print: Boolean value for containing the string
# Output: True
# print("pro" not in course) # Will print: Boolean value for not containing the string
# Output: False


# ---Numbers---
x = 1 # integer
x = 1.1 # float
x = 3 + 4j # complex 

# print(10 + 3) # add
# print(10 - 3) # sub
# print(10 * 3) # mul
# print(10 / 3) # div, output is float
# print(10 // 3) # div, output is int 
# print(10 % 3) # mod, output is reminder
# print(10 ** 3) # output 10^3

x = 10
x = x + 3
x += 3 # other way to add

# ---Math--


import math

print(round(2.9))
print(abs(-2.9))

print(math.ceil(2.2))
print(math.floor(2.2))
# Have to practice from documentation


# Type Conversion
x = input("x: ")
print(type(x))
y = int(x) + 1 # error
print(f"x: {x}, y: {y}")

# int(x)
# float(x)
# bool(x)
# str(x)

# Falsy : "" || 0 || None


