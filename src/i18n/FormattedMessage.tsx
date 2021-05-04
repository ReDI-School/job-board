import React from 'react';

import useIntl from './useIntl';

type FormattedMessageProps = {
  id: string;
  values?: Record<string, string>;
  defaultMessage?: string;
};

const FormattedMessage: React.FC<FormattedMessageProps> = ({
  id,
  values,
  defaultMessage,
}) => {
  const { formatMessage } = useIntl();

  return <>{formatMessage({ id, defaultMessage, values })}</>;
};

export default FormattedMessage;
