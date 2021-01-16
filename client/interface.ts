export interface IColumn {
  readonly _id?: string;
  title: string;
}

export interface ICard {
  readonly _id?: string;
  title: string;
  listId: string;
  dueDate?: Date;
  description?: string;
  checklist?: [];
  priority?: [];
}
