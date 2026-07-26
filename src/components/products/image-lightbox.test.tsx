import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ImageLightbox } from "./image-lightbox";

const photos = ["/images/products/one.jpg", "/images/products/two.jpg", "/images/products/three.jpg"];

describe("ImageLightbox", () => {
  it("renders as a dialog", () => {
    render(<ImageLightbox photos={photos} alt="Тест" index={0} onClose={vi.fn()} onNavigate={vi.fn()} />);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("calls onClose when the close button is clicked", () => {
    const onClose = vi.fn();
    render(<ImageLightbox photos={photos} alt="Тест" index={0} onClose={onClose} onNavigate={vi.fn()} />);
    fireEvent.click(screen.getByRole("button", { name: /Затвори/ }));
    expect(onClose).toHaveBeenCalledOnce();
  });

  it("calls onClose when the backdrop is clicked", () => {
    const onClose = vi.fn();
    render(<ImageLightbox photos={photos} alt="Тест" index={0} onClose={onClose} onNavigate={vi.fn()} />);
    fireEvent.click(screen.getByRole("dialog"));
    expect(onClose).toHaveBeenCalledOnce();
  });

  it("navigates to the next and previous photo", () => {
    const onNavigate = vi.fn();
    render(<ImageLightbox photos={photos} alt="Тест" index={1} onClose={vi.fn()} onNavigate={onNavigate} />);
    fireEvent.click(screen.getByRole("button", { name: /Следваща снимка/ }));
    expect(onNavigate).toHaveBeenCalledWith(2);
    fireEvent.click(screen.getByRole("button", { name: /Предишна снимка/ }));
    expect(onNavigate).toHaveBeenCalledWith(0);
  });

  it("does not render navigation arrows for a single photo", () => {
    render(
      <ImageLightbox photos={[photos[0]]} alt="Тест" index={0} onClose={vi.fn()} onNavigate={vi.fn()} />
    );
    expect(screen.queryByRole("button", { name: /Следваща снимка/ })).toBeNull();
    expect(screen.queryByRole("button", { name: /Предишна снимка/ })).toBeNull();
  });

  it("closes on Escape and navigates on arrow keys", () => {
    const onClose = vi.fn();
    const onNavigate = vi.fn();
    render(<ImageLightbox photos={photos} alt="Тест" index={1} onClose={onClose} onNavigate={onNavigate} />);

    fireEvent.keyDown(document, { key: "ArrowRight" });
    expect(onNavigate).toHaveBeenCalledWith(2);

    fireEvent.keyDown(document, { key: "ArrowLeft" });
    expect(onNavigate).toHaveBeenCalledWith(0);

    fireEvent.keyDown(document, { key: "Escape" });
    expect(onClose).toHaveBeenCalledOnce();
  });
});
