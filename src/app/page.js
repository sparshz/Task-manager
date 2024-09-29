"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardActions,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";
import Image from "next/image";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; // Import styles for progress bar
import Lottie from "lottie-react"; // Ensure this line is at the top of your file
import emptyTaskAnimation from '../animations/emptytask.json' // Adjust path as necessary



export default function Home() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [currentUserId, setCurrentUserId] = useState("emp123"); // Example employee ID for demonstration

  const tabs = [
    { name: "Task Overview" },
    { name: "Task Allotment" },
    { name: "Team Tasks" },
    { name: "Task Progress" },
    { name: "Completed Tasks" }
  ];

  const [clientTasks, setClientTasks] = useState([]);

  useEffect(() => {
    const formattedTasks = tasks.map((task) => ({
      ...task,
      formattedStartDate: task.startDate ? new Date(task.startDate).toLocaleDateString() : "N/A",
      formattedCompletionDate: task.completed ? new Date(task.completionDate).toLocaleDateString() : "N/A"
    }));

    setClientTasks(formattedTasks);
  }, [tasks]);

  const handleAllotTask = () => {
    const newTask = {
      taskName,
      taskDescription,
      deadline,
      allottedTo: employeeName,
      employeeId,
      progress: 0,
      startDate: null,
      completed: false,
      completionDate: null,
      accepted: false,
    };

    setTasks([...tasks, newTask]);
    resetForm();
  };

  const resetForm = () => {
    setTaskName("");
    setTaskDescription("");
    setDeadline("");
    setEmployeeName("");
    setEmployeeId("");
  };

  const acceptTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].accepted = true;
    updatedTasks[index].startDate = new Date().toISOString();
    setTasks(updatedTasks);
  };
  return (
    <main className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <Image
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 -z-10 h-full w-full object-right md:object-center"
      />

      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
        <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
      </div>

      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
        <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            <a href="#">Open roles <span aria-hidden="true">&rarr;</span></a>
            <a href="#">Internship program <span aria-hidden="true">&rarr;</span></a>
            <a href="#">Our values <span aria-hidden="true">&rarr;</span></a>
            <a href="#">Meet our leadership <span aria-hidden="true">&rarr;</span></a>
          </div>

          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-gray-300">Offices worldwide</dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-white">12</dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-gray-300">Full-time colleagues</dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-white">300+</dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-gray-300">Hours per week</dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-white">40</dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-gray-300">Paid time off</dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-white">Unlimited</dd>
            </div>
          </dl>
        </div>
      </div>


      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </p>
        </div>

    {/* Task Management Tabs */}
    <div className="mt-12">
          <div className="flex justify-center space-x-4">
            {tabs.map((tab, index) => (
              <div
                key={index}
                onClick={() => setSelectedTab(index)}
                className={`px-6 py-3 rounded-lg cursor-pointer ${
                  selectedTab === index
                    ? "bg-blue-500 text-white"
                    : "bg-gray-700 text-gray-300"
                } hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out`}
              >
                {tab.name}
              </div>
            ))}
          </div>

          {/* Content based on selected tab */}
          <div className="mt-10 text-white text-center">
            {selectedTab === 0 && (
              <div className="grid grid-cols-1 gap-6">
                {clientTasks.length === 0 ? (
                  // Lottie animation when there are no tasks
                  <div className="flex justify-center">
                    <Lottie 
                      animationData={emptyTaskAnimation} 
                      loop 
                      style={{ width: '300px', height: '300px' }} 
                    />
                  </div>
                ) : (
                  clientTasks.map((task, index) => (
                    <div
                      key={index}
                      className="p-6 bg-gray-800 rounded-lg shadow-lg flex justify-between items-center"
                    >
                      {/* Task Details */}
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-blue-400 mb-4">
                          {task.taskName}
                        </h3>
                        <p className="mb-2">
                          <span className="font-semibold">Allotted to:</span>{" "}
                          {task.allottedTo} (ID: {task.employeeId})
                        </p>
                        <p className="mb-2">
                          <span className="font-semibold">Description:</span>{" "}
                          {task.taskDescription}
                        </p>
                        <p className="mb-2">
                          <span className="font-semibold">Deadline:</span>{" "}
                          {task.deadline}
                        </p>
                        <p className="mb-2">
                          <span className="font-semibold">Start Date:</span>{" "}
                          {task.formattedStartDate}
                        </p>
                        <p className="mb-2">
                          <span className="font-semibold">Status:</span>{" "}
                          {task.completed ? "Completed" : task.accepted ? "Accepted" : "Pending"}
                        </p>
                        {task.completed && (
                          <p className="mb-2">
                            <span className="font-semibold">Completion Date:</span>{" "}
                            {task.formattedCompletionDate}
                          </p>
                        )}
                      </div>

                      {/* Circular Progress Indicator */}
                      <div className="w-24 h-24">
                        <CircularProgressbar
                          value={task.progress}
                          text={`${task.progress}%`}
                          styles={buildStyles({
                            textColor: "#fff",
                            pathColor: task.completed ? "#00e676" : task.progress === 100 ? "#00e676" : "#3b82f6",
                            trailColor: "#d6d6d6"
                          })}
                        />
                      </div>

                      {/* Button to accept task (only for assigned employee) */}
                      {!task.completed && !task.accepted && task.employeeId === currentUserId && (
                        <button
                          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                          onClick={() => acceptTask(index)}
                        >
                          Accept Task
                        </button>
                      )}
                    </div>
                  ))
                )}
              </div>
            )}

{selectedTab === 1 && (
  <div className="flex justify-center">
    <Card
      sx={{ 
        width: '100%', 
        maxWidth: 400, 
        backgroundColor: 'rgba(245, 245, 245, 0.9)', // Off-white background color
        borderRadius: '16px' // Increased border radius for more rounded corners
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div" color="black"> {/* Changed to black for contrast */}
          Allot Task
        </Typography>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAllotTask();
          }}
          className="space-y-4"
        >
          <TextField
            fullWidth
            label="Task Name"
            variant="outlined"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
            InputProps={{ style: { color: 'black' } }} // Change text color to black
          />
          <TextField
            fullWidth
            label="Task Description"
            variant="outlined"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            required
            multiline
            rows={4}
            InputProps={{ style: { color: 'black' } }} // Change text color to black
          />
          
          <div>
  <label className="block mb-2 text-sm font-medium text-gray-800"> {/* Keep the label color for visibility */}
    Deadline to complete the task
  </label>
  <input
    type="date"
    value={deadline}
    onChange={(e) => setDeadline(e.target.value)}
    className="w-full p-2 rounded"
    style={{ color: 'white' }} // Set text color to white
    min={new Date().toISOString().split("T")[0]} // Set minimum date to today
    required
  />
</div>


          
          <TextField
            fullWidth
            label="Employee Name"
            variant="outlined"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            required
            InputProps={{ style: { color: 'black' } }} // Change text color to black
          />
          <TextField
            fullWidth
            label="Employee ID"
            variant="outlined"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            required
            InputProps={{ style: { color: 'black' } }} // Change text color to black
          />
          <CardActions>
            <Button type="submit" size="large" variant="contained" color="primary">
              Allot Task
            </Button>
          </CardActions>
        </form>
      </CardContent>
    </Card>
  </div>
)}




          {selectedTab === 2 && <p>See tasks assigned to your team members.</p>}
          {selectedTab === 3 && <p>Track task progress and ongoing activities.</p>}
          {selectedTab === 4 && <p>View the tasks that have been completed.</p>}
        </div>
      </div>
      </div>


    </main>
  );

}




