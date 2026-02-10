import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const EMAIL = process.env.OFFICIAL_EMAIL;

const isPrime = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const fibonacciSeries = (n) => {
  if (n < 0) return [];
  const res = [0];
  if (n === 0) return res;
  res.push(1);
  for (let i = 2; i < n; i++) {
    res.push(res[i - 1] + res[i - 2]);
  }
  return res.slice(0, n);
};

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
const hcfArray = (arr) => arr.reduce((a, b) => gcd(a, b));
const lcm = (a, b) => (a * b) / gcd(a, b);
const lcmArray = (arr) => arr.reduce((a, b) => lcm(a, b));

app.get("/health", (req, res) => {
  res.status(200).json({
    is_success: true,
    official_email: EMAIL,
  });
});

app.post("/bfhl", async (req, res) => {
  try {
    const body = req.body;
    const keys = Object.keys(body);

    if (keys.length !== 1) {
      return res.status(400).json({ is_success: false });
    }

    const key = keys[0];
    let data;

    switch (key) {
      case "fibonacci":
        data = fibonacciSeries(body.fibonacci);
        break;

      case "prime":
        data = body.prime.filter((n) => isPrime(n));
        break;

      case "lcm":
        data = lcmArray(body.lcm);
        break;

      case "hcf":
        data = hcfArray(body.hcf);
        break;

      case "AI":
        const aiRes = await axios.post(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
          {
            contents: [
              { role:"model",parts:[{ text: "Provide a one word answer to the user query"}]},
              { role:"user",parts: [{ text: body.AI }] }
            ]
          }
        );
        data = aiRes.data.candidates[0].content.parts[0].text
          .trim()
          .split(" ")[0];
        break;

      default:
        return res.status(400).json({ is_success: false });
    }

    res.status(200).json({
      is_success: true,
      official_email: EMAIL,
      data,
    });
  } catch {
    res.status(500).json({ is_success: false });
  }
});

app.listen(process.env.PORT || 3000);
