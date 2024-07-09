export const getTasksFromLs = () => {
    return JSON.parse(localStorage.getItem("tasks"));
  };
  
  export const setTasksFromLs = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};