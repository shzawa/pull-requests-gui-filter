import "./globals.css";
import { SearchFilter } from "./features/search-filter/layouts/SearchFilter";
import { Dialog } from "./components/Dialog";
import { type EventTypeMap, type EventOperatorMap, eventTypeMap, eventOperatorMap } from "./features/search-filter/constants/fieldValues";

/**
 * やりたいことメモ:
 *  - form.submit() の後、GH上のinput要素の値をコピーして初期値にする
 *  - 期間指定
 */

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const handleSubmit = ({
    type,
    operator,
    fromDate,
    toDate
  }: {
    type: keyof EventTypeMap
    operator: keyof EventOperatorMap
    fromDate: string
    toDate: string
  }) => {
    const searchField = document.querySelector<HTMLInputElement>('#js-issues-search')
    if (!searchField?.value) {
      throw new Error('Search field not found.')
    }
    const searchFieldValues = searchField.value
      .split(' ')
      .filter(Boolean)
      .map(value => {
        const splitted = value.split(':')
        return ({ type: splitted[0], value: splitted[1] })
      })
    if (type !== 'not-selected') {
      const eventCondition = (operator === 'between') ?
        `${eventTypeMap[type]}:${fromDate}${eventOperatorMap[operator]}${toDate}` :
        `${eventTypeMap[type]}:${eventOperatorMap[operator]}${toDate}`

      const result = searchFieldValues.flatMap(value => {
        if (value.type === type) {
          return eventCondition
        }
        // 検索条件の矛盾を避けるため、closed,merged指定時はis:openがあれば除去する
        if ((type === 'closed' || type === 'merged') && value.type === 'is' && value.value === 'open') {
          return
        }
        return `${value.type}:${value.value}`
      })

      searchField.value = result.join(' ')
    }
  }

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>
        Open Dialog
      </button>
      <Dialog
        title='Edit filter conditions'
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        footer={
          <p>footer</p>
        }
      >
        <SearchFilter onSubmit={handleSubmit} />
      </Dialog>
    </>
  )
};

export default App;
