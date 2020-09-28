# subclasses, superclasses and inheritance

# PlayerCharacter(GameCharacter):
# super().__init__(name, x_pos, y_pos):

# player_character = PlayerCharacter('P_character', 100, 100, 500, 500)
# print(player_character.name)
# player_character.move(100)

# def move(self, by_y_amount):
#     self.y_pos += by_y_amount


# print(player_character.x_pos)  # 500
# print(player_character.y_pos)  # 600


# Classes and Objects
# Class fields, methods, and constructors
# Object instatiation

# class GameCharacter:
#     speed = 5

#     def __init__(self, name, width, height, x_pos, y_pos):
#         self.name = name
#         self.width = width
#         self.height = height
#         self.x_pos = x_pos
#         self.y_pos = y_pos

#     def move(self, by_x_amount, by_y_amount):
#         self.x_pos += by_x_amount
#         self.y_pos += by_y_amount


# character_0 = GameCharacter('char_0', 50, 100, 100, 100)
# print(character_0.name)  # char_0
# character_0.name = 'char_1'
# print(character_0.name)  # char_1
# character_0.move(50, 100)
# print(character_0.x_pos)  # 150
# print(character_0.y_pos)  # 200

#  character_0.name character_0.width character_0.height
# character_0.x_pos character_0.y_pos
# Functions
# Implementing, calling, parameters, return values

# x_pos = 0


# def move():
#     global x_pos
#     x_pos += 1


# move()
# print(x_pos)
# x_pos = 0
# e_x_pos = 4


# def move_by(amount):
#     global x_pos
#     x_pos += amount


# move_by(5)  # 5
# move_by(-3)  # 2
# move_by(10)  # 12
# print(x_pos)  # 12


# def check_for_collision():
#     global x_pos
#     global e_x_pos
#     if x_pos == e_x_pos:
#         return True
#     else:
#         return False


# move_by(5)
# did_collide = check_for_collision()
# print(x_pos)
# print(did_collide)

# # while loops
# # for in loops
# is_game_over = False
# p_x_pos = 2
# e_x_pos = 3
# end_x_pos = 10

# while not is_game_over:
#     print(p_x_pos)
#     print(e_x_pos)
#     if p_x_pos == e_x_pos:
#         print('Try Again! :-( ')
#         is_game_over = True
#     elif p_x_pos >= end_x_pos:
#         print('You Win :-) ')
#         is_game_over = True
#     else:
#         p_x_pos += 3
#         e_x_pos += 1

# x_pos = 5
# movements = [1, -2, 6, -3, -2, 4]

# for movement in movements:
#     x_pos += movement
# print(x_pos)   # 9


# while not is_game_over: #be careful for infinite loops
# do something

# Python language basics
# control flow
# if statements

# is_game_over = False
# p_0_xpos = 0
# e_0_pos = 3
# e_1_pos = 5

# p_0_xpos += 2
# if p_0_xpos == e_0_pos or p_0_xpos == e_1_pos:
#     is_game_over = True
# else:
#     e_0_pos += 1
#     e_1_pos += 1


# size = (100, 200)

# width= size[0]
# #width= 100

# height= size[1]
# #height= 200

# new_Size = size + (300)
# #new_size = (100, 200, 300)

# del new_size
# #new_size no longer exist

# len(size) #2
# max(size) #200
# min(size) #100
# does_contain = 100 in size
# print(does_contain)

# movement = [5, -2, -3, 4, -1]
# first_movement = movement[0]  #first_movement = 5
# movement[0] = 7 #movement = [7, -2, -3, 4, -1]
# movement.append(-5) # movement = [7, -2, -3, 4, -1, -5]
# movement.remove(-3) # movement = [7, -2, 4, -1, -5]

# starting_position = {'p_0':50, 'p_1':100, 'p_2':150}
# starting_position['p_0'] #50
# starting_position.keys() #['p_0', 'p_1', 'p_2']
