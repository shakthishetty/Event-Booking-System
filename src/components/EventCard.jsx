import { Link } from 'react-router-dom';

export default function EventCard({ event }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img 
        src={event.image} 
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-2">{event.description.substring(0, 100)}...</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-blue-600 font-bold">${event.price}</span>
          <Link 
            to={`/event/${event.id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}