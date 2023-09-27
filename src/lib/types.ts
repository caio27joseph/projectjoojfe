interface IArticle {
	name: string;
}
interface IDirectory {
	name: string;
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
