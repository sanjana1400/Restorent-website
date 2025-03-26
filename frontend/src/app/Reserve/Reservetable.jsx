import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "2",
    date: "",
    time: "19:00",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Reservation Details:", formData);
    alert("Reservation submitted successfully!");
    navigate("/");
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-6">Make a Reservation</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <Input label="Name" type="text" name="name" value={formData.name} onChange={handleChange} />
        <Input label="Email" type="email" name="email" value={formData.email} onChange={handleChange} />
        <Input label="Phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} />
        
        <label className="block font-semibold">Guests</label>
        <select name="guests" value={formData.guests} onChange={handleChange} className="w-full p-2 border rounded">
          {[2, 3, 4, 5, 6].map(num => <option key={num} value={num}>{num} Guests</option>)}
        </select>

        <Input label="Date" type="date" name="date" value={formData.date} onChange={handleChange} />
        <Input label="Time" type="time" name="time" value={formData.time} onChange={handleChange} />

        <Button type="submit">Make Reservation</Button>
      </form>
    </div>
  );
}
