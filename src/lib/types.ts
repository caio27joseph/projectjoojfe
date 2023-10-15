interface IArticle {
	name: string;
}
export type Dir = {
	id: string;
	name: string;
	parentId?: string | null;
	directories?: Dir[];
	articles?: IArticle[];
};

interface IMessage {
	id: number;
	content: string;
	author: {
		id: number;
		name: string;
		avatarUrl: string;
	};
	createdAt: Date;
}
