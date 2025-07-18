import { type Todo as TodoType } from '../types'

type Props = TodoType

export const Todo: React.FC<Props> = ({ id, title, completed }) => {
  return (
    <div className="view">
    <input
      className="toggle"
      type="checkbox"
      checked={completed}
      onChange={() => {}}
      id={id.toString()}
      />
      <label>{title}</label>

      <button 
      className="destroy"
      onClick={() => {}}
      />

      </div>
  )
}