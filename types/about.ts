export interface Capability {
  label: string
  items: string[]
}

export interface About {
  heading: string
  body: string
  capabilities: Capability[]
}
