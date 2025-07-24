import { MapPin, Calendar, Star, Heart } from 'lucide-react';
import React, { useEffect, useState, useRef} from 'react';
import HeroSection from './hero'; 
import IntroCard from './intro';
import Attractions from './attractions';
import HikingCarousel from './hike_trails';
import SeasonGrid from './season_grid';
import FavoritesTable from './res_bars';

const MadisonVisitPage = () => {
  const [selectedAttraction, setSelectedAttraction] = useState(null);
  const [schedule, setSchedule] = useState({
    Monday: { morning: '', afternoon: '', evening: '' },
    Tuesday: { morning: '', afternoon: '', evening: '' },
    Wednesday: { morning: '', afternoon: '', evening: '' },
    Thursday: { morning: '', afternoon: '', evening: '' },
    Friday: { morning: '', afternoon: '', evening: '' },
    Saturday: { morning: '', afternoon: '', evening: '' },
    Sunday: { morning: '', afternoon: '', evening: '' }
  });

  const attractions = [
    { name: 'Wisconsin State Capitol', icon: '🏛️', description: 'Historic government building with free tours' },
    { name: 'Lake Mendota', icon: '🌊', description: 'Beautiful lake perfect for walks and sunsets' },
    { name: 'Chazen Museum of Art', icon: '🎨', description: 'World-class art collection' },
    { name: 'Wisconsin Cheese Mart', icon: '🧀', description: 'Authentic Wisconsin cheese tasting' },
    { name: 'Olbrich Botanical Gardens', icon: '🌳', description: 'Stunning gardens and conservatory' },
    { name: 'University of Wisconsin-Madison', icon: '🏫', description: 'Historic campus with beautiful architecture' },
    { name: 'Great Dane Pub & Brewing', icon: '🍺', description: 'Local craft brewery and restaurant' },
    { name: 'State Street', icon: '🛍️', description: 'Vibrant shopping and dining district' }
  ];

  const handleScheduleChange = (day, timeOfDay, value) => {
    setSchedule(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        [timeOfDay]: value
      }
    }));
  };


  // Maps API: AIzaSyCLXV_dqXRZPYRWOnlkMIOvvhVDNvHE1bQ
  //src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCLXV_dqXRZPYRWOnlkMIOvvhVDNvHE1bQ&q=Madison,Wisconsin"
  return (
  <>
    <div style={{ background: 'black' }}>
      <HeroSection />
    </div>

    {/* Black bar spacer */}
    <div style={{ height: '80px', backgroundColor: 'black', width: '100%'}} />

    {/* Main background section */}
    <div
      style={{
        background: 'linear-gradient(to bottom, #999599ff, #6F7177, #72624cff, #8d724eff)',
        minHeight: '100%',
        width: '100%',
        color: 'white',
      }}
    >
      <div style={{ paddingTop: '0.3rem' }}>
        <IntroCard />
      </div>

      {/* Other Sections */}
      <Attractions />
      <HikingCarousel />
      <SeasonGrid />
      <FavoritesTable />
    </div>
  </>
  );

};

export default MadisonVisitPage;