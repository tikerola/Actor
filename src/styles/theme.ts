import { DefaultTheme } from 'styled-components'

declare module "styled-components" {
    export interface DefaultTheme {
        primaryColor: string
        secondaryColor: string
        navigation: {
            height: string,
            primaryColor: string,
            secondaryColor: string,
        }
    }
}

export const lightTheme: DefaultTheme = {
    primaryColor: '#333',
    secondaryColor: '#666',
    navigation: {
        height: '60px',
        primaryColor: '#555',
        secondaryColor: '#ccc'
    }
}

export const darkTheme: DefaultTheme = {
    primaryColor: '#fff',
    secondaryColor: '#cacaca',
    navigation: {
        height: '60px',
        primaryColor: '#000',
        secondaryColor: '#999'
    }
}