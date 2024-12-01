import { ComponentProps } from "react";

/**
 * やりたいことメモ:
 *  - form.submit() の後、GH上のinput要素の値をコピーして初期値にする
 *  - 期間指定
 */

function App() {
  const handleChangeMergedSinceDate: ComponentProps<'input'>['onChange'] = (e) => {
    const conditionOperator = 'merged:>='
    const mergedSinceData = e.target.value

    const searchField = document.querySelector<HTMLInputElement>('#js-issues-search')
    if (searchField?.value) {
      const conditions = searchField.value.split(' ').filter(c => !c.includes(conditionOperator) && c !== `is:open`).filter(Boolean)
      const addedConditions = [...conditions, `${conditionOperator}${mergedSinceData}`]
      searchField.value = addedConditions.join(' ')
      searchField.form?.submit()
    }
  }

  return (
    <div>
      <h2>Content Script Sample</h2>
      <p>{'merged:>=YYYY-MM-DD'}</p>
      <input type="date" onChange={handleChangeMergedSinceDate} />
      <p>{'[WIP] merged:YYYY-MM-DD..YYYY-MM-DD'}</p>
      <input type="date" onChange={handleChangeMergedSinceDate} />
    </div>
  );
};

export default App;
