import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar.jsx";
import VideoCard from "./videoComponent/videoCard.jsx";
 

const courses = [
  {
    id: "delta",
    title: "Delta",
    description: "Course notes, formulas, and learning resources.",
    thumbnailUrl: "https://picsum.photos/seed/delta/640/480",
  },
  {
    id: "algebra",
    title: "Algebra",
    description: "Core algebra topics and revision material.",
    thumbnailUrl: "https://picsum.photos/seed/algebra/640/480",
  },
  {
    id: "geometry",
    title: "Geometry",
    description: "Important geometry concepts and theorems.",
    thumbnailUrl: "https://picsum.photos/seed/geometry/640/480",
  },
    {
    id: "geometry",
    title: "Geometry",
    description: "Important geometry concepts and theorems.",
    thumbnailUrl: "https://picsum.photos/seed/geometry/640/480",
  },

];

function App() {
  const [selectedCourseId, setSelectedCourseId] = useState(null);

  const selectedCourse = courses.find((course) => course.id === selectedCourseId);

  return (
    <div className="App">
      <Sidebar />
      {selectedCourse ? (
        <FormulaSection
          courseId={selectedCourse.id}
          courseName={selectedCourse.title}
          onBack={() => setSelectedCourseId(null)}
        />
      ) : (
        <main className="main">
          <h1>My courses</h1>
          <div className="video-card-list">
            {courses.map((course) => (
              <VideoCard
                key={course.id}
                thumbnailUrl={course.thumbnailUrl}
                mainTitle={course.title}
                description={course.description}
                onClick={() => setSelectedCourseId(course.id)}
              />
            ))}
          </div>
        </main>
      )}
    </div>
  );
}

export default App;