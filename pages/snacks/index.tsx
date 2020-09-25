import React from "react"
import { useRouter } from "next/router"

type Props = {
  // props
}

export default function SnacksPage(props: Props) {
  const router = useRouter()
  return <div>SnacksPage: {JSON.stringify(router.query)}</div>
}
