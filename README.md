# Pomofocus

Pomofocus is a productivity app built with FastAPI and ReactJs.

## Getting Started

These instructions will help you set up and run the Pomofocus app locally.

### Prerequisites

Make sure you have the following installed:

- Python 3 


### Installation

1. Clone the repository:

```
git clone https://github.com/naiyoma/Pomofocus.git
```

### To Set up The Back-end

```
cd backend
```

```
python -m venv venv
```

```
source venv/bin/activate or (Windows) "venv\Scripts\activate"
```

```
pip install -r requirements.txt
```

#### Run the FastAPI server within venv:

```
uvicorn main:app --reload
```


### Running the Frontend

```
cd ../frontend
```

```
npm install
```

```
cd pomodoro-app
```

```
npm start
```
### If error "Cannot find module 'axios'"

```
npm install axios --save
```
### Running Backend and Frontend with Powershell
#### Note: Assume you are in Pomofocus root

Split Terminals (Ctrl+Shift+S)

Left Terminal:
```
.\runbackend.ps1
```

Right Terminal:
```
.\runfrontend.ps1
```


#### To exit servers without closing terminals:

Left Terminal:
Ctrl+C (returns to venv)
```
deactivate (deactivates the venv)
```

Right Terminal:
Press Ctrl+C
Press Y
