interface GoogleMapProps {
  height?: string;
}

export function GoogleMap({ height = "300px" }: GoogleMapProps) {
  return (
    <div className="overflow-hidden rounded-lg border" style={{ height }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.8!2d23.3547!3d42.6634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z0JHRg9C7LiDQmtC70LjQvNC10L3RgiDQntGF0YDQuNC00YHQutC4IDIz!5e0!3m2!1sbg!2sbg!4v1"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="DHealth — Бул. Климент Охридски 23, София"
      />
    </div>
  );
}
