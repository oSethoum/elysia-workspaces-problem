import { Elysia, t } from "elysia";

const app = new Elysia()
    .get("/", () => "Hello Elysia")
    .get("/api", () => "api", { response: { 200: t.String() } })
    .listen(4000);

export type App = typeof app;

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
