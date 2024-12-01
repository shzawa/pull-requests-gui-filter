import { FC } from "react"
import { InputDateField } from "../components/InputDateField"
import { SelectEventOperatorField } from "../components/SelectEventOperatorField"
import { SelectEventTypeField } from "../components/SelectEventTypeField"
import { EventOperatorMap, EventTypeMap } from "../constants/fieldValues"

type FormValues =
  | {
    type: keyof Pick<EventTypeMap, "not-selected">
    operator: keyof Pick<EventOperatorMap, 'not-selected'>
    fromDate: ''
    toDate: ''
  }
  | {
    type: keyof Pick<EventTypeMap, 'closed' | 'created' | 'merged' | "updated">
    operator: keyof Pick<EventOperatorMap, 'at' | 'since' | 'until'>
    fromDate: string
    toDate: ''
  }
  | {
    type: keyof Pick<EventTypeMap, 'closed' | 'created' | 'merged' | "updated">
    operator: keyof Pick<EventOperatorMap, 'between'>
    fromDate: string
    toDate: string
  }

export const SearchFilter: FC<{
  onSubmit: (values: {
    type: keyof EventTypeMap
    operator: keyof EventOperatorMap
    fromDate: string
    toDate: string
  }) => void
}> = ({onSubmit}) => {
  const [type, setType]  = useState<keyof EventTypeMap>('not-selected')
  const [operator, setOperator] = useState<keyof EventOperatorMap>('not-selected')
  const [fromDate, setFromDate] = useState<string>('')
  const [toDate, setToDate] = useState<string>('')

  const handleChangeType = (type: keyof EventTypeMap) => {
    setType(type)
    if (operator === 'not-selected') {
      setOperator('at')
    }
    if (toDate === '') {
      setToDate(new Date().toISOString().split('T')[0])
    }
  }
  const handleChangeOperator = (operator: keyof EventOperatorMap) => {
    setOperator(operator)
    if (operator === 'between' && fromDate === '') {
      // 2週間前を設定
      setFromDate(new Date(Date.now() - 1000 * 60 * 60 * 24 * 14).toISOString().split('T')[0])
    }
  }
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    onSubmit({ type, operator, fromDate, toDate });
  }

  return (
    <form onSubmit={handleSubmit}>
      <SelectEventTypeField
        value={type}
        onChange={handleChangeType}
      />
      <SelectEventOperatorField value={operator} onChange={handleChangeOperator} disabled={type === 'not-selected'} required={type !== 'not-selected'} />
      <InputDateField value={fromDate} onChange={setFromDate} disabled={operator !== 'between'} required={operator === 'between'} />
      {'~'}
      <InputDateField value={toDate} onChange={setToDate} disabled={
        operator === 'not-selected'} required={operator !== 'not-selected'} />

      <button type='submit'>ページに反映</button>
    </form>
  )
}
