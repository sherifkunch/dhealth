import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";
import type { Review } from "@/types";

const DATA_DIR = path.join(process.cwd(), "data");
const PENDING_FILE = path.join(DATA_DIR, "reviews-pending.json");
const APPROVED_FILE = path.join(DATA_DIR, "reviews-approved.json");

type PendingReview = Review & { token: string };

async function readJson<T>(filePath: string): Promise<T[]> {
  try {
    const content = await fs.readFile(filePath, "utf-8");
    return JSON.parse(content) as T[];
  } catch {
    return [];
  }
}

async function writeJson(filePath: string, data: unknown): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
}

export async function savePendingReview(
  review: Omit<Review, "id" | "date">
): Promise<PendingReview> {
  const pending = await readJson<PendingReview>(PENDING_FILE);
  const stored: PendingReview = {
    ...review,
    id: crypto.randomUUID(),
    date: new Date().toISOString().split("T")[0],
    token: crypto.randomBytes(32).toString("hex"),
  };
  pending.push(stored);
  await writeJson(PENDING_FILE, pending);
  return stored;
}

export async function approveReview(
  id: string,
  token: string
): Promise<Review | null> {
  const pending = await readJson<PendingReview>(PENDING_FILE);
  const idx = pending.findIndex((r) => r.id === id && r.token === token);
  if (idx === -1) return null;

  const pr = pending[idx];
  pending.splice(idx, 1);
  await writeJson(PENDING_FILE, pending);

  const review: Review = {
    id: pr.id,
    name: pr.name,
    text: pr.text,
    rating: pr.rating,
    date: pr.date,
  };

  const approved = await readJson<Review>(APPROVED_FILE);
  approved.push(review);
  await writeJson(APPROVED_FILE, approved);

  return review;
}

export async function getApprovedReviews(): Promise<Review[]> {
  return readJson<Review>(APPROVED_FILE);
}
