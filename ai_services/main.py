from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="AIHealthAnalytics ML API")

class PredictionRequest(BaseModel):
    patient_age: int
    blood_pressure: float

@app.get("/")
def read_root():
    return {"message": "Welcome to AIHealthAnalytics ML API"}

@app.post("/api/v1/predict/readmission")
def predict_readmission(req: PredictionRequest):
    # Dummy ML logic
    risk_score = 0.85 if req.patient_age > 65 else 0.25
    return {"risk_score": risk_score, "prediction": "high" if risk_score > 0.5 else "low"}
