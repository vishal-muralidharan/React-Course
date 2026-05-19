type ListProps = {
    names: {
        first: string, 
        last: string
    }[]
}

export const PersonList = (props: ListProps) => {
  return (
    <div>
        {props.names.map(name => {
            return (
                <div>
                    <h2 key={name.first}>{name.first} {name.last}</h2>
                </div>
            )}
        )}
    </div>
  )
}
