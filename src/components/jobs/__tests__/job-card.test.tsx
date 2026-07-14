import { describe, it, expect, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { JobCard } from "../job-card";
import type { JobOffer } from "@/types";

afterEach(cleanup);

const mockJob: JobOffer = {
  id: "kineziterapevt",
  title: "Кинезитерапевт",
  description: "Тестово описание на позицията.",
  requirements: [
    "Изискване едно",
    "Изискване две",
    "Изискване три",
    "Изискване четири",
  ],
  active: true,
};

const mockJobWithNote: JobOffer = {
  id: "pilates-instructor",
  title: "Пилатес инструктор",
  note: "реформър е предимство",
  description: "Описание за пилатес инструктор.",
  requirements: ["Сертификат", "Опит"],
  active: true,
};

describe("JobCard", () => {
  it("renders the job title", () => {
    render(<JobCard job={mockJob} />);
    expect(screen.getAllByText("Кинезитерапевт").length).toBeGreaterThan(0);
  });

  it("renders the description", () => {
    render(<JobCard job={mockJob} />);
    expect(screen.getAllByText("Тестово описание на позицията.").length).toBeGreaterThan(0);
  });

  it("renders the Отворено badge", () => {
    render(<JobCard job={mockJob} />);
    expect(screen.getAllByText("Отворено").length).toBeGreaterThan(0);
  });

  it("shows only first 3 requirements initially when there are more", () => {
    render(<JobCard job={mockJob} />);
    expect(screen.getAllByText("Изискване едно").length).toBeGreaterThan(0);
    expect(screen.queryByText("Изискване четири")).toBeNull();
  });

  it("expands to show all requirements on toggle click", () => {
    render(<JobCard job={mockJob} />);
    fireEvent.click(screen.getByText(/Виж всички/));
    expect(screen.getAllByText("Изискване четири").length).toBeGreaterThan(0);
  });

  it("collapses requirements again on second click", () => {
    render(<JobCard job={mockJob} />);
    fireEvent.click(screen.getByText(/Виж всички/));
    fireEvent.click(screen.getByText(/По-малко/));
    expect(screen.queryByText("Изискване четири")).toBeNull();
  });

  it("does not show expand toggle when requirements fit in preview", () => {
    render(<JobCard job={mockJobWithNote} />);
    expect(screen.queryByText(/Виж всички/)).toBeNull();
  });

  it("renders the note when provided", () => {
    render(<JobCard job={mockJobWithNote} />);
    expect(screen.getAllByText("реформър е предимство").length).toBeGreaterThan(0);
  });

  it("renders a mailto link to apply", () => {
    const { container } = render(<JobCard job={mockJob} />);
    const link = container.querySelector('a[href="mailto:dhealth.bg@gmail.com"]');
    expect(link).not.toBeNull();
  });
});
