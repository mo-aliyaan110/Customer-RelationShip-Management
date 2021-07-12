import React from 'react'

const context = React.createContext()
const provider =  context.Provider;
const consumer = context.Consumer;

export {provider, consumer}

export default Context;


