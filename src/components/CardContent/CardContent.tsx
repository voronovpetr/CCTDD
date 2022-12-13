interface CardContentProps {
  name: string
  description: string
}

export default function CardContent({name, description}: CardContentProps) {
  return (
    <div data-cy="card-content" className="card-content">
      <div>{name}</div>
      <div>{description}</div>
    </div>
  )
}
