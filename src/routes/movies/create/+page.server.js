import db from "#lib/db.js";

export const actions = {
    create: async ({request}) => {
        const data = await request.formData();

        let movie = {
            Title: data.get("title"),
            Year: data.get("year"),
            Duration: data.get("duration"),
            Poster: "/movieposters/placeholder.jpg"
        }
        //console.log(movie);
        db.createMovie(movie);
        return { success: true };
    }
}