import Card from "./Card"
import Button from "./Button"
import Student from "./Student"
import UserGreeting from "./UserGreeting"

function App() {
  return (
    <>
      <div className="center-div">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <Button></Button>
      <Student name="Alex" age={12} isStudent={true}></Student>
      <Student name="Patrick" age={42} isStudent={false}></Student>
      <Student name="Sandy" age={50} isStudent={false}></Student>
      <Student></Student>
      <UserGreeting isLoggedIn={true} username="Alex"></UserGreeting>
      <UserGreeting></UserGreeting>
    </>
  )
}

export default App
