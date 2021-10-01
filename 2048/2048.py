#! /usr/bin/python3
import pygame as pg, sys, time
from pygame.locals import *
from constants import *
from random import *
from colors import *

size_of_window = 4
score = 0
defaultscore = 2
width = 400
height = 500

pg.init()

window = pg.display.set_mode((width, height), 0, 32)
pg.display.set_caption("2048 Game")

font = pg.font.SysFont("monospace", 40)
score_font = pg.font.SysFont("monospace", 30)

title = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
undo_mat = []

def main(loaded = False):
  if not loaded:
    place_random_tile()
    place_random_tile()
  print_matrix()

  while True:
    for e in pg.event.get():
      if e.type == QUIT:
        pg.quit()
        sys.exit()
      
      if can_go():
        if e.type == KEYDOWN:
          if is_arrow(e.key):
            no_of_rotations = get_rotations(e.key)
            add_to_undo()

            for _ in range(0, no_of_rotations):
              rotate_clockwise()
            
            if can_move():
              move_tiles()
              merge_tiles()
              place_random_tile()
            
            for _ in range(0, (4-no_of_rotations) % 4):
              rotate_clockwise()
            
            print_matrix()
      
      else:
        game_over()
      
      if e.type == KEYDOWN:
        global size_of_window

        if(e.key) == pg.K_r:
          reset()
        if 50<e.key and 56 > e.key:
          size_of_window = e.key - 48
          reset()
        if e.key == pg.K_s:
          save()
        elif e.key == pg.K_l:
          load()
        elif e.key == pg.K_u:
          undo()

    pg.display.update()

def can_move():
    for i in range(0,size_of_window):
        for j in range(1,size_of_window):
            if (title[i][j-1] == 0 and title[i][j] > 0) or ((title[i][j-1] == title[i][j]) and title[i][j-1] != 0):
                return True
    return False

def move_tiles():
  for i in range(0,size_of_window):
        for j in range(0,size_of_window-1):
            while title[i][j] == 0 and sum(title[i][j:]) > 0:
                for k in range(j,size_of_window-1):
                   title[i][k] = title[i][k+1]
                title[i][size_of_window-1] = 0

def merge_tiles():
    global score

    for i in range(0,size_of_window):
        for k in range(0,size_of_window-1):
            if title[i][k] == title[i][k+1] and title[i][k] != 0:
                title[i][k] = title[i][k]*2
                title[i][k+1] = 0 
                score+= title[i][k]
                move_tiles()

def place_random_tile():
    k = floor(random() * size_of_window* size_of_window)

    while title[floor(k/size_of_window)][k%size_of_window] != 0:
        k = floor(random() * size_of_window * size_of_window)

    title[floor(k/size_of_window)][k%size_of_window] = 2

def floor(n):
    return int(n - (n % 1 ))


def print_matrix():
        window.fill(get_colors(0))
        global size_of_window
        global score

        for i in range(0,size_of_window):
            for j in range(0,size_of_window):
                pg.draw.rect(window,get_colors(title[i][j]),(i*(400/size_of_window),j*(400/size_of_window)+100,400/size_of_window,400/size_of_window))
                label = font.render(str(title[i][j]),1,(255,255,255))
                label2 = font.render("YourScore:"+str(score),1,(255,255,255))
                window.blit(label,(i*(400/size_of_window)+30,j*(400/size_of_window)+130))
                window.blit(label2,(10,20))

def can_go():
    for i in range(0,size_of_window ** 2): 
        if title[floor(i/size_of_window)][i%size_of_window] == 0:
            return True
    
    for i in range(0,size_of_window):
        for j in range(0,size_of_window-1):
            if (title[i][j] == title[i][j+1]) or (title[j][i] ==title[j+1][i]):
                return True
    return False

def add_to_undo():
    mat = []
    for i in range(0,size_of_window ** 2):
        mat.append(title[floor(i/size_of_window)][i%size_of_window])

    mat.append(score)
    undo_mat.append(mat) 


def rotate_clockwise():
    for i in range(0,int(size_of_window/2)):
        for k in range(i,size_of_window- i- 1):
            temp1 = title[i][k]
            temp2 = title[size_of_window - 1 - k][i]
            temp3 = title[size_of_window- 1 - i][size_of_window - 1 - k]
            temp4 = title[k][size_of_window- 1 - i]

            title[size_of_window- 1 - k][i] = temp1
            title[size_of_window - 1 - i][size_of_window - 1 - k] = temp2
            title[k][size_of_window - 1 - i] = temp3
            title[i][k] = temp4

def game_over():
    global score

    window.fill(get_colors(0))

    label = font.render("Gameover",1,(255,255,255))
    label2 =font.render("Score : "+str(score),1,(255,255,255))
    label3 = font.render("Press 'R' to play again",1,(255,255,255))

    window.blit(label,(50,100))
    window.blit(label2,(50,200))
    window.blit(label3,(50,300))

def reset():
    global score
    global title

    score= 0
    window.fill(get_colors(0))
    title = [[0 for _ in range(0,size_of_window)] for _ in range(0,size_of_window) ]
    main()

def save():
    f = open("savedata","w")

    line1 = " ".join([str(title[floor(x/size_of_window)][x%size_of_window]) for x in range(0,size_of_window ** 2)])
    f.write(line1+"\n")
    f.write(str(size_of_window)+"\n")
    f.write(str(score))
    f.close

def undo():
    if len(undo_mat) > 0:
        mat = undo_mat.pop()

        for i in range(0,size_of_window ** 2):
            title[floor(i/size_of_window)][i%size_of_window] = mat[i]
        global score
        score = mat[size_of_window ** 2]

        print_matrix()

def load():
    global score
    global size_of_window

    f = open("savedata","r")

    mat = (f.readline()).split(' ',size_of_window ** 2)
    size_of_window = int(f.readline())
    score= int(f.readline())

    for i in range(0,size_of_window ** 2):
        title[floor(i/size_of_window)][i%size_of_window] = int(mat[i])

    f.close()

    main(True)

def is_arrow(k):
    return (k == pg.K_UP or k == pg.K_DOWN or k == pg.K_LEFT or k == pg.K_RIGHT)

def get_rotations(k):
    if k == pg.K_UP:
        return 0
    elif k == pg.K_DOWN:
        return 2 
    elif k == pg.K_LEFT:
        return 1
    elif k == pg.K_RIGHT:
        return 3

main()