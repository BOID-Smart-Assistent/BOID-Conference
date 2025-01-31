FROM python:3.11

WORKDIR /app

COPY ./requirements.txt /app/requirements.txt
COPY ./.env /app/.env

# Install dependencies
RUN pip install --no-cache-dir setuptools
RUN pip install --no-cache-dir -r /app/requirements.txt

# Copy the rest of the application code
COPY . /app

# Default command to run the application
CMD ["python", "main.py"]
