# **ai-toolbox** - **G**enerative **A**I and **M**achine Learning **O**n **T**he **H**PC **A**t **Q**UT

## Building

### Setup

```
python3 -m venv venv
source venv/bin/activate
pip install -r ai-toolbox/requirements.txt
```

### Build

```
jupyter-book build ai-toolbox
```

```
sphinx-autobuild ai-toolbox _build/html -b html
```