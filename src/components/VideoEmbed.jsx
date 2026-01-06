export default function VideoEmbed({ videoUrl }) {
  return (
    <div className="video-embed">
      <iframe src={videoUrl} title="video"></iframe>
    </div>
  );
}
