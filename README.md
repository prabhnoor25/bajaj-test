# BFHL REST API – Chitkara Qualifier

This repository contains a Node.js REST API implementation for **Qualifier 1 (10 Feb 2026)** conducted by **Chitkara University**.

The project exposes two public APIs:

* `POST /bfhl`
* `GET /health`

The APIs strictly follow the response structure, validation rules, and error handling guidelines mentioned in the problem statement.

---

## 🚀 Tech Stack

* Node.js
* Express.js
* Axios
* dotenv
* CORS
* Google Gemini AI API

---

## 📌 API Endpoints

### 1️⃣ Health Check

**Endpoint**

```
GET /health
```

**Response**

```json
{
  "is_success": true,
  "official_email": "prabhnoor2493.be23@chitkara.edu.in"
}
```

---

### 2️⃣ BFHL Functional API

**Endpoint**

```
POST /bfhl
```

Each request must contain **exactly one key** from the following:

| Key       | Input Type    | Output Description      |
| --------- | ------------- | ----------------------- |
| fibonacci | Integer       | Fibonacci series        |
| prime     | Integer Array | Prime numbers only      |
| lcm       | Integer Array | LCM of numbers          |
| hcf       | Integer Array | HCF of numbers          |
| AI        | String        | Single-word AI response |

---

## 📥 Request & 📤 Response Examples

### Fibonacci

**Request**

```json
{
  "fibonacci": 7
}
```

**Response**

```json
{
  "is_success": true,
  "official_email": "prabhnoor2493.be23@chitkara.edu.in",
  "data": [0,1,1,2,3,5,8]
}
```

---

### Prime

```json
{
  "prime": [2,4,7,9,11]
}
```

**Response**

```json
{
  "is_success": true,
  "official_email": "prabhnoor2493.be23@chitkara.edu.in",
  "data": [2,7,11]
}
```

---

### LCM

```json
{
  "lcm": [12,18,24]
}
```

**Response**

```json
{
  "is_success": true,
  "official_email": "prabhnoor2493.be23@chitkara.edu.in",
  "data": 72
}
```

---

### HCF

```json
{
  "hcf": [24,36,60]
}
```

**Response**

```json
{
  "is_success": true,
  "official_email": "prabhnoor2493.be23@chitkara.edu.in",
  "data": 12
}
```

---

### AI

```json
{
  "AI": "What is the capital city of Maharashtra?"
}
```

**Response**

```json
{
  "is_success": true,
  "official_email": "prabhnoor2493.be23@chitkara.edu.in",
  "data": "Mumbai"
}
```
