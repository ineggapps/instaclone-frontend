import { createGlobalStyle } from "styled-components";
import reset from "react-style-reset";

export default createGlobalStyle`
    ${reset}
    *{
        box-sizing:border-box;
    }
`;
