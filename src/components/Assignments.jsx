import React, { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'

const assignmentData = [
  {
    id: '1',
    title: 'Setting up VSCode for Java',
    youtubeId: 'BB0gZFpukJU',
    assignment: [
      'Install VSCode on your computer',
      'Set up the Java Development Kit (JDK)',
      'Configure VSCode for Java development'
    ],
    quiz: [
      'No quiz for this section! That was easy, right?',
    ]
  },
  {
    id: '2',
    title: 'Basics of Java',
    youtubeId: 'RRubcjpTkks',
    assignment: [
      'Write a "Hello, World!" program in Java',
      'Create a simple calculator program using basic Java operations to calculate the average of 4 grades ',
      'Implement a program that uses if-else statements and loops'
    ],
    quiz: [
      'What is the main method in Java and why is it important?',
      'How do you declare and initialize an array in Java?'
    ]
  },
  {
    id: '3',
    title: 'Setting up WPILIB VSCode',
    youtubeId: '99SuYo1PqnA',
    assignment: [
      'Install the WPILib VSCode extension',
      'Create a new FRC project using the WPILib VSCode extension',
      'Configure your team number in the WPILib settings'
    ],
    quiz: [
      'What is WPILib and why is it used in FRC?',
      'What is the purpose of the "Build Robot Code" command in WPILib VSCode?'
    ]
  },
  {
    id: '4',
    title: 'Overlook of Programming for FRC',
    youtubeId: 'pcUj3GT_1LU',
    assignment: [
      'Create a basic robot project structure',
      'Implement a simple autonomous routine',
      'Write code for basic teleop controls'
    ],
    quiz: [
      'What are the main components of an FRC robot program?',
      'Explain the difference between autonomous and teleop modes.',
      'How do you handle joystick input in an FRC program?'
    ]
  },
  {
    id: '5',
    title: 'Driving Code',
    youtubeId: 'ihO-mw_4Qpo',
    assignment: [
      'Implement a tank drive system',
      'Create an arcade drive control scheme',
      'Add a speed multiplier (slow/fast mode) to your drive code'
    ],
    quiz: [
      'What is the difference between tank drive and arcade drive?',
      'How do you invert motor directions in code?',
      'Explain how to implement a "slow mode" for more precise driving.'
    ]
  },
  {
    id: '6',
    title: 'Programming Pneumatics',
    youtubeId: 't4ezyUNHpVk',
    assignment: [
      'Set up a pneumatic system in your robot code',
      'Create a toggle control for a double solenoid',
      'Implement a timed pneumatic action in autonomous mode'
    ],
    quiz: [
      'How do you control a double solenoid in code?',
      'Explain the difference between a single and double solenoid.'
    ]
  },
]

export default function Assignments() {
  const [openAssignments, setOpenAssignments] = useState([])

  const toggleAssignment = (id) => {
    setOpenAssignments(prev =>
      prev.includes(id) ? prev.filter(assignmentId => assignmentId !== id) : [...prev, id]
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">FRC Coding Assignments</h1>
      <div className="space-y-4">
        {assignmentData.map((assignment) => (
          <div key={assignment.id} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="flex justify-between items-center w-full p-4 text-left bg-gray-100 hover:bg-gray-200 transition-colors"
              onClick={() => toggleAssignment(assignment.id)}
            >
              <span className="text-lg font-semibold">{assignment.title}</span>
              {openAssignments.includes(assignment.id) ? (
                <ChevronUpIcon className="h-6 w-6" />
              ) : (
                <ChevronDownIcon className="h-6 w-6" />
              )}
            </button>
            {openAssignments.includes(assignment.id) && (
              <div className="p-4 bg-white">
                <h3 className="text-xl font-semibold mb-4">Assignment/Quiz for {assignment.title}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-medium mb-2">Video Reference</h4>
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        src={`https://www.youtube.com/embed/${assignment.youtubeId}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2">Assignment</h4>
                    <p>Complete the following tasks related to {assignment.title}:</p>
                    <ul className="list-disc list-inside mt-2">
                      {assignment.assignment.map((task, index) => (
                        <li key={index}>{task}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2">Quiz</h4>
                    <p>Answer the following questions:</p>
                    <ol className="list-decimal list-inside mt-2">
                      {assignment.quiz.map((question, index) => (
                        <li key={index}>{question}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}