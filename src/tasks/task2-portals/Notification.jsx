import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from '@components';
import { TIME_TO_SHOW, ANIMATION_DURATION } from '@utils/constants';

const NotificationWrapper = styled.div`
  position: fixed;
  top: 50px;
  left: 70px;
  background: transparent;
  border: solid 1px indigo;
  padding: 15px 25px;
  border-radius: 6px;
  opacity: ${props => (props.$hide ? 0 : 1)};
  transition: opacity 0.3s ease-in-out;

  p {
    margin-bottom: 5px;
  }
`;

export const Notification = ({ children, onClose }) => {
  const [hide, setHide] = useState(false);
  useEffect(() => {
    const showTimer = setTimeout(onClose, TIME_TO_SHOW);
    const hideTimer = setTimeout(() => setHide(true), TIME_TO_SHOW - ANIMATION_DURATION);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [onClose]);
  return (
    <>
      <NotificationWrapper $hide={hide}>
        <p>{children}</p>
        <Button onClick={onClose}>Close</Button>
      </NotificationWrapper>
    </>
  );
};
