import Database from "tauri-plugin-sql-api";

let db = null;
const load = Database.load("sqlite:bug_tracker.db").then((instance) => {
  db = instance;
  return db;
});

export async function allProjects() {
  await load;
  const res = await db.select("SELECT*FROM projects");
  return res;
}

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

export async function updateProject(project) {
  let response = {};
  const action = await db.execute(
    "UPDATE projects SET title=$1, link=$2, description=$3 WHERE id=$4",
    [project.title, project.link, project.description, project.id]
  );
  response = {
    message: "Updated Successfully!",
    status: 200,
    data: action,
  };
  return response;
}

export async function deleteProject(id) {
  let response = {};
  const action = await db.execute("DELETE FROM projects WHERE id=$1", [id]);
  response = {
    message: "Deleted Succesfully",
    status: 200,
    data: action,
  };
  return response;
}
