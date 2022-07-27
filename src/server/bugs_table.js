import Database from "tauri-plugin-sql-api";

let db = null;
const load = Database.load("sqlite:bug_tracker.db").then((instance) => {
  db = instance;
  return db;
});

export async function allBugs() {
  await load;
  const res = await db.select("SELECT*FROM bugs");
  return res;
}

export async function selectBugsByProject(id) {
  const res = await db.select(
    `SELECT bugs.id as bug_id, bugs.info as bug_info, status.title as status_title, tags.title as tag_title, projects.title as project_title 
    FROM bugs, status, tags, projects WHERE bugs.project_id = projects.id AND bugs.status_id = status.id AND bugs.tag_id = tags.id AND bugs.project_id = $1`,
    [id]
  );
  return res;
}

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

export async function createBug(bug) {
  let response = {};
  const action = await db.execute(
    `INSERT INTO bugs (project_id, info, tag_id, status_id, priority_id, add_date) VALUES(${bug.project_id}, "${bug.info}", ${bug.tag_id}, ${bug.status_id}, ${bug.priority_id}, Date("now"))`
  );
  response = {
    message: "Added Successfully!",
    status: 201,
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
