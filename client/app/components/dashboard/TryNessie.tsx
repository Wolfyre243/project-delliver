import { Button } from '../ui/button'
import { useNavigate } from 'react-router'
import SpotlightCard from '../animations/SpotlightCard'

export default function TryNessie() {
  const navigate = useNavigate()

  return (
    // <div className="flex justify-between flex-col h-full flex-wrap p-5">
    <SpotlightCard className="flex justify-between flex-col h-full flex-wrap p-5 rounded-xl">
      <h2 className="font-bold text-4xl text-center">Try our AI assistant</h2>
      <Button
        onClick={() => {
          navigate('/assistant')
        }}
      >
        Try now!
      </Button>
    </SpotlightCard>
    // </div>
  )
}
