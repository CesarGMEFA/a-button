import { MouseEventHandler } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from ".";

describe("Componente Boton", () => {

  let button: HTMLElement;
  let buttonText: HTMLElement;
  let handleClick: MouseEventHandler<HTMLButtonElement>;

  beforeEach(() => {
    handleClick = jest.fn()
    render(<Button click={handleClick} >SEND</Button>)
    button = screen.getByRole('button', { name: /un-boton/i })
    buttonText = screen.getByText(`SEND`)
  })
  
  test("Boton dentro de un componente", () => {
    expect(button).toBeInTheDocument()
  })

  test("Boton si no esta desactivado", () => {
    expect(button).not.toBeDisabled()
  })
  
  test('Llamando onClicks con la prop click', () => {
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('Boton con texto', () => {
    expect(buttonText).toBeInTheDocument()
  })
  
  
})