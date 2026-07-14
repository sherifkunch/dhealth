import { describe, it, expect } from "vitest";
import { jobs, getActiveJobs } from "../jobs";

describe("jobs data", () => {
  it("has at least one job", () => {
    expect(jobs.length).toBeGreaterThan(0);
  });

  it("every job has required fields", () => {
    for (const job of jobs) {
      expect(job.id).toBeTruthy();
      expect(job.title).toBeTruthy();
      expect(job.description).toBeTruthy();
      expect(Array.isArray(job.requirements)).toBe(true);
      expect(job.requirements.length).toBeGreaterThan(0);
      expect(typeof job.active).toBe("boolean");
    }
  });

  it("every requirement is a non-empty string", () => {
    for (const job of jobs) {
      for (const req of job.requirements) {
        expect(typeof req).toBe("string");
        expect(req.trim().length).toBeGreaterThan(0);
      }
    }
  });

  it("no duplicate ids", () => {
    const ids = jobs.map((j) => j.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe("getActiveJobs", () => {
  it("returns only active jobs", () => {
    for (const job of getActiveJobs()) {
      expect(job.active).toBe(true);
    }
  });

  it("returns at least one active job", () => {
    expect(getActiveJobs().length).toBeGreaterThan(0);
  });
});
