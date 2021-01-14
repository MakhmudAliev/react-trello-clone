export interface IColumn {
  _id: string;
  title: string;
}

export interface ICard {
  _id: string;
  title: string;
  listId: string;
  dueDate?: Date;
  description?: string;
  checklist?: [];
  priority?: [];
}
