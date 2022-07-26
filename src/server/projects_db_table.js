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
// Move to Bug Server File
export async function selectBugsForProject(id, status_title) {
  let response = {};
  const action = await db.select(
    `SELECT * FROM status, bugs WHERE project_id = ${id} AND bugs.status_id = status.id AND status.title = "${status_title}"`
  );
  response = {
    message: "Bugs Retrieved",
    status: 200,
    data: action,
  };
  return response;
}

export async function createNewBugProject(bug) {
  let response = {};
  const action = await db.execute(
    `INSERT INTO bugs (project_id,info,tag_id,status_id,priority_id,add_date) VALUES(${bug.project_id}, "${bug.info}", ${bug.tag_id}, 1, ${bug.priority_id}, Date("now"))`
  );
  response = {
    messsage: "New bug registered!",
    status: 201,
    data: action,
  };
  return response;
}
