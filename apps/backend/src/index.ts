import { createServer } from "http";

const PORT = process.env.PORT || 3000;

const server = createServer((req, res) => {
  res.writeHead(200);
  res.end("🚀 Backend is running with Bun + TypeScript");
});

server.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));
