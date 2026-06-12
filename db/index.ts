import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";

export function getDb() {
  // On Vercel, Cloudflare D1 bindings are not available.
  // The application falls back to in-memory storage via course-store.ts.
  // If a real database is needed on Vercel, switch to a Vercel-compatible
  // database (e.g., Vercel Postgres, PlanetScale, Turso).
  throw new Error(
    "Cloudflare D1 binding `DB` is unavailable in this deployment environment. The app uses in-memory storage as a fallback."
  );
}
