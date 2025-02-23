import { Popover, PopoverContent, PopoverTrigger } from "@/components/Popover"
import { cx, focusRing } from "@/lib/utils"
import { RiNotification2Line } from "@remixicon/react"
import { format, formatDistanceToNow } from "date-fns"
import { Button } from "../Button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../Tabs"

interface Notification {
  id: string
  message: string
  date: string
  read: boolean
}

const notifications: Notification[] = [
  {
    id: "msg_j2k4l9m3",
    message:
      "Notificación 1",
    date: "2024-10-17",
    read: false,
  },
  {
    id: "msg_h8n2p5r6",
    message:
      "Notificación 2",
    date: "2023-12-28",
    read: false,
  },
  {
    id: "msg_t7v9w4x2",
    message: "Notificación 3",
    date: "2023-11-30",
    read: false,
  },
  {
    id: "msg_a3b5c7d9",
    message:
      "Notificación 4",
    date: "2022-11-21",
    read: true,
  },
  {
    id: "msg_e2f4g6h8",
    message:
      "Notificación 5",
    date: "2022-09-15",
    read: true,
  },
  {
    id: "msg_k1l3m5n7",
    message: "Notificación 6",
    date: "2022-07-22",
    read: true,
  },
  {
    id: "msg_p8q2r4s6",
    message: "Notificación 7",
    date: "2022-01-06",
    read: true,
  },
  {
    id: "msg_u9v1w3x5",
    message: "Notificación 8",
    date: "2021-11-18",
    read: true,
  }
]

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  const now = new Date()
  const distance = formatDistanceToNow(date, { addSuffix: true })

  return now.getTime() - date.getTime() < 7 * 24 * 60 * 60 * 1000
    ? distance
    : format(date, "d MMM yyyy")
}

const NotificationItem = ({ notification }: { notification: Notification }) => {
  const { message, date, read } = notification
  return (
    <li className="py-2.5">
      <a
        href="#"
        className="relative block rounded-md px-1 py-1.5 hover:bg-gray-100/90 focus:outline-none hover:dark:bg-gray-900"
      >
        {/* Extend touch target to entire field */}
        <span aria-hidden="true" className="absolute inset-0" />
        <p className="text-sm text-gray-900 dark:text-gray-50">
          {!read && (
            <span
              aria-hidden="true"
              className="mb-px mr-1.5 inline-flex size-2 shrink-0 rounded-full bg-blue-500 sm:text-sm dark:bg-blue-500"
            />
          )}
          {message}
        </p>
        <p className="mt-2.5 text-xs text-gray-500 dark:text-gray-500">
          {formatDate(date)}
        </p>
      </a>
    </li>
  )
}

const NotificationList = ({ showAll = false }: { showAll?: boolean }) => {
  const filteredNotifications = showAll
    ? notifications
    : notifications.filter(({ read }) => !read)

  return (
    <ol
      aria-label="Unread notifications"
      className="flex max-h-96 flex-col divide-y divide-gray-200 overflow-y-scroll dark:divide-gray-800"
    >
      {filteredNotifications.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </ol>
  )
}

export function Notifications() {
  const unreadCount = notifications.filter(({ read }) => !read).length

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          aria-label="open notifications"
          className={cx(
            focusRing,
            "group rounded-full p-1 hover:bg-gray-100 data-[state=open]:bg-gray-100 hover:dark:bg-gray-400/10 data-[state=open]:dark:bg-gray-400/10",
          )}
        >
          <span className="flex size-8 items-center justify-center rounded-full border border-gray-300 bg-white p-1 dark:border-gray-700 dark:bg-gray-900 hover:dark:bg-gray-400/10">
            {unreadCount > 0 && (
              <span
                className="absolute right-2.5 top-2.5 size-2 shrink-0 rounded-full bg-blue-500"
                aria-hidden="true"
              />
            )}
            <RiNotification2Line
              className="-ml-px size-4 shrink-0 text-gray-700 group-hover:text-gray-900 dark:text-gray-300 group-hover:dark:text-gray-50"
              aria-hidden="true"
            />
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="z-20 ml-2 max-w-[95vw] px-3 sm:ml-0 sm:max-w-sm"
      >
        <div className="flex items-center justify-between gap-16">
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-50">
            Notificaciones
          </h2>
          <Button variant="ghost">Marcar {unreadCount} como leídos</Button>
        </div>
        <Tabs defaultValue="unread" className="mt-4">
          <TabsList className="grid w-full grid-cols-2" variant="solid">
            <TabsTrigger value="unread">No leídos</TabsTrigger>
            <TabsTrigger value="all">Leídos</TabsTrigger>
          </TabsList>
          <div className="mt-2">
            <TabsContent value="unread">
              <NotificationList />
            </TabsContent>
            <TabsContent value="all">
              <div className="relative">
                <NotificationList showAll />
                <div
                  className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-white dark:to-gray-950"
                  aria-hidden="true"
                />
              </div>
              <Button variant="secondary" className="mt-2 w-full">
                Ver todas
              </Button>
            </TabsContent>
          </div>
        </Tabs>
      </PopoverContent>
    </Popover>
  )
}
