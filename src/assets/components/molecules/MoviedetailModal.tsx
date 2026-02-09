import Button from "../atoms/Buttons";

interface MovieDetailModalProps {
  open: boolean;
  onClose: () => void;
  poster: string;
  title: string;
}

export default function MovieDetailModal({
  open,
  onClose,
  poster,
  title,
}: MovieDetailModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />

      {/* Modal */}
      <div className="relative z-50 mx-auto mt-20 w-[90%] max-w-4xl bg-[#181A1C] rounded-xl overflow-hidden">
        <img src={poster} className="w-full h-[300px] object-cover" />

        <div className="p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>

          <p className="text-gray-400 text-sm mb-4">
            Detail film / series ditaruh di sini (cast, genre, episode, dll).
          </p>

          <Button variant="outline" onClick={onClose}>
            Tutup
          </Button>
        </div>
      </div>
    </div>
  );
}
