import os
import json

class Filters:
    def __init__(self,Path):
        self.Path = Path

    def remainder(self):
       # print(self.Path)

        with open('../../filters.json', 'r', encoding='utf-8') as f:  # открыли файл с данными
            self.filters = json.load(f)  # загнали все, что получилось в переменную

        print(os.listdir('../../public\Articles') )
        self.PathFilter = [self.Path.split('/')[-3],self.Path.split('/')[-2] ]
        print(self.PathFilter[0])
        print(self.filters["Problems"]['DevOps']['Docker'] )
        self.FindFilter()
        print(self.FinalFilter)


    def FindFilter(self):
        if self.PathFilter[0] in self.filters["Language"]:
            self.FinalFilter = self.filters["Language"][self.PathFilter[0]][self.PathFilter[1]]
        elif self.PathFilter[0] in self.filters["Problems"]:
            self.FinalFilter = self.filters["Problems"][self.PathFilter[0]][self.PathFilter[1]]



p = Filters("http://localhost:5000/articles/DevOps/Docker/test_article")
p.remainder()