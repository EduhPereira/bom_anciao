import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import AddEvents from "./index";

describe("Test for AddEvents component", () => {
  it("Should add a new event when form has been submitted", async () => {
    const { getByTestId } = render(<AddEvents />);
    const nameField = (await waitFor(() =>
      getByTestId("name-field")
    )) as HTMLInputElement;
    const localField = (await waitFor(() =>
      getByTestId("local-field")
    )) as HTMLInputElement;
    const dateField = (await waitFor(() =>
      getByTestId("date-field")
    )) as HTMLInputElement;
    const hourField = (await waitFor(() =>
      getByTestId("hour-field")
    )) as HTMLInputElement;
    const durationField = (await waitFor(() =>
      getByTestId("duration-field")
    )) as HTMLInputElement;
    const describeField = (await waitFor(() =>
      getByTestId("describe-field")
    )) as HTMLInputElement;

    const newEventTest = "testing";

    fireEvent.change(nameField, { target: { value: newEventTest } });
    expect(nameField.value).toEqual(newEventTest);

    fireEvent.change(localField, { target: { value: newEventTest } });
    expect(localField.value).toEqual(newEventTest);

    fireEvent.change(dateField, { target: { value: newEventTest } });
    expect(dateField.value).toEqual(newEventTest);

    fireEvent.change(hourField, { target: { value: newEventTest } });
    expect(hourField.value).toEqual(newEventTest);

    fireEvent.change(durationField, { target: { value: newEventTest } });
    expect(durationField.value).toEqual(newEventTest);

    fireEvent.change(describeField, { target: { value: newEventTest } });
    expect(describeField.value).toEqual(newEventTest);

    const BtnNode = await waitFor(() => getByTestId("form-button"));
    fireEvent.click(BtnNode);
  });
});
