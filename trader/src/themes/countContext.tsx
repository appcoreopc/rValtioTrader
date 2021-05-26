import React from "react";
const ThemeContext = React.createContext('light');

class ThemedButton extends React.Component {
    // Assign a contextType to read the current theme context.
    // React will find the closest theme Provider above and use its value.
    // In this example, the current theme is "dark".
    static contextType = ThemeContext;
    render() {
        return <div>
            <p> Love love love {this.context} </p>
        </div>;
    }
}

export const Toolbar = () => {
    return (
        <>
            <ThemedButton />
        </>
    );
}

export const Page = (props: any) => {

    return (
        <>
            <ThemeContext.Provider value="blue">
                <Toolbar />
            </ThemeContext.Provider>
        </>
    );
}
