import {ChangeEvent} from 'react'

type InputDetailProps = {
  name: string
  value: string
  placeholder?: string
  readOnly?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function InputDetail({
  name,
  value,
  placeholder,
  readOnly,
  onChange,
}: InputDetailProps) {
  return (
    <div data-cy={`input-detail-${name}`} className="field">
      <label className="label" htmlFor={name}>
        {name}
      </label>
      <input
        defaultValue={value}
        name={name}
        placeholder={placeholder}
        className="input"
        type="text"
        onChange={onChange}
        readOnly={readOnly}
      />
    </div>
  )
}
