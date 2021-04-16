import { useContext, useMemo } from 'react';

import { IntlContext } from '../i18n/IntlContext';

type formatMessageArgs = {
  id: string;
  values?: Record<string, string>;
  defaultMessage?: string;
};

const useIntl = () => {
  const messages = useContext(IntlContext);

  return useMemo(
    () => ({
      formatMessage: ({ id, defaultMessage, values }: formatMessageArgs) => {
        let message = id;

        if (id in messages) {
          message = messages[id];
        } else if (defaultMessage !== undefined) {
          message = defaultMessage;
        }

        if (!values) {
          return message;
        }

        return message.replace(
          /(\{[a-z0-9]*[^}]\})/g,
          (value) => values[value.replace(/[{}]/g, '')],
        );
      },
    }),
    [messages],
  );
};

export default useIntl;
