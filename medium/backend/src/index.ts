import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from '@prisma/extension-accelerate';

const app = new Hono();

app.post("/api/v1/signup", (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: env.DATABASE_URL
  }).$extends(withAccelerate());
  
  return c.json({
		message: "Singup",
	});
});

app.post("/api/v1/signin", (c) => {
	return c.json({
		message: "SingIn",
	});
});

app.post("/api/v1/blog", (c) => {
	return c.json({
		message: "Post Blog",
	});
});

app.put("/api/v1/blog", (c) => {
	return c.json({
		message: "Get blog",
	});
});

app.get("/api/v1/:id", (c) => {
	return c.json({
		message: "Get blog",
	});
});

app.get("/api/v1/blog/bulk", (c) => {
	return c.json({
		message: "Get uld blog",
	});
});

	;
	