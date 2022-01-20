name = 'Richard'
age = 50 #a big lie
height = 80 #inches 
weight = 400 #lbs: a big lie
eyes = 'Yellow' #not true
teeth = 'Pink' #because of
hair = 'Black' #nothingtruer
true_weight = round(weight/2.2046)
true_height = round(height * 2.54)

print(f"Let's talk about {name}.")
print(f"He's {height} inches tall.")
print(f"He's {weight} pounds heavy.")
print("Actually that's not too heavy.")
print(f"He's got {eyes} eyes and {hair} hair.")
print(f"His teeth are usually {teeth} depending on the coffee.")

total = age + height + weight
print(f"If I add {age}, {height}, and {weight} I get {total}")
print(f"my true height is {true_height}.")
print(f"my true weight is {true_weight}.")