import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { SupportCard } from "./SupportCard";

// Mock FontAwesomeIcon since it's not crucial to the test
jest.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: () => <span>Icon</span>,
}));

describe("SupportCard component", () => {
  test("renders support contact header", () => {
    render(<SupportCard />);
    expect(screen.getByText("YOUR FEEFO SUPPORT CONTACT")).toBeInTheDocument();
  });

  test("renders support initial", () => {
    render(<SupportCard />);
    expect(screen.getByText("S")).toBeInTheDocument();
  });

  test("renders support title", () => {
    render(<SupportCard />);
    expect(screen.getByText("Support")).toBeInTheDocument();
  });

  test("renders support email", () => {
    render(<SupportCard />);
    expect(screen.getByText("support@feefo.com")).toBeInTheDocument();
  });

  test("renders support phone number", () => {
    render(<SupportCard />);
    expect(screen.getByText("020 3362 4208")).toBeInTheDocument();
  });

  test("renders envelope icon", () => {
    render(<SupportCard />);
    expect(screen.getByText("Icon")).toBeInTheDocument();
  });
});
