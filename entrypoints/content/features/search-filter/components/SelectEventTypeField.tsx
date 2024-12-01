import type { ComponentProps, FC } from 'react';
import { type EventTypeMap, eventTypeMap } from '../constants/fieldValues';

// 表示順を固定したい
const eventTypeOrderList = [
  "not-selected",
  "closed",
  "created",
  "merged",
  "updated"
] as const satisfies readonly (keyof EventTypeMap)[]

const isEventType = (value: string): value is keyof EventTypeMap => {
  return Object.keys(eventTypeMap).includes(value);
};

export const SelectEventTypeField: FC<{
  value: keyof EventTypeMap
  onChange: (
    value: keyof EventTypeMap
  ) => void
}> = ({ value, onChange }) => {
  const handleChange: ComponentProps<'select'>['onChange'] = (e) => {
    const value = e.target.value
    if (!isEventType(value)) {
      console.error("Invalid event type selected");
      onChange('not-selected');
      return
    }
    onChange(value)
  }

  return (
    <select value={value} onChange={handleChange}>
      {
        eventTypeOrderList.map(key => (
          <option key={`event-type-${key}`} value={key}>{key}</option>
        ))
      }
    </select>
);
};
