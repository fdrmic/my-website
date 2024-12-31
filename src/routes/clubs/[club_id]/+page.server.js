import db from '$lib/db.js';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
    return {
        club: await db.getClub(params.club_id)
    };
}

export const actions = {
    delete: async ({ request }) => {
        const data = await request.formData();
        const id = data.get('id');
        await db.deleteClub(id);
        throw redirect(303, '/clubs');
    }
};