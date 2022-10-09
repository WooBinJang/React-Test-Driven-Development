import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("카운터", () => {
  it("카운터 기본값 0", () => {
    render(<App />);

    // screen object를 이용해서 원하는 엘레멘트에 접근(접근할 때 ID로)
    const isZero = screen.getByTestId("counter");

    // id가 counter인 엘레멘트의 텍스트가 0인지 테스트
    expect(isZero).toHaveTextContent(0);
  });

  it("플러스, 마이너스 버튼이 있는지", () => {
    render(<App />);

    const plusBtn = screen.getByTestId("plus");
    const minusBtn = screen.getByTestId("minus");

    expect(plusBtn).toHaveTextContent("+");
    expect(minusBtn).toHaveTextContent("-");
  });

  it("플러스 버튼 클릭 시 1 증가 하는지", () => {
    render(<App />);

    const plusBtn = screen.getByTestId("plus");

    fireEvent.click(plusBtn);
    const isZero = screen.getByTestId("counter");

    expect(isZero).toHaveTextContent(1);
  });

  it("마이너스 버튼 클릭 시 -1 증가 하는지", () => {
    render(<App />);

    const minusBtn = screen.getByTestId("minus");

    fireEvent.click(minusBtn);
    const isZero = screen.getByTestId("counter");

    expect(isZero).toHaveTextContent(-1);
  });

  it("온오픈 버튼 백그라운드 색이 파랑색 인지", () => {
    render(<App />);

    const onoffBtn = screen.getByTestId("onoff");

    expect(onoffBtn).toHaveStyle({ backgroundColor: "blue" });
  });

  it("온오픈 버튼 클릭 시 +,- 버튼 이벤트 막기", () => {
    render(<App />);

    const onoffBtn = screen.getByTestId("onoff");

    fireEvent.click(onoffBtn);

    const minusBtn = screen.getByTestId("minus");

    expect(minusBtn).toBeDisabled();
  });

  // it("Eslint 테스트", () => {
  // Eslint test
  // const lintTest = screen.getByRole("button", {
  //   name: "lintTest",
  // });
  // expect(lintTest).toBe("lintTest");
  // expect(lintTest).toHaveTextContent("lintTest");
  // });
});
