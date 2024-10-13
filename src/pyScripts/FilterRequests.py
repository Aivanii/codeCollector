import os
import json

class Filters:
    def __init__(self,Path):
        self.Path = Path

    def remainder(self):
       # print(self.Path)

        print(os.listdir('../../public\Articles') )
p = Filters(123)
p.remainder()