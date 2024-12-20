import { edenFetch } from "@elysiajs/eden";
import { App } from "backend";

export const api = edenFetch<App>("http://localhost:4000");

//FIXME: data is of type any
const { data } = await api("/api", { method: "GET" });
