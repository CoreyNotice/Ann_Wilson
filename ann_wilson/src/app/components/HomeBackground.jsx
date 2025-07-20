import AlertBox from './AlertBox';

export default function HomeBackground() {
  return (
    <div className="position-relative">
      <video autoPlay loop muted className="w-100" style={{ height: '400px', objectFit: 'cover' }}>
        Video
        <source src='/backgroundvid.mp4' type="video/mp4" />
      </video>
      <div className="position-absolute top-0 end-0 p-3">
        <AlertBox />
      </div>
    </div>
  );
}
