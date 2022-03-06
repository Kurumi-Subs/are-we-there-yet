import { dev } from '$app/env';
import type { GetSession, Handle } from '@sveltejs/kit';
import type { GroupOrError } from '$lib/utils';

export const handle: Handle<GroupOrError> = async ({ event, resolve }) => {
	if (dev) {
		const { default: dotenv } = await import('dotenv');
		dotenv.config();
	}
	return await resolve(event);
};

export const getSession: GetSession<GroupOrError, GroupOrError> = ({ locals }) => {
	return locals;
};
