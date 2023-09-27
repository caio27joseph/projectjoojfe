// User Factory From faker-js/faker
import { fakerDE as faker } from '@faker-js/faker';

const roles = ['GM', 'Player', 'NPC', 'Spectator', 'Boss'];

export interface IUser {
	id: string;
	name: string;
	avatar: string;
	role: string;
	status: {
		health: number;
		mana: number;
		stamina: number;
	};
	quote: string;
	line2: string;
}

export const userFactory = () => {
	const user: IUser = {
		id: faker.string.uuid(),
		name: faker.person.firstName(),
		avatar: faker.image.avatar(),
		role: roles[faker.number.int({ min: 0, max: roles.length - 1 })],
		status: {
			health: faker.number.int({ min: 0, max: 100 }),
			mana: faker.number.int({ min: 0, max: 100 }),
			stamina: faker.number.int({ min: 0, max: 100 })
		},
		quote: faker.lorem.sentence(),
		line2: faker.lorem.sentence()
	};
	return user;
};
