import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
import { createBlogInput, updateBlogInput } from "@abhiraj860/medium-blog";

export const blogRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string;
		JWT_SECRET: string;
	};
	Variables: {
		userId: string;
	};
}>();

blogRouter.use("/*", async (c, next) => {
	const authHeader = c.req.header("authorization") || "";
	try {
        const user = await verify(authHeader, c.env.JWT_SECRET);
        if (user) {
            c.set("userId", user.id);
            await next();
        } else {
            c.status(403);
            return c.json({
                message: "You are not logged in",
            });
        }
    } catch(e) {
        c.status(403);
        return c.json({
            message: "You are not logged in"
        });
    }
});

blogRouter.post("/", async (c) => {
	const body = await c.req.json();

	const { success } = createBlogInput.safeParse(body);
	if(!success) {
		c.status(411);
		return c.json({
			message: 'Inputs are not correct'
		});
	}
	const authorId = c.get("userId");
	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate());

	console.log("authorId", authorId);
	const blog = await prisma.blog.create({
		data: {
			title: body.title,
			content: body.content,
			authorId: Number(authorId),
		},
	});
	return c.json({
		id: blog.id,
	});
});

blogRouter.put("/", async (c) => {
	const body = await c.req.json();

	const { success } = updateBlogInput.safeParse(body);
	if(!success) {
		c.status(411);
		return c.json({
			message: "Inputs are incorrect"
		});
	}

	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate());

	const blog = await prisma.blog.update({
		where: {
			id: body.id,
		},
		data: {
			title: body.title,
			content: body.content,
		},
	});
	return c.json({
		id: blog.id,
	});
});

// Todo : pagination done
blogRouter.get("/bulk", async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate());
	const blogs = await prisma.blog.findMany();

	return c.json({
		blogs,
	});
});

blogRouter.get("/:id", async (c) => {
	const id = await c.req.param("id");
	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate());

	try {
		const blog = await prisma.blog.findFirst({
			where: {
				id: Number(id),
			},
		});
		return c.json({
			blog,
		});
	} catch (error) {
		c.status(411); // series in 400
		return c.json({
			message: "Error while fetching blog post",
		});
	}
});