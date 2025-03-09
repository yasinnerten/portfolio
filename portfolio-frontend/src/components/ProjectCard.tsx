interface Tag {
  text: string;
  color: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  contributions: string[];
  tags: Tag[];
  imageUrl?: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  contributions, 
  tags,
  imageUrl 
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48 bg-gray-200">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-gray-500">Project Image</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Key Contributions:</h3>
          <ul className="list-disc pl-5 space-y-1">
            {contributions.map((contribution, index) => (
              <li key={index}>{contribution}</li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className={`bg-${tag.color}-100 text-${tag.color}-800 text-xs font-medium px-2.5 py-0.5 rounded`}
            >
              {tag.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
} 