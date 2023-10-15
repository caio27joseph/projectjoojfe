// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		authenticated: boolean;
	}
	interface Session {
		access_token: string;
	}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}
