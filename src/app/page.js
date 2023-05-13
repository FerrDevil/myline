import { VideoBackground } from "@/services/store/styles/startPageStyles";

export default function Home() {
  return (
    <>
      <VideoBackground src="/background.mp4" playsInline autoPlay muted loop />
    </>
  )
}
