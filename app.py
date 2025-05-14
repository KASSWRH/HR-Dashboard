import os
import logging
from flask import Flask, render_template, request, redirect, url_for, flash

# Setup logging
logging.basicConfig(level=logging.DEBUG)

# create the app
app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "hr_dashboard_secret_key")

# Mock data for demonstration purposes
departments = {
    "HR": 25,
    "Finance": 40,
    "Engineering": 150,
    "Sales": 60,
    "Marketing": 30,
    "Support": 45,
    "IT": 50
}

nationality_data = {
    "Foreigners": 60,
    "Nationals": 38,
    "Robots": 2
}

salary_data = {
    "this_month": "$58,356",
    "last_month": "$48,356",
    "this_month_value": 58356,
    "last_month_value": 48356
}

employees = [
    {
        "id": 1,
        "name": "John Smith",
        "department": "Engineering",
        "position": "Senior Developer",
        "nationality": "Foreigners",
        "performance": 85,
        "attendance": 98,
        "tasks_completed": 24,
        "tasks_pending": 3,
        "salary": 4500
    },
    {
        "id": 2,
        "name": "Sarah Johnson",
        "department": "Marketing",
        "position": "Marketing Manager",
        "nationality": "Nationals",
        "performance": 92,
        "attendance": 100,
        "tasks_completed": 18,
        "tasks_pending": 2,
        "salary": 5200
    },
    {
        "id": 3,
        "name": "Ahmed Hassan",
        "department": "Sales",
        "position": "Sales Representative",
        "nationality": "Nationals",
        "performance": 78,
        "attendance": 95,
        "tasks_completed": 30,
        "tasks_pending": 5,
        "salary": 3800
    },
    {
        "id": 4,
        "name": "RB-2000",
        "department": "Support",
        "position": "Customer Support Agent",
        "nationality": "Robots",
        "performance": 99,
        "attendance": 100,
        "tasks_completed": 150,
        "tasks_pending": 0,
        "salary": 0
    }
]

@app.route("/")
def index():
    return render_template("index.html", 
                          departments=departments, 
                          nationality_data=nationality_data,
                          salary_data=salary_data,
                          employees=employees,
                          active_page="dashboard")

@app.route("/workforce")
def workforce():
    return render_template("workforce.html", 
                          departments=departments, 
                          nationality_data=nationality_data,
                          salary_data=salary_data,
                          employees=employees,
                          active_page="workforce")

@app.route("/recruitment")
def recruitment():
    return render_template("recruitment.html", 
                          departments=departments, 
                          salary_data=salary_data,
                          active_page="recruitment")

@app.route("/attendance")
def attendance():
    return render_template("attendance.html", 
                          employees=employees,
                          departments=departments,
                          salary_data=salary_data,
                          active_page="attendance")

@app.route("/performance")
def performance():
    return render_template("performance.html", 
                          employees=employees,
                          salary_data=salary_data,
                          active_page="performance")

@app.route("/payroll")
def payroll():
    return render_template("payroll.html", 
                          employees=employees,
                          departments=departments,
                          salary_data=salary_data,
                          active_page="payroll")

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
