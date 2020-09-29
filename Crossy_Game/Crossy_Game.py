# Gain access to the pygame library
import pygame

# class Game:


# pygame.init()

# Size of the screen
SCREEN_WIDTH = 800
SCREEN_HEIGHT = 800
# Size of the screen
SCREEN_TITLE = 'Crossy RPG'
# Colors according to RGB codes
WHITE_COLOR = (255, 255, 255)
BLACK_COLOR = (0, 0, 0)

# Clock used to update game events and frames
clock = pygame.time.Clock()
# Typical rate of 60, equivalent to FPS
TICK_RATE = 60
is_game_over = False

# Create the window of specified size in white to display the game
game_screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
# Set the game window color to white
game_screen.fill(WHITE_COLOR)
pygame.display.set_caption(SCREEN_TITLE)

# Load the player image from the file directory
player_image = pygame.image.load('images/player.png')
# Scale the image up
player_image = pygame.transform.scale(player_image, (50, 50))


# Main game loop, used to update all
# gameplay such as movement, checks, and graphics
# Runs until is_game_over = True
while not is_game_over:

    # A loop to get all of the events occurring at any given time
    # Events are most often mouse movement,
    # mouse and button clicks, or exit events
    for event in pygame.event.get():
        # If we have a quit type event (exit out)
        # then exit out of the game loop
        if event.type == pygame.QUIT:
            is_game_over = True
        print(event)

    # pygame.draw.rect(game_screen, BLACK_COLOR, [350, 350, 100, 100])
    # pygame.draw.circle(game_screen, BLACK_COLOR, (400, 300), 50)

    # Draw the player image on top of the screen at (x, y) position
    game_screen.blit(player_image, (375, 375))

    # Update all game graphics
    pygame.display.update()
    # Tick the clock to update everything within the game
    clock.tick(TICK_RATE)

# Quit pygame and the program
pygame.quit()
quit()
