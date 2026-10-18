import { Hono } from "hono";

// Static pages are served from ./dist/client by the assets binding; the Worker only
// handles routes no asset matches. Add API routes here when the site needs them.
const app = new Hono<{ Bindings: Env }>();

export default app;
