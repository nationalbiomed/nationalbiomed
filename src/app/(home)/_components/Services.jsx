import { Card } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faTv, faTabletScreenButton } from "@fortawesome/free-solid-svg-icons";

// Array of service items
const serviceItems = [
  {
    id: 1,
    icon: faBed,
    title: "Hospital Bed",
  },
  {
    id: 2,
    icon: faTv,
    title: "Patient Monitor",
  },
  {
    id: 3,
    icon: faTabletScreenButton,
    title: "Tablet Ultrasound",
  },
  {
    id: 4,
    icon: faBed,
    title: "Deluxe Hospital Bed",
  },
  {
    id: 5,
    icon: faTv,
    title: "Smart Patient Monitor",
  },
  {
    id: 6,
    icon: faTabletScreenButton,
    title: "Portable Ultrasound",
  },
  {
    id: 7,
    icon: faBed,
    title: "Adjustable Hospital Bed",
  },
  {
    id: 8,
    icon: faTv,
    title: "Advanced Monitor",
  },
  {
    id: 9,
    icon: faBed,
    title: "Ergonomic Hospital Bed",
  },
];

export default function Services() {
  return (
    <section className="py-16 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary mb-12">
        Our Services
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {serviceItems.map((item) => (
          <ServiceCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

// ServiceCard component
function ServiceCard({ icon, title }) {
  return (
    <Card className="flex flex-col items-center p-4 transition-all duration-300 hover:shadow-lg group">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary">
        <FontAwesomeIcon icon={icon} className="w-8 h-8 text-primary transition-all duration-300 group-hover:text-primary-foreground" />
      </div>
      <h3 className="text-sm md:text-base font-medium text-center">{title}</h3>
    </Card>
  );
}
