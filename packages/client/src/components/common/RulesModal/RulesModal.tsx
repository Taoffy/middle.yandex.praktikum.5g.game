import React, { Dispatch, SetStateAction } from 'react';
import styles from './RulesModal.module.scss';

interface RulesModalProps {
  active: boolean,
  setActive: Dispatch<SetStateAction<boolean>>,
  children: any,
}

function RulesModal({ active, setActive, children }: RulesModalProps) {
  return (
    <div className={`${styles.modal} ${active ? styles.active : ''}`} onClick={() => setActive(false)}>
      <div className={`${styles.modal__content} ${active ? styles.active : ''}`} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default RulesModal;
