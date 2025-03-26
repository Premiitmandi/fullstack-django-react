# Full-Stack Django + React Application

## 📌 Project Overview
This is a Full-Stack Web Application built using **Django (Django Rest Framework) + React** with **PostgreSQL** as the database. The application provides a simple interface to manage items with **CRUD operations**, filtering, and bucketing.

---

## 🛠️ Tech Stack
### **Backend (Django + DRF)**
- Django
- Django Rest Framework (DRF)
- PostgreSQL

### **Frontend (React + Axios)**
- React.js
- Axios

---

## 📁 Folder Structure
myproject
│-- backend
│   │-- myproject
│   │   ├── settings.py
│   │   ├── urls.py
│   │-- myapp
│   │   ├── models.py
│   │   ├── views.py
│   │   ├── serializers.py
│   │-- manage.py
│-- frontend
│   │-- src
│   │   ├── App.js
│   │   ├── LandingPage.js
│   │-- package.json



## 🚀 How to Run the Project

### **1️ Backend (Django) Setup**
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
python manage.py migrate
python manage.py runserver


Frontend (React) Setup
cd frontend
npm install
npm start




