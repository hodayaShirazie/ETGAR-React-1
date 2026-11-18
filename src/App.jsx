import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";
import "./App.css";

const profiles = [
  {
    id: 1,
    name: "Noa Cohen",
    description: "Loves hiking, coffee, and building side projects.",
    type: "Friend",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Dr. David Levi",
    description: "Teaches algorithms and software architecture.",
    type: "Teacher",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 3,
    name: "Maya Tal",
    description: "Computer science student exploring React and UI design.",
    type: "Student",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 4,
    name: "Omer Mizrahi",
    description: "Runs marathons and plays acoustic guitar on weekends.",
    type: "Friend",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 5,
    name: "Prof. Tamar Ben-Ari",
    description: "Researches distributed systems and mentors senior projects.",
    type: "Teacher",
    avatar: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: 6,
    name: "Yael Shapira",
    description: "Second-year student passionate about mobile apps and data.",
    type: "Student",
    avatar: "https://i.pravatar.cc/150?img=20",
  },
];

export default function App() {
  return (
    <div className="app-container">
      <Header />

      <main className="cards-grid">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            avatar={profile.avatar}
            name={profile.name}
            description={profile.description}
            type={profile.type}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}