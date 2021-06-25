import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <div style={{ padding: "96px calc((100vw - 1200px) / 2)" }}>
    <h1>Thank you for your submission!</h1>
    <Link to="/">Make another submission</Link>
  </div>
)

export default SecondPage
