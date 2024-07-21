import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { SupportCard } from "./components/SupportCard/SupportCard";

// Mock the Dashboard and SupportCard components
jest.mock("./components/Dashboard/Dashboard", () => ({
  Dashboard: () => <div>Mocked Dashboard Component</div>,
}));

jest.mock("./components/SupportCard/SupportCard", () => ({
  SupportCard: () => <div>Mocked SupportCard Component</div>,
}));

describe("App component", () => {
  test("renders account overview header", () => {
    render(<App />);
    expect(screen.getByText("Account Overview")).toBeInTheDocument();
  });

  test("renders SupportCard component", () => {
    render(<App />);
    expect(
      screen.getByText("Mocked SupportCard Component")
    ).toBeInTheDocument();
  });

  test("renders Dashboard component", () => {
    render(<App />);
    expect(screen.getByText("Mocked Dashboard Component")).toBeInTheDocument();
  });
});
