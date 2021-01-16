import React, { useState, useEffect, SyntheticEvent } from "react";
import { Action } from "../../../redux/actions/cardActions";

interface ColumnDropdownProps {
  columnId: string;
  isVisible: boolean;
  removeColumn: (columnToRemove: string) => Action;
  removeCards: (listId: string) => Action;
}

export const ColumnDropdown: React.FC<ColumnDropdownProps> = ({ columnId, isVisible, removeColumn, removeCards }) => {
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    setVisible(isVisible);
  }, [isVisible]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    e.preventDefault();
    setVisible(false);
  };

  const handleRemove = (id: string): any => {
    return (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      removeColumn(id);
      removeCards(id);
    };
  };

  return (
    <>
      {visible && (
        <div className="column-dropdown">
          <a href="/" className="dropdown-close" onClick={handleClick}>
            x
          </a>
          <a href="/" onClick={handleRemove(columnId)}>
            Remove list
          </a>
          <a href="/">Edit list name</a>
        </div>
      )}
    </>
  );
};

export default ColumnDropdown;
