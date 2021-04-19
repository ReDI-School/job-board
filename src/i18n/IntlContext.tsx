import React from 'react';

type ContextValue = Record<string, string>;

export const IntlContext = React.createContext<ContextValue>({});

type IntlProviderProps = {
  messages: Record<string, string>;
};

export const IntlProvider: React.FC<IntlProviderProps> = ({
  children,
  messages,
}) => <IntlContext.Provider value={messages}>{children}</IntlContext.Provider>;
