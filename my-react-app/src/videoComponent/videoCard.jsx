import "./videoCard.css";

/**
 * VideoCard — props-driven presentational card.
 * All content is received from the parent; this file does not fetch or store data.
 *
 * @param {string} thumbnailUrl - Image source for the video thumbnail.
 * @param {string} mainTitle    - Card heading.
 * @param {string} description  - Supporting copy under the title.
 * @param {Function} onClick - Opens the selected course.
 */
function VideoCard({ thumbnailUrl, mainTitle, description, onClick }) {
  return (
    // 1. Root wrapper — one card, fully controlled by props
    <button
      type="button"
      className="video-card"
      onClick={onClick}
      aria-label={`Open ${mainTitle} course formulas`}
    >
      {/* 2. Thumbnail section */}
      <div className="video-card__thumbnail">
        <img src={thumbnailUrl} alt={mainTitle} />
      </div>

      {/* 3. Main content — heading + description */}
      <div className="video-card__content">
        <h2 className="video-card__title">{mainTitle}</h2>
        <p className="video-card__description">{description}</p>
      </div>

      {/* 4. Validity — semantic time for content expiry */}
      {/* <div className="video-card__validity">
        <time className="video-card__time" dateTime={dateTimeValue}>
          {validityLabel}
        </time>
      </div> */}
    </button>
  );
}

export default VideoCard;
