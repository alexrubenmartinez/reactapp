import { useState } from "react";
export function TwitterFollowCard({ children, userName,initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followcard-button is-following"
    : "tw-followcard-button";


    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }
  return (
    <article
      className="tw-followcard"
      style={{ display: "flex", color: "#fff", alignItems: "center" }}
    >
      <header className="tw-followcard-header">
        <img
          className="tw-followcard-avatar"
          alt={`El avatar de ${name}`}
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followcard-info">
          <strong> {children}</strong>
          <span className="tw-followcard-info-username">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
            <span className="tw-followcard-text"> {text}</span>
            <span className="tw-followcard-stopfollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
