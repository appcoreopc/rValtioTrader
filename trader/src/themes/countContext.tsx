import React from "react";

const user =  {
    "first" : "jeremy", 
    "last" : "woo`"
}


const MyContext = React.createContext(user);

const ThemeContext = React.createContext('light');

class ThemedButton extends React.Component {
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


export const TipBar = () => {
    
    const userDetails = React.useContext(MyContext);

    return (
        <> 
        <div>
            <p> Head Bar {userDetails.first} </p>
            <p> Head Bar {userDetails.last} </p>
        </div>
        </>
    );
}


export const Page = (props: any) => {

    return (
        <>

        <MyContext.Provider value={user}>
            <TipBar></TipBar>
        </MyContext.Provider>

            <ThemeContext.Provider value="blue">
                <Toolbar />
            </ThemeContext.Provider>
        </>
    );
}
