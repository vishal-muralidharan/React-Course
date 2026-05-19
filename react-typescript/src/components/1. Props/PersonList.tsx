import type { Name } from './Person.types'

type ListProps = {
    names: Name[]
}

export const PersonList = (props: ListProps) => {
  return (
    <div>
        {props.names.map(name => {
            return (
                <div key={name.first}>
                    <h2>{name.first} {name.last}</h2>
                </div>
            )}
        )}
    </div>
  )
}
