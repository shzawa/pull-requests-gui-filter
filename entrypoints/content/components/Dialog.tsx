import type { FC, PropsWithChildren, ReactNode } from "react"
import * as Shadcn from "../shadcn/ui/dialog"

export const Dialog: FC<PropsWithChildren<{
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  footer: ReactNode
  title: string
}>> = ({
  isOpen,
  onOpenChange,
  children,
  footer,
  title,
}) => {
  return (
    <Shadcn.Dialog open={isOpen} onOpenChange={onOpenChange} modal>
      <Shadcn.DialogContent>
        <Shadcn.DialogHeader>
          <Shadcn.DialogTitle>{title}</Shadcn.DialogTitle>
        </Shadcn.DialogHeader>
        {children}
        <Shadcn.DialogFooter>
          {footer}
        </Shadcn.DialogFooter>
      </Shadcn.DialogContent>
    </Shadcn.Dialog>
  )
}
