FROM python:3.12

WORKDIR /app

EXPOSE 5050

COPY Pipfile Pipfile.lock ./

RUN pip install --no-cache-dir --upgrade pipenv
RUN pipenv requirements > requirements.txt
RUN pip install -r requirements.txt

COPY . ./

CMD ["python", "main.py"]
# CMD ["gunicorn", "--bind", "0.0.0.0:80", "api.main.py:app"]