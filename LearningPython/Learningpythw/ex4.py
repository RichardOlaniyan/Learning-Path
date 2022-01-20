#The line below stores the 200 inside the variable car
cars = 200
#The line below stores 4.0 inside the variable space_inside_of_cars
space_inside_of_cars = 4.0
#The line below stores 30 inside the variable drivers
drivers = 30
#The line below stores 90 inside the variable passengers
passengers = 90
#The line below subtracts the value of drivers from the value of car and stores the result in the variable cars_not_driven 
cars_not_driven = cars - drivers
#The line below stores the value of drivers inside the variable cars_driven
cars_driven = drivers
#The line below mutiplies the value of cars_driven by the value of space_inside_of_cars and stores the value inside of the variable carpool_capacity 
carpool_capacity = cars_driven * space_inside_of_cars
#The line below divides the value of the variable passengers by the value of variable cars_driven and stores the value in variable average_passengers_per_car
average_passengers_per_car = passengers / cars_driven

print("There are", cars, "cars available.")
print("There are only", drivers, "drivers available.")
print("There will be", cars_not_driven, "empty cars today.")
print("We can transport", carpool_capacity, "people today.")
print("We have", passengers, "to carpool today.")
print("We need to put about", average_passengers_per_car, "in each car.")