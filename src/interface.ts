export interface IList {
	id: number;
	title: string;
}

export interface ICard {
	id?: number;
	title: string;
	listId?: number;
	dueDate?: Date;
	description?: string;
	checklist?: [];
	priority?: [];
}
