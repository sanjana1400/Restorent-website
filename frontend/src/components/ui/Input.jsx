export default function Input({ label, ...props }) {
    return (
      <div>
        <label className="block font-semibold">{label}</label>
        <input className="w-full p-2 border rounded" {...props} />
      </div>
    );
  }
  