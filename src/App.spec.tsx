import { cleanup, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { App } from "./App";

describe("App", () => {
  beforeEach(() => {
    cleanup();
  });

  it.skip("should login", () => {
    render(<App />);

    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
  });
});
