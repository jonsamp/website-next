import React from "react"
import { useRouter } from "next/router"

type Props = {
  // props
}

export default function AccountPage(props: Props) {
  const router = useRouter()
  return <div>AccountPage: {JSON.stringify(router.query)}</div>
}
