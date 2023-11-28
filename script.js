// Simulating a database of tasks
let tasks = [];

const addTask = async () => {
  try {
    const taskInput = document.getElementById('taskInput');
    const taskDescription = taskInput.value.trim();

    if (!taskDescription) {
      throw new Error('Task description cannot be empty');
    }

    // Simulating an asynchronous operation (e.g., saving to a database)
    await saveTaskToDatabase(taskDescription);

    // Update the tasks array
    tasks.push({ description: taskDescription, completed: false });

    // Update the UI
    displayTasks();

    // Clear the input field
    taskInput.value = '';
  } catch (error) {
    console.error(error.message);
    // Optionally, display an error message on the webpage
    alert(`Error: ${error.message}`);
  }
};

const saveTaskToDatabase = async (taskDescription) => {
  // Simulating an asynchronous operation (e.g., saving to a database)
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Task "${taskDescription}" saved to the database`);
      resolve();
    }, 1000);
  });
};

const markTaskAsCompleted = async (index) => {
  try {
    // Simulating an asynchronous operation (e.g., updating a database)
    await updateTaskInDatabase(index);

    // Update the tasks array
    tasks[index].completed = true;

    // Update the UI
    displayTasks();
  } catch (error) {
    console.error(error.message);
    // Optionally, display an error message on the webpage
    alert(`Error: ${error.message}`);
  }
};

const updateTaskInDatabase = async (index) => {
  // Simulating an asynchronous operation (e.g., updating a database)
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Task "${tasks[index].description}" marked as completed in the database`);
      resolve();
    }, 1000);
  });
};

const displayTasks = () => {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = task.description;

    if (task.completed) {
      listItem.style.textDecoration = 'line-through';
    } else {
      const completeButton = document.createElement('button');
      completeButton.textContent = 'Mark as Completed';
      completeButton.onclick = () => markTaskAsCompleted(index);
      listItem.appendChild(completeButton);
    }

    taskList.appendChild(listItem);
  });
};

// Initial display of tasks
displayTasks();
