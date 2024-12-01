import type { ComponentProps } from "react"
import { type EventOperatorMap, eventOperatorMap } from "../constants/fieldValues"

const eventOperatorOrderList = [
  'not-selected',
  'at',
  'between',
  'since',
  'until'
] as const satisfies readonly (keyof EventOperatorMap)[]

const isEventOperator = (value: string): value is keyof EventOperatorMap => {
  return  Object.keys(eventOperatorMap).includes(value)
}

export const SelectEventOperatorField: React.FC<{
  value: keyof EventOperatorMap
  onChange: (
    value: keyof EventOperatorMap
  ) => void
  disabled: boolean
  required: boolean
}> = ({ value, onChange, disabled, required }) => {
  const handleChange: ComponentProps<'select'>['onChange'] = (e) => {
    const value = e.target.value
    if (!isEventOperator(value)) {
      console.error("Invalid event operator selected")
      onChange('not-selected')
      return
    }
    onChange(value)
  }

  return (
    <select value={value} onChange={handleChange} disabled={disabled} required={required}>
      {
        eventOperatorOrderList.map(key => (
          <option key={`event-operator-${key}`} value={key}>
            {key}
          </option>
        ))
      }
    </select>
  )
}
