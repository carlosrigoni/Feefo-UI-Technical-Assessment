import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Dashboard } from "./Dashboard";
import { act } from "react-dom/test-utils";
import { axe } from "jest-axe";

// Mock FontAwesomeIcon since it's not crucial to the test
jest.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: () => <span>Icon</span>,
}));

jest.mock("react-tooltip", () => ({
  Tooltip: ({ children }) => <div>{children}</div>,
}));

describe("Dashboard component", () => {
  const uploads = 10;
  const linesAdded = 20;
  const linesSaved = 30;

  test("renders Sales header", () => {
    render(
      <Dashboard
        uploads={uploads}
        linesAdded={linesAdded}
        linesSaved={linesSaved}
      />
    );
    expect(screen.getByText("Sales")).toBeInTheDocument();
  });

  test("displays uploads and lines added", () => {
    render(
      <Dashboard
        uploads={uploads}
        linesAdded={linesAdded}
        linesSaved={linesSaved}
      />
    );
    expect(screen.getByText(/You had/i)).toBeInTheDocument();
    expect(screen.getByText("10 uploads")).toBeInTheDocument();
    expect(screen.getByText("20")).toBeInTheDocument();
  });

  test("displays correct upload success percentage", () => {
    render(
      <Dashboard
        uploads={uploads}
        linesAdded={linesAdded}
        linesSaved={linesSaved}
      />
    );
    expect(screen.getByText(`${uploads}%`)).toBeInTheDocument();
    expect(screen.getByText("UPLOAD SUCCESS")).toBeInTheDocument();
  });

  test("displays correct lines saved percentage", () => {
    render(
      <Dashboard
        uploads={uploads}
        linesAdded={linesAdded}
        linesSaved={linesSaved}
      />
    );
    expect(screen.getByText(`${linesSaved}%`)).toBeInTheDocument();
    expect(screen.getByText("LINES SAVED")).toBeInTheDocument();
  });

  test("displays info icon", () => {
    render(
      <Dashboard
        uploads={uploads}
        linesAdded={linesAdded}
        linesSaved={linesSaved}
      />
    );
    const icons = screen.getAllByText("Icon");
    expect(icons).toHaveLength(2);
  });

  test("displays tooltip with additional sales information", () => {
    render(
      <Dashboard
        uploads={uploads}
        linesAdded={linesAdded}
        linesSaved={linesSaved}
      />
    );
    expect(
      screen.getByText("Additional sales information")
    ).toBeInTheDocument();
  });

  // Additional tests

  test("matches snapshot", () => {
    const { asFragment } = render(
      <Dashboard
        uploads={uploads}
        linesAdded={linesAdded}
        linesSaved={linesSaved}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders correctly with zero values", () => {
    render(<Dashboard uploads={0} linesAdded={0} linesSaved={0} />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  test("renders correctly with negative values", () => {
    render(<Dashboard uploads={-10} linesAdded={-20} linesSaved={-30} />);
    expect(screen.getByText("-10%")).toBeInTheDocument();
    expect(screen.getByText("-20")).toBeInTheDocument();
    expect(screen.getByText("-30%")).toBeInTheDocument();
  });

  test("renders correctly with large values", () => {
    render(
      <Dashboard uploads={1000000} linesAdded={2000000} linesSaved={3000000} />
    );
    expect(screen.getByText("1000000%")).toBeInTheDocument();
    expect(screen.getByText("2000000")).toBeInTheDocument();
    expect(screen.getByText("3000000%")).toBeInTheDocument();
  });

  test("is accessible", async () => {
    const { container } = render(
      <Dashboard
        uploads={uploads}
        linesAdded={linesAdded}
        linesSaved={linesSaved}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
