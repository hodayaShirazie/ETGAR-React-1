import Button from "./Button";

export default function ProfileCard({ avatar, name, description, type }) {
  return (
    <div className="profile-card">
      <img src={avatar} alt={name} className="avatar" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-desc">{description}</p>
      <Button
        type={type}
        onClick={() => alert(`Clicked on ${name} (${type})`)}
      />
    </div>
  );
}