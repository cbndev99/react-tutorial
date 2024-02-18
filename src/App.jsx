import Card from "./Card"
import Button from "./Button"
import Student from "./Student"
import UserGreeting from "./UserGreeting"
import List from "./List"

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "banana", calories: 45 },
    { id: 3, name: "orange", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ]

  const vegetables = [
    { id: 6, name: "potatoes", calories: 110 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "carrots", calories: 25 },
    { id: 9, name: "corn", calories: 63 },
    { id: 10, name: "broccoli", calories: 50 },
  ]

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
      {fruits.length > 0 ? (
        <List items={fruits} category="Fruits"></List>
      ) : null}
      {vegetables.length > 0 ? (
        <List items={vegetables} category="Vegetables"></List>
      ) : null}
    </>
  )
}

export default App
