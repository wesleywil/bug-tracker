import Database from "tauri-plugin-sql-api";

let db = null;
const load = Database.load("sqlite:bug_tracker.db").then((instance) => {
  db = instance;
  return db;
});

export async function allTags() {
  await load;
  const res = await db.select("SELECT*FROM tags");
  return res;
}
