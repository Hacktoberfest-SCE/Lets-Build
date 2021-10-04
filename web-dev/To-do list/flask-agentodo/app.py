from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

db = SQLAlchemy(app)


class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    time = db.Column(db.String(8))
    checked = db.Column(db.Integer)


@app.route('/')
def index():
    task_list = Task.query.all()
    return render_template("base.html", task_list=task_list, size=len(task_list))


@app.route("/add", methods=["POST"])
def add():
    title = request.form.get("title")
    time = datetime.today().strftime("%I:%M %p")
    if time[0] == '0':
        time = time[1:]
    new_task = Task(title=title, time=time, checked=0)
    db.session.add(new_task)
    db.session.commit()
    return redirect(url_for("index"))


@app.route("/delete/<int:task_id>")
def delete(task_id):
    task = Task.query.filter_by(id=task_id).first()
    db.session.delete(task)
    db.session.commit()
    return redirect(url_for("index"))


@app.route("/delete_all")
def delete_all():
    task = Task.query.delete()
    db.session.commit()
    return redirect(url_for("index"))


@app.route("/toggle/<int:task_id>", methods=["POST"])
def toggle(task_id):
    task = Task.query.filter_by(id=task_id).first()
    task.checked = 1 - task.checked
    db.session.commit()
    return redirect(url_for("index"))


if __name__ == "__main__":
    db.create_all()
    app.run(debug=True)
