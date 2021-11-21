import {DefaultTheme} from "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        primary: string;
        secondary: string;
        third: string;
        fourth: string;
        textColor?: string;
    }
}

export const lightTheme: DefaultTheme = {
    primary: '#000',
    secondary: '#082032',
    third: '#334756',
    fourth: '#F0A500',
    textColor: "#e0e0e0"
};

export const darkTheme: DefaultTheme = {
    primary: '#000',
    secondary: '#082032',
    third: '#334756',
    fourth: '#F0A500',
    textColor: "#e0e0e0"
};

export const currentTheme = lightTheme;