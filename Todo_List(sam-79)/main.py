
from kivymd.app import MDApp
from kivy.lang import Builder
from kivymd.uix.datatables import MDDataTable
from kivymd.uix.snackbar import Snackbar
from kivy.metrics import dp
import os
import json
from datetime import datetime

"""
MDGridLayout:
        size_hint_y: .2
        cols:2
        padding: (20,10)

        MDLabel:
            id: daylabel
            color: hex('#4184e7fd')
            font_style:'H5'
            bold: True
            size_hint_y:.7
            padding: (20,10)
            
        
        MDLabel:
            id: totaltask
            halign:'right'
            padding: (20,10)
            canvas.before:
                Color:
                    rgba:.1,.2,.3,.5
                Rectangle:
                    size:self.size
                    pos:self.pos

        MDLabel:
            id: monthlabel
            size_hint_y:.7
            padding: (20,10)
        
        
        MDFillRoundFlatButton:
            text: "Clear Tasks"
            text_color: 1,1,1,1
            padding: (20,10)
            canvas.before:
                Color:
                    rgba:.1,.92,.3,.5
                Rectangle:
                    size:self.size
                    pos:self.pos
                    """

Layout = """

#: import hex kivy.utils.get_color_from_hex

MDBoxLayout:
	orientation:'vertical'
	adaptive_size:False
    MDBoxLayout:
        size_hint_y: .2
        padding:10
        MDFloatLayout:
            MDLabel:
                id: daylabel
                color: hex('#4184e7fd')
                font_style:'H5'
                bold: True
                valign:"bottom"
                size_hint:.7,.7
                pos_hint:{'x':0,'top':1}

                
            MDLabel:
                id: monthlabel
                size_hint:.7,.3
                valign:"top"
                text_color:0,0,0,.5
                pos_hint:{'x':0,'y':.0}

                
                
            MDLabel:
                id: totaltask
                size_hint:.3,.5
                valign:"bottom"
                halign:'right'
                text_color:0,0,0,.5
                pos_hint:{'right':1,'top':1}

            
            MDRaisedButton:
                text: "Clear Tasks"
                text_color: 1,1,1,1
                font_size:sp(20)
                radius:dp(5)
                size_hint:.3,.5
                pos_hint:{'right':1,'y':0}



    MDBoxLayout:
        orientation : 'vertical'
        size_hint_y: .1
        canvas.before:
            Color:
                rgb: hex('#e7e7e7')
            Rectangle:
                size:self.size
                pos: self.pos
        MDTextFieldRound:
            icon_left:'plus'
            hint_text: 'Type your task'
            size_hint: 1,1
            multiline: False
            on_text_validate: app.add_task(self.text)

    MDBoxLayout:
        orientation : 'vertical'
        id:tasklist

"""


class App(MDApp):
    daylabel = datetime.today().strftime("%A, %dth")
    monthlabel = datetime.today().strftime("%B")
    taskDict = dict()

    def build(self):
        if(not os.path.isdir(os.path.expanduser('~')+'\\todolist')):
            os.mkdir(os.path.expanduser('~')+'\\todolist')
        os.chdir(os.path.expanduser('~')+'\\todolist')
        self.applayout = Builder.load_string(Layout)
        self.applayout.ids.daylabel.text = self.daylabel
        self.applayout.ids.monthlabel.text = self.monthlabel

        self.data_tables = MDDataTable(
            # MDDataTable allows the use of size_hint
            size_hint=(1, 0.7),
            check=True,
            column_data=[
                ("Task",dp(50)),
                ("Added On",dp(30)),
            ],
            elevation=2,
            use_pagination=True,
            rows_num=10
        )
        if(os.path.isfile('todo.json')):
            with open('todo.json', 'r') as r:
                self.taskDict = json.loads(r.read())
                r.close()
        else:
            with open('todo.json', 'w') as w:
                w.write(json.dumps({}))
                w.close()

        try:
            if(len(self.taskDict) != 0):
                for i in self.taskDict:
                    if(self.taskDict[i]['done']):
                        # when task is done checkbox is selected otherwise not
                        pass
                    self.data_tables.row_data.append(
                        (i, self.taskDict[i]['time']))

        except Exception as exp:
            self.show_snack(exp)

        # self.data_tables.bind(on_row_press=self.on_row_press)
        self.data_tables.bind(on_check_press=self.on_check_press)
        self.applayout.ids.tasklist.add_widget(self.data_tables)
        self.applayout.ids.totaltask.text = f"{len(self.taskDict)} Tasks"

        # asyncio.run(self.update_datatable())

        return self.applayout

    def add_task(self, task: str):

        reader = open('todo.json', 'r')
        try:
            file_data = json.loads(reader.read())
            file_data.update({
                task: {
                    "time": datetime.today().strftime("%I:%M %p"),
                    "done": False
                }
            })
            self.taskDict = file_data
        except:
            file_data = {
                task: {
                    "time": datetime.today().strftime("%I:%M %p"),
                    "done": False
                }
            }
        reader.close()

        writer = open('todo.json', 'w')
        writer.write(json.dumps(file_data, indent=4))
        writer.close()

        self.show_snack(f"{task} Added")
        self.data_tables.row_data.append(
            (task, datetime.today().strftime("%I:%M %p")))
        self.taskDict.update({
            task: {
                "time": datetime.today().strftime("%I:%M %p"),
                "done": False
            }
        })
        self.applayout.ids.totaltask.text = f"{len(self.taskDict)} Tasks"

    def on_check_press(self, *args):
        task = args[1][0]
        with open('todo.json', 'w') as w:
            self.taskDict[task]['done'] = not self.taskDict[task]['done']
            w.write(json.dumps(self.taskDict))
            w.close()

    def show_snack(self, msg: str):
        self.snackbar = Snackbar(text=str(msg))
        self.snackbar.open()


if(__name__ == '__main__'):
    App().run()
