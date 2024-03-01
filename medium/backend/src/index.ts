import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from '@prisma/extension-accelerate';
import { decode, sign, verify } from "hono/jwt";


const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
		SECRET_KEY: string
	}
}>();

app.post("/api/v1/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());
 	
  console.log("########################################");
  const body = await c.req.json();
  const user = await prisma.user.create({
	data: {
		email: body.email,
		password: body.password,
	},
  })
//   return c.text("hello");
  const token = await sign({id: user.id}, c.env.SECRET_KEY);
  
  return c.json({
	jwt: token
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
	