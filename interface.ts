export interface IColumn {
  id: string;
  title: string;
}

export interface ICard {
  id: string;
  title: string;
  listId: string;
  dueDate?: Date;
  description?: string;
  checklist?: [];
  priority?: [];
}
