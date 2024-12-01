export type EventTypeMap = {
  "not-selected": undefined,
  "closed": "closed",
  "created": "created",
  "merged": "merged",
  "updated": "updated"
}
export const eventTypeMap = {
  "not-selected": undefined,
  "closed": "closed",
  "created": "created",
  "merged": "merged",
  "updated": "updated"
} satisfies EventTypeMap

export type EventOperatorMap = {
  "not-selected": undefined,
  at: "", // ${eventType}:YYYY-MM-DD の形式になるため空文字
  between: "..",
  since: ">=",
  until: "<="
}
export const eventOperatorMap = {
  "not-selected": undefined,
  at: "", // ${eventType}:YYYY-MM-DD の形式になるため空文字
  between: "..",
  since: ">=",
  until: "<="
} satisfies EventOperatorMap
