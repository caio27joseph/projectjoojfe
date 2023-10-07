interface IArticle {
	name: string;
}
interface IDirectory {
	id: string;
	name: string;
	parentId?: string | null;
	directories?: IDirectory[];
	articles?: IArticle[];
}

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
