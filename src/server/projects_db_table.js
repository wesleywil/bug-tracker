import Database from "tauri-plugin-sql-api";

let db = null;
const load = Database.load("sqlite:bug_tracker.db").then((instance) => {
  db = instance;
  return db;
});

export async function createProject(project) {
  let response = {};
  const action = await db.execute(
    "INSERT INTO projects (title, link, description, add_date) VALUES ($1,$2 ,$3, Date('now'))",
    [project.title, project.link, project.description]
  );
  response = {
    message: "Added Successfully!",
    status: 201,
    data: action,
  };
  return response;
}

export async function deleteWrontProject(id) {
  let response = {};
  const action = await db.execute("DELETE FROM projects WHERE ID=$1", [id]);
  response = {
    message: "DELETED",
    status: 201,
    data: action,
  };
  return response;
}

export async function allProjects() {
  await load;
  const res = await db.select("SELECT*FROM projects");
  return res;
}
