#!/bin/bash

# Set the base directory for the backend
BACKEND_DIR="backend"

echo "Creating backend directory structure..."

# Create the directory structure
mkdir -p $BACKEND_DIR/app/routers
mkdir -p $BACKEND_DIR/app/models
mkdir -p $BACKEND_DIR/app/services

# Create initial Python files
echo "# Main entry point for FastAPI app" > $BACKEND_DIR/app/main.py
echo "# Router for PDF processing endpoints" > $BACKEND_DIR/app/routers/pdf_processing.py
echo "# Router for insights-related endpoints" > $BACKEND_DIR/app/routers/insights.py
echo "# Data model definitions" > $BACKEND_DIR/app/models/data_model.py
echo "# PDF data extraction service" > $BACKEND_DIR/app/services/pdf_extractor.py
echo "# Machine learning analysis service" > $BACKEND_DIR/app/services/ml_analysis.py

# Create requirements.txt with common dependencies
cat <<EOL > $BACKEND_DIR/requirements.txt
fastapi
uvicorn
pandas
pdfplumber
tabula-py
scikit-learn
numpy
matplotlib
EOL

echo "Backend directory structure created successfully!"
echo "Don't forget to activate your Python environment and install the dependencies:"
echo "  cd $BACKEND_DIR"
echo "  python3 -m venv env && source env/bin/activate"
echo "  pip install -r requirements.txt"
