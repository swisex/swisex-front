import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const requirements = `
Given the following template, please provide a list of all components that would be needed for this.

Feel free to submit this solution as one of:
* code
*	writing on paper
*	Screenshot highlighting components

**Bonus points**: use pseudo-code to showcase the component’s interaction
`;

const components = `
## Components List

**Left Panel:**

1. **Add New Task Button**: A button component that triggers a form to input a new task.
2. **Plan**: A navigation item component that directs the user to a planning view.
3. **Task List**: A navigation item component that directs the user to a task list view.
4. **Projects**: A navigation item component that directs the user to a projects view.
5. **Tags**: A navigation item component that directs the user to a tags view.

**Top Panel:**

6. **Backlog**: A navigation item component that directs the user to a backlog view.
7. **Priority Chart**: A navigation item component that directs the user to a priority chart view.
8. **Kanban Workflow**: A navigation item component that directs the user to a kanban workflow view.
9. **Search bar**: An input component that filters tasks based on user input, possibly with a **calendar date picker component** incorporated.
10. **Share**: A button component that allows the user to share their current view or task.

**Main Panel:**

11. **TaskStage**: A React component that represents a stage in the kanban board (To Do, In Progress, Done). It renders a list of TaskCard components.
  * **To Do**: A task board component that displays tasks that need to be done.
  * **In Progress**: A task board component that displays tasks that are currently in progress.
  * **Done**: A task board component that displays tasks that have been completed.
12. **TaskCard**: A React component that displays task details, assignees, priority, tags, and date information.
`;

const psuedoCode = `
## Pseudo-Code

~~~typescript
import React, { useState } from 'react';

// Top-level app component
const CollaborationTool = () => {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const addTask = (task) => {
    setTasks(prevTasks => [...prevTasks, task]);
  };

  const searchTasks = (query) => {
    setSearchQuery(query);
  };

  const filteredTasks = tasks.filter(task => task.title.includes(searchQuery));

  return (
    <div>
      <LeftPanel addTask={addTask} tasks={tasks} />
      <TopPanel searchTasks={searchTasks} tasks={tasks} />
      <CentralPanel tasks={filteredTasks} />
    </div>
  );
};

// LeftPanel component
const LeftPanel = ({ addTask, tasks }) => (
  <div>
    <AddNewTaskButton addTask={addTask} />
    <Plan tasks={tasks} />
    <TaskList tasks={tasks} />
    <Projects tasks={tasks} />
    <Tags tasks={tasks} />
  </div>
);

// TopPanel component
const TopPanel = ({ searchTasks, tasks }) => (
  <div>
    <Backlog tasks={tasks} />
    <PriorityChart tasks={tasks} />
    <KanbanWorkflow tasks={tasks} />
    <SearchBar searchTasks={searchTasks} />
    <Share tasks={tasks} />
  </div>
);

// CentralPanel component
const CentralPanel = ({ tasks }) => (
  <div>
    <TaskStage title="To Do" tasks={tasks} />
    <TaskStage title="In Progress" tasks={tasks} />
    <TaskStage title="Done" tasks={tasks} />
  </div>
);

// TaskStage component
const TaskStage = ({ title, tasks }) => (
  <div>
    <h2>{title}</h2>
    {tasks.map(task => <TaskCard key={task.id} task={task} />)}
  </div>
);
~~~
`;

export default function Challenge3() {
  return (
    <>
      <h1>Challenge 3</h1>
      <details>
        <summary>Requirements</summary>
        <ReactMarkdown children={requirements} />
        <img
          style={{ width: "100%", height: "auto", maxWidth: "1024px" }}
          src="https://github.com/swisex/swisex-front/blob/9e8b3e827acf9f5dddf68fb7ad35aa84c56da68a/src/features/exercise/challenge3.png?raw=true"
          alt="challenge 3"
        />
      </details>
      <ReactMarkdown children={components} />
      <ReactMarkdown
        children={psuedoCode}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter language="typescript">
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </>
  );
}
