import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("Test on load, photo lists and photos are visible", async () => {
  render(<App />);

  await waitFor(() => screen.getByRole("heading"));
  expect(screen.getByRole("heading")).toHaveTextContent("Photo List");
  expect(screen.getByRole("img")).toBeVisible();
});

test("Test loading full-size image", async () => {
    render(<App />);
    const imgCaption = /accusamus beatae ad facilis cum similique qui sunt/i;
  
    await waitFor(() => screen.getByRole("img", {name: imgCaption,}));
    
    fireEvent.click(screen.getByRole("img", {name: imgCaption,}));

    expect(screen.getByText(imgCaption)).toBeVisible();
    expect(screen.getByRole("button", { name: /go back/i })).toBeVisible();
  });

test("Test Albums page rendering", async () => {
  render(<App />);

  fireEvent.click(screen.getByRole("link", { name: /albums/i }));
  await waitFor(() => screen.getByRole("button", { name: /album 2/i }));
  expect(screen.getByRole("heading")).toHaveTextContent("Album List");
  expect(screen.getByRole("button", { name: /album 10/i })).toBeVisible();
});

test("Test User page rendering", async () => {
  render(<App />);

  fireEvent.click(screen.getByTestId("AccountCircleIcon"));
  await waitFor(() => screen.getByText(/bret/i));
  expect(screen.getByText(/username/i)).toBeVisible();
  expect(screen.getByText(/hildegard.org/i)).toBeVisible();
});


