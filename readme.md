## setup

1. Init venv and activate it
```bash
py -m venv venv
```

2. Install requirements into venv
```bash
py -m pip install -r requirements.txt
```
If you install any python package, you should add it to requirements, by using:
```bash
py -m pip freeze > requirements.txt
```