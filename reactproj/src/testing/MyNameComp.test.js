import { getByText, render,screen } from "@testing-library/react";
import MyNameComp from "./MyNameComp";

describe("MyName Component",()=>{
    test("render it",()=>{
        render(<MyNameComp/>);
        let createElement = screen.getByText(/this is MyName Component/i);
        expect(createElement).toBeInTheDocument();
    })
    test("render with props name",()=>{
        render(<MyNameComp name="Vasanth" post="FullStack Developer"/>);
        let createElement = screen.getByText("My Name is :Vasanth");
        expect(createElement).toBeInTheDocument();
    })
    test("render with props post",()=>{
        render(<MyNameComp name="Vasanth" post="FullStack Developer"/>);
        let createElement = screen.getByText(/i am :Fullstack Developer/i);
        expect(createElement).toBeInTheDocument();
    })
})
