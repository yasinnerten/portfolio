interface ExperienceItemProps {
  company: string;
  position: string;
  period: string;
  description: string;
  responsibilities: string[];
}

export default function ExperienceItem({
  company,
  position,
  period,
  description,
  responsibilities
}: ExperienceItemProps) {
  return (
    <div>
      <h3 className="text-xl text-blue-600 font-bold">{position}</h3>
      <p className="text-gray-600 mb-2">{period}</p>
      <p className="mb-4">{description}</p>
      <ul className="list-disc pl-5 space-y-1">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  )
} 