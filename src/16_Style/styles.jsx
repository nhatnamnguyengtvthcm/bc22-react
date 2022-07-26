import styled , {css}from "styled-components";

export const Button = styled.button `
    /* background-color: #f00;
    color: #fff;
    border: 1px solid #f00; */
    padding: 10px 15px;
    border-radius: 4px;
    cursor: ${({disabled})=> (disabled?"not-allowed": "pointer")};
    /* Những thuộc tính css này chỉ được thêm vào nêý button có property variant="primary" */
    /* ${({variant})=> variant === "primary" &&
    css`
        background-color: #f00;
        color: #fff;
        border-color: #f000;
    `} */
    ${({variant, theme})=>{
        switch (variant) {
            case "primary":
                return css `
                background-color: ${theme.red};
                color:  ${theme.white};
                border-color: #f000;
                `
            case "secondary":
                return css `
                background-color: ${theme.green};
                color:  ${theme.white};
                border-color: ${theme.green};
                `
           
            
            default:
                return;
        }
    }}
`;

 