export class GraphQlError extends Error {
	message!: string;
	constructor(data: any) {
		super();
		Object.assign(this, data);
	}
}

export class BadRequestError extends GraphQlError {
	locations!: any[];
	path!: string[];
	extensions!: {
		code: string;
		status: number;
		errors: any[];
		stacktrace: string[];
	};
}

export function hydrateError(error: any): BadRequestError | GraphQlError {
	if (error?.message === 'Bad Request Exception') {
		return new BadRequestError(error);
	}
	return new GraphQlError(error);
}
