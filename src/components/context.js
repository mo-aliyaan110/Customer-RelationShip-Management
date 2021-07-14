import React from 'react'

const Context = React.createContext()
const Logprovider =  Context.Provider;
const Logconsumer = Context.Consumer;

export {Logprovider, Logconsumer}

export default Context;


