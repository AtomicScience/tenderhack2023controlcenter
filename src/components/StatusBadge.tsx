import { Badge, DefaultMantineColor } from '@mantine/core';
import { ErrorStatus } from '../models/error'

export type StatusBadgeProps = {
  status: ErrorStatus
}

export const FANCY_STATUS_NAMES = {
  'new': 'Новый',
  'in_progress': 'В процессе',
  'resolved': 'Разрешено',
} satisfies Record<ErrorStatus, string>;

const COLORS_OF_STATUSES = {
  new: "red",
  in_progress: "yellow",
  resolved: "green",
} satisfies Record<ErrorStatus, DefaultMantineColor>;


export const StatusBadge = ({status} : StatusBadgeProps) => {
  return <Badge variant="light" color={COLORS_OF_STATUSES[status]}>
    {FANCY_STATUS_NAMES[status]}
  </Badge>
}