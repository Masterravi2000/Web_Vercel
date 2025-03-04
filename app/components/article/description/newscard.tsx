import Image from 'next/image'

interface NewsCardProps {
  title?: string
  category?: string
  createdAt?: string
  description?: string
}

export default function NewsCard({title, category, createdAt, description }: NewsCardProps) {
  return (
    <div className="bg-black p-4 rounded-lg">
      <Image
        src="/articles/4.jpg"
        alt={`Placeholder image for ${category}`}
        width={300}
        height={200}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <p className="text-sm mb-2 text-white">
        {title}
      </p>
      <p className="text-sm mb-2 text-white">
        {description}
      </p>
      <p className="text-sm text-green-500">
        {category} ·
        <span className="text-gray-400">
          {createdAt}
        </span>
      </p>
    </div>
  )
}

