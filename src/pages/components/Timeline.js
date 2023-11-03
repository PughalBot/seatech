import { motion } from 'framer-motion';

const Timeline = ({ events }) => {
  return (
    <div className="relative w-full h-8">
      <div className="absolute top-1/2 transform -translate-y-1/2 h-1 bg-gray-300 w-full"></div>
      {events.map((event, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 * index, duration: 0.5 }}
          className={`absolute top-1/2 transform -translate-y-1/2 left-${index * 25}%`}>
          <div className="bg-blue-500 text-white p-4 rounded-lg mb-6">
            {event.label}
          </div>
          <div className="h-6 w-6 bg-blue-500 rounded-full mt-2"></div>
        </motion.div>
      ))}
    </div>
  );
}

export default Timeline;
