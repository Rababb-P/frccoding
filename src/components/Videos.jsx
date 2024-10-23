import React, { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'

const videoData = [
  { id: '1', title: 'Setting up VSCode for Java', youtubeId: 'BB0gZFpukJU' },
  { id: '2', title: 'Basics of Java', youtubeId: 'RRubcjpTkks' },
  { id: '3', title: 'Setting up WPILIB VSCode', youtubeId: '99SuYo1PqnA' },
  { id: '4', title: 'Overlook of Programming for FRC', youtubeId: 'pcUj3GT_1LU' },
  { id: '5', title: 'Driving Code', youtubeId: 'ihO-mw_4Qpo' },
  { id: '6', title: 'Programming Pneumatics', youtubeId: 't4ezyUNHpVk' },  
  { id: '7', title: 'Vision Processing in FRC', youtubeId: 'dQw4w9WgXcQ' },
  { id: '8', title: 'Debugging FRC Robot Code', youtubeId: 'dQw4w9WgXcQ' },
  { id: '9', title: 'Advanced Sensor Fusion', youtubeId: 'dQw4w9WgXcQ' },
  { id: '10', title: 'Optimizing FRC Robot Performance', youtubeId: 'dQw4w9WgXcQ' },
]

export default function Videos() {
  const [openVideos, setOpenVideos] = useState([])

  const toggleVideo = (id) => {
    setOpenVideos(prev =>
      prev.includes(id) ? prev.filter(videoId => videoId !== id) : [...prev, id]
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">View All FRC Coding Videos Here</h1>
      <div className="space-y-4">
        {videoData.map((video) => (
          <div key={video.id} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="flex justify-between items-center w-full p-4 text-left bg-gray-100 hover:bg-gray-200 transition-colors"
              onClick={() => toggleVideo(video.id)}
            >
              <span className="text-lg font-semibold">{video.title}</span>
              {openVideos.includes(video.id) ? (
                <ChevronUpIcon className="h-6 w-6" />
              ) : (
                <ChevronDownIcon className="h-6 w-6" />
              )}
            </button>
            {openVideos.includes(video.id) && (
              <div className="p-4">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}