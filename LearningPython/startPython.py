
print(2 + 2)

a = 4
b = 6 

print(a+b)

print('I\nam\na\nlegend')

word = 'pepsi'

print(word[0:])

import sys; print(sys.version_info.major)
games = ['Fifa', 'Mortal Combat', 'Call of Duty']
for g in games:
    print(g, len(g))

users = {'Hans': 'active', 'Éléonore': 'inactive', '景太郎': 'active'}
print(users.items())

list = ['Fifa', 'Mortal Combat', 'Call of Duty']
for i in range(len(list)):
        for j in range(len(list)-i-1):
            if (list[j] < list[j+1]):
                list[j], list[j+1] = list[j+1], list[j]
print(list)

def fib(n):
    a, b = 0, 1
    while a < n:
        print(a, end=' ')
        a, b = b, a+b
    print()

fib(2000)
import sys
print(dir(sys))

year = 2016
event = 'Referendum'
print(f'Results of the {year} {event}')

# Import seaborn
import seaborn as sns
import matplotlib.pyplot

# Apply the default theme
sns.set_theme()

# Load an example dataset
tips = sns.load_dataset("tips")

# Create a visualization
sns.relplot(
    data=tips,
    x="total_bill", y="tip", col="time",
    hue="smoker", style="smoker", size="size",
)
matplotlib.pyplot.show()