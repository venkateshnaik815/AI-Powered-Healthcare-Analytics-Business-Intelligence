from fastapi import FastAPI

app = FastAPI(title="AI Healthcare Analytics API", version="1.0.0")

@app.get("/")
def read_root():
    return {"message": "Welcome to AI Healthcare Analytics API"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}
