function Button() {
  // inline styling
  const styles = {
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    marginBottom: "10px",
  }

  let count = 0
  const handleClick = (name) => {
    if (count < 3) {
      count++
      console.log(`${name} you clicked me ${count} times.`)
    } else {
      console.log(`${name} stop clicking me.`)
    }
  }

  return (
    <button style={styles} onClick={() => handleClick("Bro")}>
      CLICK ME
    </button>
  )
}
export default Button
