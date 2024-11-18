import * as DialogPrimitive from '@radix-ui/react-dialog';
import './Dialog.scss';

interface DialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  trigger?: React.ReactNode;
}

export const Dialog = ({
  isOpen,
  onOpenChange,
  title,
  description,
  children,
  trigger
}: DialogProps) => {
  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={onOpenChange}>
      {trigger && (
        <DialogPrimitive.Trigger asChild>
          {trigger}
        </DialogPrimitive.Trigger>
      )}
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="dialog-overlay" />
        <DialogPrimitive.Content className="dialog-content">
          {title && (
            <DialogPrimitive.Title className="dialog-title">
              {title}
            </DialogPrimitive.Title>
          )}
          {description && (
            <DialogPrimitive.Description className="dialog-description">
              {description}
            </DialogPrimitive.Description>
          )}
          {children}
          <DialogPrimitive.Close className="dialog-close">
            <span aria-hidden>×</span>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}; 