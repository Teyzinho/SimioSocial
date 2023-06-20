"use client"
import SideBar from '@/src/scenes/SideBar/SideBar'
import Feed from '@/src/scenes/Feed/Feed'

export default function Home() {
  return (
    <main style={{
      display:"flex"
    }}>
      <SideBar />
      <Feed />
    </main>
  )
}
