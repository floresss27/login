import { Main, TextField} from "./styles";
import React from "react";

export const ModalLogin = () => {
    return (
        <Main>
            <TextField>
                <span>Email:</span>
                <input type="text" />
            </TextField>
            <TextField>
                <span>Senha:</span>
                <input type="text" />
            </TextField>
        </Main>
    )
}