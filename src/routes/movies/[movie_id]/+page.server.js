import db from "#lib/db.js";

/** @type {import('./$types').PageServerLoad} */
export async function load({params})
{
    return {
        movie: await db.getMovie(params.movie_id)
    }
}
