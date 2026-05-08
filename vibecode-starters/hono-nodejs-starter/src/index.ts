import { serve } from "@hono/node-server";
import { Hono } from "hono";
import getPort from "get-port";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

const port = await getPort();

console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});