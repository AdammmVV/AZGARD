import React from "react";
import Nav from "./Nav";
import StoreContext from "../../storeContext";

const NavContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState()

                return (<Nav friends={state.nav.friends}/>)
            }}
        </StoreContext.Consumer>
    );
}

export default NavContainer;
