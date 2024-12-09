import { getByText, render,screen } from "@testing-library/react";
import MyNameComp from "./MyNameComp";

test("render myname Component",()=>{
    render(<MyNameComp/>);
    let createElement = screen.getByText("This is Vasanth");
    expect(createElement).toBeInTheDocument();
})