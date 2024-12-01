import type { ComponentProps } from "react"

export const InputDateField: React.FC<{
  value: string
  onChange: (value: string) => void
  disabled: boolean
  required: boolean
}> = ({ value, onChange, disabled, required }) => {
  const handleChange: ComponentProps<'input'>['onChange'] = (e) => {
    onChange(e.target.value)
  }

  return (
    <input
      type="date"
      value={value}
      onChange={handleChange}
      disabled={disabled}
      required={required}
    />
  )
}
