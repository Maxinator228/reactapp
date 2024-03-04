import { FC } from "react";
import { Typography } from "../shared/ui/Typography";
import { COLORS_TEXT } from "../shared/ui/colors";




export const Header: FC = function Header(){
    
    return (
    <header className={"bg-blue-600 py-3"}>
        <Typography size={24} weight={600} align="center" color={COLORS_TEXT.alternative}>{"Список товаров в корзине"}</Typography>
    </header>
    );
};