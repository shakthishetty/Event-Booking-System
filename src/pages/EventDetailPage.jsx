import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useEvents } from '../context/EventContext';
import toast from 'react-hot-toast';

export default function EventDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { events, bookEvent } = useEvents();
  
  const event = events.find(e => e.id === parseInt(id));

  if (!event) {
    return <div className="text-center mt-8">Event not found</div>;
  }

  const handleBooking = () => {
    if (!user) {
      toast.error('Please login to book tickets');
      navigate('/login');
      return;
    }
    
    if (event.availableSeats > 0) {
      bookEvent(event.id);
      toast.success('Booking successful!');
    } else {
      toast.error('No seats available');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <img 
        src={event.image} 
        alt={event.title}
        className="w-full h-96 object-cover rounded-lg shadow-lg"
      />
      <div className="mt-8">
        <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
        <p className="text-gray-600 mb-4">{event.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div>
            <h3 className="font-semibold">Date</h3>
            <p>{new Date(event.date).toLocaleDateString()}</p>
          </div>
          <div>
            <h3 className="font-semibold">Category</h3>
            <p>{event.category}</p>
          </div>
          <div>
            <h3 className="font-semibold">Available Seats</h3>
            <p>{event.availableSeats}</p>
          </div>
          <div>
            <h3 className="font-semibold">Price</h3>
            <p>${event.price}</p>
          </div>
        </div>

        <button
          onClick={handleBooking}
          disabled={event.availableSeats === 0}
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
        >
          {event.availableSeats > 0 ? 'Book Now' : 'Sold Out'}
        </button>
      </div>
    </div>
  );
}