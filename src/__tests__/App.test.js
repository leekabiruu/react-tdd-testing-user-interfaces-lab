// src/__tests__/App.test.js
import { render, screen } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom";

describe("Portfolio App", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    const topLevelHeading = screen.getByRole("heading", {
      name: /hi, i'm/i,
      level: 1,
    });

    expect(topLevelHeading).toBeInTheDocument();
  });

  test("displays an image with correct alt text", () => {
    const image = screen.getByRole("img", {
      name: /profile photo of john doe/i,
    });

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "profile.jpg");
  });

  test("displays a second-level heading with the text 'About Me'", () => {
    const aboutHeading = screen.getByRole("heading", {
      name: /about me/i,
      level: 2,
    });

    expect(aboutHeading).toBeInTheDocument();
  });

  test("displays a paragraph for biography", () => {
    const bio = screen.getByText(
      /passionate web developer with expertise in react/i
    );
    expect(bio).toBeInTheDocument();
    expect(bio.tagName).toBe("P");
    expect(bio).toHaveClass("bio");
  });

  test("displays GitHub link with correct URL", () => {
    const githubLink = screen.getByRole("link", {
      name: /github/i,
    });

    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", "https://github.com/johndoe");
    expect(githubLink).toHaveAttribute("aria-label", "GitHub");
  });

  test("displays LinkedIn link with correct URL", () => {
    const linkedinLink = screen.getByRole("link", {
      name: /linkedin/i,
    });

    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://linkedin.com/in/johndoe"
    );
    expect(linkedinLink).toHaveAttribute("aria-label", "LinkedIn");
  });

  test("external links open in new tab", () => {
    const githubLink = screen.getByRole("link", { name: /github/i });
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });

    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");

    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});