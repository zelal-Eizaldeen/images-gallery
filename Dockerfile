FROM node:22.12.0-alpine

WORKDIR /home/node/app


COPY package.json package-lock.json ./

RUN npm install -g npm@11.0.0

COPY . ./

EXPOSE 3000


CMD ["npm", "start"]


FROM python:3.12

WORKDIR /app

EXPOSE 5050

COPY api/Pipfile api/Pipfile.lock ./

RUN pip install --upgrade pip
# RUN pip install --no-cache-dir --upgrade pipenv uvicorn
RUN pip install --no-cache-dir --upgrade pipenv 

RUN pipenv requirements  > requirements.txt
RUN pip install -r requirements.txt

COPY . ./

CMD ["python", "main.py"]
# CMD ["gunicorn", "--bind", "0.0.0.0:80", "api.main.py:app"]